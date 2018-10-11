const { bbkAuth } = require('./config.js')

const convertBitbucketHook = body => {
	if (!body) return {}
	let change = ((body.push || {}).changes || [])[0] || {}
	let branch = (change.new || {}).name || ''
	let commit = ((change.commits || [])[0] || {}).hash || ''
	let repo = (body.repository || {}).name || ''
	let fullrepo = (body.repository || {}).full_name || ''
	if (!fullrepo) return { err: 'invalid repo fullnam' }
	commit = commit.substring(0, 7)
	return {
		url: `https://:${bbkAuth}@bitbucket.org/${fullrepo}.git`,
		repo,
		commit,
		branch,
	}
}

module.exports = { convertBitbucketHook }
