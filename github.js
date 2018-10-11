const convertGithubHook = body => {
	if (!body) return {}
	let commit = ((body.commits || [])[0] || {}).id || ''
	let repo = (body.repository || {}).name || ''
	let fullrepo = (body.repository || {}).full_name || ''
	let branchsplit = ((body.ref || '') + '').split('/')
	if (branchsplit.length < 3) return { err: 'invalid branch' + body.ref }
	let branch = branchsplit[2]
	if (!fullrepo) return { err: 'invalid repo fullnam' }
	commit = commit.substring(0, 7)
	return { url: `https://github.com/${fullrepo}.git`, repo, commit, branch }
}

module.exports = { convertGithubHook }
