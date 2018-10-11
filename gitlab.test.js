const gitlab = require('./gitlab.js')

test('normal gitlab hook2', () => {
	let out = gitlab.convertGitlabHook({"object_kind":"push","event_name":"push","before":"90b923d9a46a0dfaf0b8782e5fc39b8af554f82c","after":"25cd4e3ba86267b1efd87af295bca9661384e915","ref":"refs/heads/new","checkout_sha":"25cd4e3ba86267b1efd87af295bca9661384e915","message":null,"user_id":1413916,"user_name":"Thanh Pham","user_username":"thanhpk","user_email":"thanhpham@vietnambiz.com","user_avatar":"https://assets.gitlab-static.net/uploads/-/system/user/avatar/1413916/avatar.png","project_id":7946694,"project":{"id":7946694,"name":"payment","description":"","web_url":"https://gitlab.com/subiz/payment","avatar_url":null,"git_ssh_url":"git@gitlab.com:subiz/payment.git","git_http_url":"https://gitlab.com/subiz/payment.git","namespace":"subiz","visibility_level":0,"path_with_namespace":"subiz/payment","default_branch":"master","ci_config_path":null,"homepage":"https://gitlab.com/subiz/payment","url":"git@gitlab.com:subiz/payment.git","ssh_url":"git@gitlab.com:subiz/payment.git","http_url":"https://gitlab.com/subiz/payment.git"},"commits":[{"id":"25cd4e3ba86267b1efd87af295bca9661384e915","message":"add run script\n","timestamp":"2018-10-11T12:05:52Z","url":"https://gitlab.com/subiz/payment/commit/25cd4e3ba86267b1efd87af295bca9661384e915","author":{"name":"Phạm Kiều Thanh","email":"hhnnaahhtt@gmail.com"},"added":["run.yaml","test"],"modified":[".dockerignore","Dockerfile","deploy.yaml","up"],"removed":[".drone.yml",".gcloudignore","build.sh","cloudbuild.yaml","service.yaml"]}],"total_commits_count":1,"repository":{"name":"payment","url":"git@gitlab.com:subiz/payment.git","description":"","homepage":"https://gitlab.com/subiz/payment","git_http_url":"https://gitlab.com/subiz/payment.git","git_ssh_url":"git@gitlab.com:subiz/payment.git","visibility_level":0}})

	expect(out.url).toMatch(/\@gitlab\.com/)
	expect(out.url).toMatch(/subiz\/payment.git/)
	expect(out.commit).toBe('25cd4e3')
	expect(out.repo).toBe('payment')
	expect(out.branch).toBe('new')
})

test('normal gitlab hook', () => {
	let out = gitlab.convertGitlabHook({
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
	})
	expect(out.url).toMatch(/\@gitlab\.com/)
	expect(out.url).toMatch(/subiz\/payment.git/)
	expect(out.commit).toBe('fb301e9')
	expect(out.repo).toBe('payment')
	expect(out.branch).toBe('master')
})

test('emtpy bbk payload', () => {
	let out = gitlab.convertGitlabHook({})
	expect(out.url).toBe(undefined)
	expect(out.url).toBe(undefined)
	expect(out.commit).toBe(undefined)
	expect(out.repo).toBe(undefined)
})
