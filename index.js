var url = require('url')
const { convertBitbucketHook } = require('./bitbucket.js')
const { submitBuild } = require('./gcp.js')
const { convertGithubHook } = require('./github.js')
const { convertGitlabHook } = require('./gitlab.js')

const { accessToken } = require('./config.js')

const verifyAccessToken = uri => {
	console.log('EXPECT', url.parse(uri, true).query.access_token)
	return url.parse(uri, true).query.access_token !== accessToken
}

const mapService = uri => url.parse(uri, true).query.provider || ''

exports.hook = async (req, res) => {
	const VERSION = 1.25
	let [code, head, body] = await handle(req.url, req.body)
	head = Object.assign({ 'X-VERSION': VERSION }, head)
	res.writeHead(code, head)
	res.end(JSON.stringify(body))
}

async function handle (uri, body) {
	if (!verifyAccessToken(uri)) return [400, null, 'invalid access token']

	let repo
	let provider = mapService(uri)
	if (provider === 'bitbucket') repo = convertBitbucketHook(body)
	else if (provider === 'gitlab') repo = convertGitlabHook(body)
	else if (provider === 'github') repo = convertGithubHook(body)
	else return [400, null, 'unknown provider in ?provider=']

	if (repo.branch !== 'master') return [200, null, 'not master branch']

	let err = await submitBuild(repo.url, repo.repo, repo.commit)
	if (err) return [200, null, { repo, err }]
	return [200, null, repo]
}
