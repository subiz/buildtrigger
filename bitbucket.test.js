const bbk = require('./bitbucket.js')

test('normal bbk hook', () => {
	let out = bbk.convertBitbucketHook({
		push: {
			changes: [
				{
					forced: false,
					old: {
						target: {
							hash: '5b00191abfd5368297ead682d1b73e80b7e30cf5',
							links: {
								self: {
									href:
										'https://api.bitbucket.org/2.0/repositories/subiz/lang/commit/5b00191abfd5368297ead682d1b73e80b7e30cf5',
								},
								html: {
									href:
										'https://bitbucket.org/subiz/lang/commits/5b00191abfd5368297ead682d1b73e80b7e30cf5',
								},
							},
							author: {
								raw: 'Long Vu <longvu@vietnambiz.com>',
								type: 'author',
							},
							summary: {
								raw: 'update lang\n',
								markup: 'markdown',
								html: '<p>update lang</p>',
								type: 'rendered',
							},
							parents: [
								{
									type: 'commit',
									hash: '1d55fe1d49ead623651c3950dae05458b4327c0d',
									links: {
										self: {
											href:
												'https://api.bitbucket.org/2.0/repositories/subiz/lang/commit/1d55fe1d49ead623651c3950dae05458b4327c0d',
										},
										html: {
											href:
												'https://bitbucket.org/subiz/lang/commits/1d55fe1d49ead623651c3950dae05458b4327c0d',
										},
									},
								},
							],
							date: '2018-10-11T06:21:21+00:00',
							message: 'update lang\n',
							type: 'commit',
						},
						links: {
							commits: {
								href:
									'https://api.bitbucket.org/2.0/repositories/subiz/lang/commits/master',
							},
							self: {
								href:
									'https://api.bitbucket.org/2.0/repositories/subiz/lang/refs/branches/master',
							},
							html: {
								href: 'https://bitbucket.org/subiz/lang/branch/master',
							},
						},
						default_merge_strategy: 'merge_commit',
						merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
						type: 'branch',
						name: 'master',
					},
					links: {
						commits: {
							href:
								'https://api.bitbucket.org/2.0/repositories/subiz/lang/commits?include=823a34c9451fba2b25f5d707d9a2bce4c148bd42&exclude=5b00191abfd5368297ead682d1b73e80b7e30cf5',
						},
						html: {
							href:
								'https://bitbucket.org/subiz/lang/branches/compare/823a34c9451fba2b25f5d707d9a2bce4c148bd42..5b00191abfd5368297ead682d1b73e80b7e30cf5',
						},
						diff: {
							href:
								'https://api.bitbucket.org/2.0/repositories/subiz/lang/diff/823a34c9451fba2b25f5d707d9a2bce4c148bd42..5b00191abfd5368297ead682d1b73e80b7e30cf5',
						},
					},
					truncated: false,
					commits: [
						{
							hash: '823a34c9451fba2b25f5d707d9a2bce4c148bd42',
							links: {
								self: {
									href:
										'https://api.bitbucket.org/2.0/repositories/subiz/lang/commit/823a34c9451fba2b25f5d707d9a2bce4c148bd42',
								},
								comments: {
									href:
										'https://api.bitbucket.org/2.0/repositories/subiz/lang/commit/823a34c9451fba2b25f5d707d9a2bce4c148bd42/comments',
								},
								patch: {
									href:
										'https://api.bitbucket.org/2.0/repositories/subiz/lang/patch/823a34c9451fba2b25f5d707d9a2bce4c148bd42',
								},
								html: {
									href:
										'https://bitbucket.org/subiz/lang/commits/823a34c9451fba2b25f5d707d9a2bce4c148bd42',
								},
								diff: {
									href:
										'https://api.bitbucket.org/2.0/repositories/subiz/lang/diff/823a34c9451fba2b25f5d707d9a2bce4c148bd42',
								},
								approve: {
									href:
										'https://api.bitbucket.org/2.0/repositories/subiz/lang/commit/823a34c9451fba2b25f5d707d9a2bce4c148bd42/approve',
								},
								statuses: {
									href:
										'https://api.bitbucket.org/2.0/repositories/subiz/lang/commit/823a34c9451fba2b25f5d707d9a2bce4c148bd42/statuses',
								},
							},
							author: {
								raw: 'Long Vu <longvu@vietnambiz.com>',
								type: 'author',
							},
							summary: {
								raw: 'update lang\n',
								markup: 'markdown',
								html: '<p>update lang</p>',
								type: 'rendered',
							},
							parents: [
								{
									type: 'commit',
									hash: '5b00191abfd5368297ead682d1b73e80b7e30cf5',
									links: {
										self: {
											href:
												'https://api.bitbucket.org/2.0/repositories/subiz/lang/commit/5b00191abfd5368297ead682d1b73e80b7e30cf5',
										},
										html: {
											href:
												'https://bitbucket.org/subiz/lang/commits/5b00191abfd5368297ead682d1b73e80b7e30cf5',
										},
									},
								},
							],
							date: '2018-10-11T06:26:29+00:00',
							message: 'update lang\n',
							type: 'commit',
						},
					],
					created: false,
					closed: false,
					new: {
						target: {
							hash: '823a34c9451fba2b25f5d707d9a2bce4c148bd42',
							links: {
								self: {
									href:
										'https://api.bitbucket.org/2.0/repositories/subiz/lang/commit/823a34c9451fba2b25f5d707d9a2bce4c148bd42',
								},
								html: {
									href:
										'https://bitbucket.org/subiz/lang/commits/823a34c9451fba2b25f5d707d9a2bce4c148bd42',
								},
							},
							author: {
								raw: 'Long Vu <longvu@vietnambiz.com>',
								type: 'author',
							},
							summary: {
								raw: 'update lang\n',
								markup: 'markdown',
								html: '<p>update lang</p>',
								type: 'rendered',
							},
							parents: [
								{
									type: 'commit',
									hash: '5b00191abfd5368297ead682d1b73e80b7e30cf5',
									links: {
										self: {
											href:
												'https://api.bitbucket.org/2.0/repositories/subiz/lang/commit/5b00191abfd5368297ead682d1b73e80b7e30cf5',
										},
										html: {
											href:
												'https://bitbucket.org/subiz/lang/commits/5b00191abfd5368297ead682d1b73e80b7e30cf5',
										},
									},
								},
							],
							date: '2018-10-11T06:26:29+00:00',
							message: 'update lang\n',
							type: 'commit',
						},
						links: {
							commits: {
								href:
									'https://api.bitbucket.org/2.0/repositories/subiz/lang/commits/master',
							},
							self: {
								href:
									'https://api.bitbucket.org/2.0/repositories/subiz/lang/refs/branches/master',
							},
							html: {
								href: 'https://bitbucket.org/subiz/lang/branch/master',
							},
						},
						default_merge_strategy: 'merge_commit',
						merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
						type: 'branch',
						name: 'master',
					},
				},
			],
		},
		repository: {
			scm: 'git',
			website: '',
			name: 'lang',
			links: {
				self: {
					href: 'https://api.bitbucket.org/2.0/repositories/subiz/lang',
				},
				html: {
					href: 'https://bitbucket.org/subiz/lang',
				},
				avatar: {
					href:
						'https://bytebucket.org/ravatar/%7B1773f0d6-456d-4187-a14f-11a607253d54%7D?ts=go',
				},
			},
			project: {
				links: {
					self: {
						href: 'https://api.bitbucket.org/2.0/teams/subiz/projects/SV',
					},
					html: {
						href: 'https://bitbucket.org/account/user/subiz/projects/SV',
					},
					avatar: {
						href:
							'https://bitbucket.org/account/user/subiz/projects/SV/avatar/32',
					},
				},
				type: 'project',
				uuid: '{df9444b6-5164-47ff-92d1-7e642a83a61c}',
				key: 'SV',
				name: 'Subiz V4',
			},
			full_name: 'subiz/lang',
			owner: {
				username: 'subiz',
				type: 'team',
				display_name: 'Subiz',
				uuid: '{207ffd17-fc85-49f0-af14-546d336eeea2}',
				links: {
					self: {
						href: 'https://api.bitbucket.org/2.0/teams/subiz',
					},
					html: {
						href: 'https://bitbucket.org/subiz/',
					},
					avatar: {
						href: 'https://bitbucket.org/account/subiz/avatar/',
					},
				},
			},
			type: 'repository',
			is_private: true,
			uuid: '{1773f0d6-456d-4187-a14f-11a607253d54}',
		},
		actor: {
			username: 'x2vuduclong',
			display_name: 'Long Vu',
			account_id: '557058:6f30a65b-145c-4435-afda-d51fe7af95e3',
			links: {
				self: {
					href: 'https://api.bitbucket.org/2.0/users/x2vuduclong',
				},
				html: {
					href: 'https://bitbucket.org/x2vuduclong/',
				},
				avatar: {
					href: 'https://bitbucket.org/account/x2vuduclong/avatar/',
				},
			},
			type: 'user',
			nickname: 'x2vuduclong',
			uuid: '{bff4c0ca-795c-4262-b65e-b26b15d0a650}',
		},
	})
	expect(out.url).toMatch(/\@bitbucket\.org/)
	expect(out.url).toMatch(/subiz\/lang.git/)
	expect(out.commit).toBe('823a34c')
	expect(out.repo).toBe('lang')
	expect(out.branch).toBe('master')
})

test('emtpy bbk payload', () => {
	let out = bbk.convertBitbucketHook({})
	expect(out.url).toBe(undefined)
	expect(out.url).toBe(undefined)
	expect(out.commit).toBe(undefined)
	expect(out.repo).toBe(undefined)
})
