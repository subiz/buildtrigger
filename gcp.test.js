const gcp = require('./gcp.js')
const gitlab = require('./gitlab.js')

const body1 = {
	object_kind: 'push',
	event_name: 'push',
	before: '95d189d00264e5b1f663d2fd9addbbedbb567a3c',
	after: 'fb301e9b47678ba499da247881719bc9f0bf36ee',
	ref: 'refs/heads/master',
	checkout_sha: 'fb301e9b47678ba499da247881719bc9f0bf36ee',
	message: null,
	user_id: 1413916,
	user_name: 'Thanh Pham',
	user_username: 'thanhpk',
	user_email: 'thanhpham@vietnambiz.com',
	user_avatar:
		'https://assets.gitlab-static.net/uploads/-/system/user/avatar/1413916/avatar.png',
	project_id: 7946694,
	project: {
		id: 7946694,
		name: 'payment',
		description: '',
		web_url: 'https://gitlab.com/subiz/payment',
		avatar_url: null,
		git_ssh_url: 'git@gitlab.com:subiz/payment.git',
		git_http_url: 'https://gitlab.com/subiz/payment.git',
		namespace: 'subiz',
		visibility_level: 0,
		path_with_namespace: 'subiz/payment',
		default_branch: 'master',
		ci_config_path: null,
		homepage: 'https://gitlab.com/subiz/payment',
		url: 'git@gitlab.com:subiz/payment.git',
		ssh_url: 'git@gitlab.com:subiz/payment.git',
		http_url: 'https://gitlab.com/subiz/payment.git',
	},
	commits: [
		{
			id: 'fb301e9b47678ba499da247881719bc9f0bf36ee',
			message: 'remove gocommon out of database\n',
			timestamp: '2018-08-22T09:26:37Z',
			url:
				'https://gitlab.com/subiz/payment/commit/fb301e9b47678ba499da247881719bc9f0bf36ee',
			author: { name: 'Phạm Kiều Thanh', email: 'hhnnaahhtt@gmail.com' },
			added: [],
			modified: ['database.go'],
			removed: [],
		},
		{
			id: '26418bc0dbc7f5c0f6be552757dc0ab94e0861b7',
			message: 'fix core\n',
			timestamp: '2018-08-22T09:26:08Z',
			url:
				'https://gitlab.com/subiz/payment/commit/26418bc0dbc7f5c0f6be552757dc0ab94e0861b7',
			author: { name: 'Phạm Kiều Thanh', email: 'hhnnaahhtt@gmail.com' },
			added: [],
			modified: [
				'core/invoice_test.go',
				'core/log.go',
				'core/migrate.go',
				'core/plan.go',
				'core/worker_test.go',
			],
			removed: ['core/payment_test.go', 'core/renew_worker.go'],
		},
		{
			id: '95d189d00264e5b1f663d2fd9addbbedbb567a3c',
			message: 'fix cron\n',
			timestamp: '2018-08-22T09:26:00Z',
			url:
				'https://gitlab.com/subiz/payment/commit/95d189d00264e5b1f663d2fd9addbbedbb567a3c',
			author: { name: 'Phạm Kiều Thanh', email: 'hhnnaahhtt@gmail.com' },
			added: [],
			modified: ['cron/downgrade.go', 'cron/invgen.go', 'cron/pay.go'],
			removed: [],
		},
	],
	total_commits_count: 3,
	repository: {
		name: 'payment',
		url: 'git@gitlab.com:subiz/payment.git',
		description: '',
		homepage: 'https://gitlab.com/subiz/payment',
		git_http_url: 'https://gitlab.com/subiz/payment.git',
		git_ssh_url: 'git@gitlab.com:subiz/payment.git',
		visibility_level: 0,
	},
}

test('submit build', async () => {
	let repo = gitlab.convertGitlabHook(body1)
	let err = await gcp.submitBuild(repo.url, repo.repo, repo.commit)
	expect(err).toBe(undefined)
})
