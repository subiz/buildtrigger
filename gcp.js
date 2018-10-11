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
		id: 'git',
		name: 'gcr.io/cloud-builders/git',
		entrypoint: 'sh',
		args: [
			'-c',
			'git clone $_GITURL --depth 1 --branch new --single-branch /tmp/$_NAME && mv /tmp/$_NAME/.git . && ls && git reset --hard',
		],
	},
	{
		id: 'cache',
		name: 'gcr.io/cloud-builders/gsutil',
		entrypoint: 'sh',
		args: [
			'-c',
			'gsutil cp gs://artifacts.subiz-version-4.appspot.com/$_NAME.tar.gz $_NAME.tar.gz && tar -zxf $_NAME.tar.gz',
		],
		waitFor: ['-'],
	},
	{
		name: 'subiz/dockerun:1.1.3',
		entrypoint: '/bin/sh',
		args: [
			'-c',
			"echo '#!/bin/sh' > run.sh && ls && dockerun run.yaml >> run.sh && chmod +x run.sh",
		],
		waitFor: ['git', 'cache'],
	},
	{
		id: 'run',
		name: 'gcr.io/cloud-builders/docker',
		env: [
			'NAME=$_NAME',
			'DOCKERHOST=$_DOCKERHOST',
			'ORG=$_ORG',
			'VERSION=$_VERSION',
		],
		entrypoint: './run.sh',
	},
	{
		id: 'configmap',
		name: 'subiz/configmap:1.0.13',
		entrypoint: 'sh',
		args: [
			'-c',
			'cp Dockerfile Dockerfile.tmp && configmap -config=config.yaml -format=docker -compact configmap.yaml >> Dockerfile.tmp',
		],
		waitFor: ['git'],
	},
	{
		id: 'build-image',
		name: 'gcr.io/cloud-builders/docker',
		entrypoint: 'sh',
		args: [
			'-c',
			'docker build -t $_DOCKERHOST$_ORG/$_NAME:$_VERSION -f Dockerfile.tmp . && docker push ${_DOCKERHOST}$_ORG/$_NAME:$_VERSION',
		],
		waitFor: ['configmap', 'run'],
	},
	{
		name: 'gcr.io/cloud-builders/gsutil',
		entrypoint: 'sh',
		args: [
			'-c',
			'tar -zcf $_NAME.tar.gz .cache && gsutil cp $_NAME.tar.gz gs://artifacts.subiz-version-4.appspot.com/$_NAME.tar.gz',
		],
		waitFor: ['run'],
	},
	{
		name: 'gcr.io/cloud-builders/kubectl',
		args: ['get', 'pod'],
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
      "object": "config.yaml.tar.gz"
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
