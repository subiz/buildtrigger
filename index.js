var url = require('url')
const { convertBitbucketHook } = require('./bitbucket.js')
const { submitBuild } = require('./gcp.js')
const { convertGithubHook } = require('./github.js')
const { convertGitlabHook } = require('./gitlab.js')

const { accessToken } = require('./config.js')

const verifyAccessToken = req =>
	url.parse(req.url, true).query.access_token !== accessToken

const mapService = req => url.parse(req.url, true).query.provider || ''

exports.hook = async (req, res) => {
	if (!verifyAccessToken(req)) {
		res.status(400).send('invalid access token')
		return
	}

	let repo
	let provider = mapService(req)
	if (provider === 'bitbucket') repo = convertBitbucketHook(req.body)
	else if (provider === 'gitlab') repo = convertGitlabHook(req.body)
	else if (provider === 'github') repo = convertGithubHook(req.body)
	else {
		res.status(400).send('unknow provider in ?provider=')
		return
	}
	let err = await submitBuild(repo.url, repo.repo, repo.commit)
	if (err) {
		res.status(400).send({ repo, err })
		return
	}
	res.send(repo)
}
