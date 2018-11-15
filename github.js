const convertGithubHook = body => {
	if (!body) return {}
	try {
		body = JSON.parse(body.payload)
	} catch (e) {
		return { err: 'invalid body: ' + body }
	}
	let commit = ((body.commits || [])[0] || {}).id || ''
	let repo = (body.repository || {}).name || ''
	let fullrepo = (body.repository || {}).full_name || ''
	let branchsplit = ((body.ref || '') + '').split('/')
	if (branchsplit.length < 3) { return { err: 'invalid branch: ' + JSON.stringify(body) } }
	let branch = branchsplit[2]
	if (!fullrepo) return { err: 'invalid repo fullnam' }
	commit = commit.substring(0, 7)
	return { url: `https://github.com/${fullrepo}.git`, repo, commit, branch }
}

module.exports = { convertGithubHook }
