const gitlabAuth = process.env.GITLAB_AUTH

const convertGitlabHook = body => {
	if (!body) return { url: '', repo: '', commit: '', branch: '' }
	let commit = ((body.commits || [])[0] || {}).id || ''
	let repo = (body.project || {}).name || ''
	let fullrepo = (body.project || {}).path_with_namespace || ''
	let branchsplit = ((body.ref || '') + '').split('/')
	if (branchsplit.length < 3) return { err: 'invalid branch' + body.ref }
	let branch = branchsplit[2]
	if (!fullrepo) return { err: 'invalid repo fullname' }
	commit = commit.substring(0, 7)
	return {
		url: `https://${gitlabAuth}@gitlab.com/${fullrepo}.git`,
		repo,
		commit,
		branch,
	}
}

module.exports = { convertGitlabHook }
