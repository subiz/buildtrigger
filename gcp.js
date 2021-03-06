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
		key: Buffer.from(process.env.GCP_KEY, 'base64').toString(),
		email: 'buildtrigger@subiz-version-4.iam.gserviceaccount.com',
		scope: ['https://www.googleapis.com/auth/cloud-platform'],
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
			'gsutil cp gs://artifacts.subiz-version-4.appspot.com/$_NAME.cache.tar.gz $_NAME.cache.tar.gz && tar -zxf $_NAME.cache.tar.gz || exit 0',
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
			'echo "#!/bin/sh" > /tmp/$_NAME.build && ./.dockerun help && ./.dockerun build.yaml >> /tmp/$_NAME.build && chmod +x /tmp/$_NAME.build && /tmp/$_NAME.build',
		],
		waitFor: ['cache', 'git'],
	},
	{
		id: 'build-image',
		name: 'gcr.io/cloud-builders/docker',
		entrypoint: 'sh',
		args: [
			'-c',
			'if [ -f Dockerfile ]; then date && cp Dockerfile .$_NAME.Dockerfile.tmp && ./.configmap -config=.config.yaml -format=docker -compact configmap.yaml >> .$_NAME.Dockerfile.tmp && docker build -q -t $_DOCKERHOST$_ORG/$_NAME:$_VERSION -f .$_NAME.Dockerfile.tmp . && date && docker push ${_DOCKERHOST}$_ORG/$_NAME:$_VERSION && date; fi',
		],
		waitFor: ['run'],
	},
	{
		id: 'save cache',
		name: 'gcr.io/cloud-builders/gsutil',
		entrypoint: 'sh',
		args: [
			'-c',
			'if [ -d .cache ]; then tar -zcf $_NAME.cache.tar.gz .cache && gsutil cp $_NAME.cache.tar.gz gs://artifacts.subiz-version-4.appspot.com; fi',
		],
		waitFor: ['run'],
	},
	{
		id: 'publish artifact',
		name: 'gcr.io/cloud-builders/gsutil',
		entrypoint: 'sh',
		args: [
			'-c',
			'if [ -d public ]; then gsutil -h "Cache-Control:public, max-age=31536000" -m cp -Zr public gs://public-gcs.subiz-cdn.com/$_NAME/; fi',
		],
		waitFor: ['run'],
	},
	{
		id: 'deploy',
		name: 'gcr.io/cloud-builders/kubectl',
		entrypoint: 'sh',
		args: [
			'-c',
			'if [ -f deploy.prod.yaml ]; then export GUID=$(date +%s) && export IMG="$_DOCKERHOST$_ORG/$_NAME:$_VERSION" && ./.envsubst < deploy.prod.yaml > /tmp/$_NAME.deploy.prod.yaml && cat /tmp/$_NAME.deploy.prod.yaml && /builder/kubectl.bash apply -f /tmp/$_NAME.deploy.prod.yaml; fi',
		],
		env: [
			'CLOUDSDK_COMPUTE_ZONE=asia-southeast1-a',
			'CLOUDSDK_CONTAINER_CLUSTER=subiz',
		],
		waitFor: ['build-image'],
	},
	{
		id: 'last',
		name: 'alpine',
		entrypoint: 'sh',
		args: ['-c', 'if [ -f last.sh ]; then ./last.sh; fi'],
	},
]

const makeBuildConfig = (giturl, name, version, org) => `{
  "source": {
    "storageSource": {
      "bucket": "artifacts.subiz-version-4.appspot.com",
      "object": "prod.tar.gz"
    }
  },
  "tags": ["${name}"],
  "steps": ${JSON.stringify(gSteps)},
  "substitutions" : {
    "_GITURL": "${giturl}",
    "_NAME": "${name}",
    "_VERSION": "${version}",
    "_DOCKERHOST":"gcr.io/",
    "_ORG": "${org}",
  }
}`

module.exports = { submitBuild }
