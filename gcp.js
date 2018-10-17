const { GoogleToken } = require('gtoken')
const ajax = require('@subiz/ajax/src/ajax.js')
var fetch = require('node-fetch')
ajax.env.fetch = fetch

const cloudbuildreq = ajax.post(
	'https://cloudbuild.googleapis.com/',
	'v1/projects/subiz-version-4/builds'
)

const getAccessToken = async () =>
	new GoogleToken({
		keyFile: './Subiz-version-4-e5b7260d84d0.json', // or path to .p12 key file
		email: 'buildtrigger@subiz-version-4.iam.gserviceaccount.com',
		scope: ['https://www.googleapis.com/auth/cloud-platform'], // or space-delimited string of scopes
	}).getToken()

const submitBuild = async (giturl, name, version) => {
	if (!giturl || !name || !version) return 'missing input'

	const org = 'subiz-version-4'
	let token = await getAccessToken()
	let config = makeBuildConfig(giturl, name, version, org)
	let [code, body, err] = await cloudbuildreq
		.setHeader({ Authorization: 'Bearer ' + token })
		.send(config)
	if (err) return err

	if (code < 200 || code > 299) {
		return 'google not return 200 (' + code + ')' + body
	}
	return undefined
}

const gSteps = [
{
	name: 'gcr.io/cloud-builders/gcloud',
args: ['info'],
},
	{
		id: 'git',
		name: 'gcr.io/cloud-builders/git',
		entrypoint: 'sh',
		args: [
			'-c',
			'git clone $_GITURL --depth 1 --branch master --single-branch /tmp/$_NAME && mv /tmp/$_NAME/.git . && git reset --hard',
		],
	},
	{
		id: 'cache',
		name: 'gcr.io/cloud-builders/gsutil',
		entrypoint: 'sh',
		args: [
			'-c',
			'gsutil cp gs://artifacts.subiz-version-4.appspot.com/$_NAME.cache.tar.gz $_NAME.cache.tar.gz && tar -zxf $_NAME.cache.tar.gz || exit && ls -lah /builder/home/.config/gcloud',
		],
		waitFor: ['-'],
	},
	{
		id: 'run',
		name: 'gcr.io/cloud-builders/docker',
		entrypoint: '/bin/sh',
		env: [
			'NAME=$_NAME',
			'DOCKERHOST=$_DOCKERHOST',
			'ORG=$_ORG',
			'VERSION=$_VERSION',
		],
		args: [
			'-c',
			'cd ~ && pwd && echo "#!/bin/sh" > /tmp/$_NAME.build && ./.dockerun build.yaml >> /tmp/$_NAME.build && chmod +x /tmp/$_NAME.build && /tmp/$_NAME.build',
		],
		waitFor: ['cache', 'git'],
	},
	{
		id: 'build-image',
		name: 'gcr.io/cloud-builders/docker',
		entrypoint: 'sh',
		args: [
			'-c',
			'[ -f Dockerfile ] && cp Dockerfile .$_NAME.Dockerfile.tmp && ./.configmap -config=.config.yaml -format=docker -compact configmap.yaml >> .$_NAME.Dockerfile.tmp && docker build -q -t $_DOCKERHOST$_ORG/$_NAME:$_VERSION -f .$_NAME.Dockerfile.tmp . && docker push ${_DOCKERHOST}$_ORG/$_NAME:$_VERSION && ls -lah /builder/home/.config/gcloud',
		],
		waitFor: ['run'],
	},
	{
		id: 'save cache',
		name: 'gcr.io/cloud-builders/gsutil',
		entrypoint: 'sh',
		args: [
			'-c',
			'[ -d .cache ] && tar -zcf $_NAME.cache.tar.gz .cache && gsutil cp $_NAME.cache.tar.gz gs://artifacts.subiz-version-4.appspot.com || exit 0',
		],
		waitFor: ['run'],
	},
	{
		id: 'deploy',
		name: 'gcr.io/cloud-builders/kubectl',
		entrypoint: 'sh',
		args: ['-c', '[ -f deploy.prod.yaml ] && export IMG="$_DOCKERHOST$_ORG/$_NAME:$_VERSION" && ./.envsubst < deploy.prod.yaml > /tmp/$_NAME.deploy.prod.yaml && cat /tmp/$_NAME.deploy.prod.yaml && /builder/kubectl.bash apply -f /tmp/$_NAME.deploy.prod.yaml'],
		env: [
			'CLOUDSDK_COMPUTE_ZONE=us-central1-a',
			'CLOUDSDK_CONTAINER_CLUSTER=app-cluster-1',
		],
		waitFor: ['build-image'],
	},
]

const makeBuildConfig = (giturl, name, version, org) => `
{
	"source": {
		"storageSource": {
      "bucket": "artifacts.subiz-version-4.appspot.com",
      "object": "prod.tar.gz"
		}
	},
	"steps": ${JSON.stringify(gSteps)},
	"substitutions" : {
		"_GITURL": "${giturl}",
		"_NAME": "${name}",
		"_VERSION": "${version}",
		"_DOCKERHOST":"gcr.io/",
		"_ORG": "${org}",
	},
}
`

module.exports = { submitBuild }
