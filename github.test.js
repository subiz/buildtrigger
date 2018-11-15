const github = require('./github.js')

test('normal github hook', () => {
	let out = github.convertGithubHook({
  "ref": "refs/heads/master",
  "before": "8c58fa2c2eeee13984f8e3139d3d255503955ac6",
  "after": "4bbe98d60efeeb085c58c668835263367c167139",
  "created": false,
  "deleted": false,
  "forced": false,
  "base_ref": null,
  "compare": "https://github.com/subiz/header/compare/8c58fa2c2eee...4bbe98d60efe",
  "commits": [
    {
      "id": "4bbe98d60efeeb085c58c668835263367c167139",
      "tree_id": "a52f8e33b3206f22d45312be12f28047b42a05c8",
      "distinct": true,
      "message": "rebuild",
      "timestamp": "2018-10-11T18:46:19+07:00",
      "url": "https://github.com/subiz/header/commit/4bbe98d60efeeb085c58c668835263367c167139",
      "author": {
        "name": "Phạm Kiều Thanh",
        "email": "hhnnaahhtt@gmail.com",
        "username": "thanhpk"
      },
      "committer": {
        "name": "Phạm Kiều Thanh",
        "email": "hhnnaahhtt@gmail.com",
        "username": "thanhpk"
      },
      "added": [

      ],
      "removed": [

      ],
      "modified": [
        "account/account.pb.go",
        "api/api.pb.go",
        "auth/auth.pb.go",
        "client/client.pb.go",
        "common/common.pb.go",
        "content/content.pb.go",
        "conversation/conversation.pb.go",
        "dashboard/dashboard.pb.go",
        "email/email.pb.go",
        "event/event.pb.go",
        "fabikon/fabikon.pb.go",
        "file/file.pb.go",
        "kafpc/kafpc.pb.go",
        "kv/kv.pb.go",
        "lang/lang.pb.go",
        "logan/logan.pb.go",
        "mailkon/mailkon.pb.go",
        "noti5/noti5.pb.go",
        "notibox/notibox.pb.go",
        "payment/payment.pb.go",
        "pubsub/pubsub.pb.go",
        "scheduler/scheduler.pb.go",
        "template/template.pb.go",
        "user/user.pb.go",
        "webhook4/webhook4.pb.go",
        "widget/widget.pb.go",
        "ws/ws.pb.go"
      ]
    }
  ],
  "head_commit": {
    "id": "4bbe98d60efeeb085c58c668835263367c167139",
    "tree_id": "a52f8e33b3206f22d45312be12f28047b42a05c8",
    "distinct": true,
    "message": "rebuild",
    "timestamp": "2018-10-11T18:46:19+07:00",
    "url": "https://github.com/subiz/header/commit/4bbe98d60efeeb085c58c668835263367c167139",
    "author": {
      "name": "Phạm Kiều Thanh",
      "email": "hhnnaahhtt@gmail.com",
      "username": "thanhpk"
    },
    "committer": {
      "name": "Phạm Kiều Thanh",
      "email": "hhnnaahhtt@gmail.com",
      "username": "thanhpk"
    },
    "added": [

    ],
    "removed": [

    ],
    "modified": [
      "account/account.pb.go",
      "api/api.pb.go",
      "auth/auth.pb.go",
      "client/client.pb.go",
      "common/common.pb.go",
      "content/content.pb.go",
      "conversation/conversation.pb.go",
      "dashboard/dashboard.pb.go",
      "email/email.pb.go",
      "event/event.pb.go",
      "fabikon/fabikon.pb.go",
      "file/file.pb.go",
      "kafpc/kafpc.pb.go",
      "kv/kv.pb.go",
      "lang/lang.pb.go",
      "logan/logan.pb.go",
      "mailkon/mailkon.pb.go",
      "noti5/noti5.pb.go",
      "notibox/notibox.pb.go",
      "payment/payment.pb.go",
      "pubsub/pubsub.pb.go",
      "scheduler/scheduler.pb.go",
      "template/template.pb.go",
      "user/user.pb.go",
      "webhook4/webhook4.pb.go",
      "widget/widget.pb.go",
      "ws/ws.pb.go"
    ]
  },
  "repository": {
    "id": 151036616,
    "node_id": "MDEwOlJlcG9zaXRvcnkxNTEwMzY2MTY=",
    "name": "header",
    "full_name": "subiz/header",
    "private": false,
    "owner": {
      "name": "subiz",
      "email": "support@subiz.com",
      "login": "subiz",
      "id": 5790820,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjU3OTA4MjA=",
      "avatar_url": "https://avatars3.githubusercontent.com/u/5790820?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/subiz",
      "html_url": "https://github.com/subiz",
      "followers_url": "https://api.github.com/users/subiz/followers",
      "following_url": "https://api.github.com/users/subiz/following{/other_user}",
      "gists_url": "https://api.github.com/users/subiz/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/subiz/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/subiz/subscriptions",
      "organizations_url": "https://api.github.com/users/subiz/orgs",
      "repos_url": "https://api.github.com/users/subiz/repos",
      "events_url": "https://api.github.com/users/subiz/events{/privacy}",
      "received_events_url": "https://api.github.com/users/subiz/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "html_url": "https://github.com/subiz/header",
    "description": null,
    "fork": false,
    "url": "https://github.com/subiz/header",
    "forks_url": "https://api.github.com/repos/subiz/header/forks",
    "keys_url": "https://api.github.com/repos/subiz/header/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/subiz/header/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/subiz/header/teams",
    "hooks_url": "https://api.github.com/repos/subiz/header/hooks",
    "issue_events_url": "https://api.github.com/repos/subiz/header/issues/events{/number}",
    "events_url": "https://api.github.com/repos/subiz/header/events",
    "assignees_url": "https://api.github.com/repos/subiz/header/assignees{/user}",
    "branches_url": "https://api.github.com/repos/subiz/header/branches{/branch}",
    "tags_url": "https://api.github.com/repos/subiz/header/tags",
    "blobs_url": "https://api.github.com/repos/subiz/header/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/subiz/header/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/subiz/header/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/subiz/header/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/subiz/header/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/subiz/header/languages",
    "stargazers_url": "https://api.github.com/repos/subiz/header/stargazers",
    "contributors_url": "https://api.github.com/repos/subiz/header/contributors",
    "subscribers_url": "https://api.github.com/repos/subiz/header/subscribers",
    "subscription_url": "https://api.github.com/repos/subiz/header/subscription",
    "commits_url": "https://api.github.com/repos/subiz/header/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/subiz/header/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/subiz/header/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/subiz/header/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/subiz/header/contents/{+path}",
    "compare_url": "https://api.github.com/repos/subiz/header/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/subiz/header/merges",
    "archive_url": "https://api.github.com/repos/subiz/header/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/subiz/header/downloads",
    "issues_url": "https://api.github.com/repos/subiz/header/issues{/number}",
    "pulls_url": "https://api.github.com/repos/subiz/header/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/subiz/header/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/subiz/header/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/subiz/header/labels{/name}",
    "releases_url": "https://api.github.com/repos/subiz/header/releases{/id}",
    "deployments_url": "https://api.github.com/repos/subiz/header/deployments",
    "created_at": 1538368282,
    "updated_at": "2018-10-11T10:39:30Z",
    "pushed_at": 1539258391,
    "git_url": "git://github.com/subiz/header.git",
    "ssh_url": "git@github.com:subiz/header.git",
    "clone_url": "https://github.com/subiz/header.git",
    "svn_url": "https://github.com/subiz/header",
    "homepage": null,
    "size": 43691,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "Scala",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "open_issues_count": 0,
    "license": null,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master",
    "stargazers": 0,
    "master_branch": "master",
    "organization": "subiz"
  },
  "pusher": {
    "name": "thanhpk",
    "email": "thanhpk@users.noreply.github.com"
  },
  "organization": {
    "login": "subiz",
    "id": 5790820,
    "node_id": "MDEyOk9yZ2FuaXphdGlvbjU3OTA4MjA=",
    "url": "https://api.github.com/orgs/subiz",
    "repos_url": "https://api.github.com/orgs/subiz/repos",
    "events_url": "https://api.github.com/orgs/subiz/events",
    "hooks_url": "https://api.github.com/orgs/subiz/hooks",
    "issues_url": "https://api.github.com/orgs/subiz/issues",
    "members_url": "https://api.github.com/orgs/subiz/members{/member}",
    "public_members_url": "https://api.github.com/orgs/subiz/public_members{/member}",
    "avatar_url": "https://avatars3.githubusercontent.com/u/5790820?v=4",
    "description": "Subiz is a Customer Communication Tool."
  },
  "sender": {
    "login": "thanhpk",
    "id": 1810201,
    "node_id": "MDQ6VXNlcjE4MTAyMDE=",
    "avatar_url": "https://avatars1.githubusercontent.com/u/1810201?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/thanhpk",
    "html_url": "https://github.com/thanhpk",
    "followers_url": "https://api.github.com/users/thanhpk/followers",
    "following_url": "https://api.github.com/users/thanhpk/following{/other_user}",
    "gists_url": "https://api.github.com/users/thanhpk/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/thanhpk/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/thanhpk/subscriptions",
    "organizations_url": "https://api.github.com/users/thanhpk/orgs",
    "repos_url": "https://api.github.com/users/thanhpk/repos",
    "events_url": "https://api.github.com/users/thanhpk/events{/privacy}",
    "received_events_url": "https://api.github.com/users/thanhpk/received_events",
    "type": "User",
    "site_admin": false
  }
})
	expect(out.url).toBe("https://github.com/subiz/header.git")
	expect(out.commit).toBe('4bbe98d')
	expect(out.repo).toBe('header')
	expect(out.branch).toBe('master')
})

test('normal github payload 2', () => {
	let out = github.convertGithubHook({
  "ref": "refs/heads/master",
  "before": "36964190dab74a5fd72f225a0800af1a82b17ed1",
  "after": "37b1e9931724b2daa527c3e6215c187c56a1db2c",
  "created": false,
  "deleted": false,
  "forced": true,
  "base_ref": null,
  "compare": "https://github.com/subiz/git-subiz-net/compare/36964190dab7...37b1e9931724",
  "commits": [
    {
      "id": "37b1e9931724b2daa527c3e6215c187c56a1db2c",
      "tree_id": "6968c6079c30154be515ddb11ad44af8212d5b24",
      "distinct": true,
      "message": "clean code",
      "timestamp": "2018-11-15T07:42:00+07:00",
      "url": "https://github.com/subiz/git-subiz-net/commit/37b1e9931724b2daa527c3e6215c187c56a1db2c",
      "author": {
        "name": "Phạm Kiều Thanh",
        "email": "hhnnaahhtt@gmail.com",
        "username": "thanhpk"
      },
      "committer": {
        "name": "Phạm Kiều Thanh",
        "email": "hhnnaahhtt@gmail.com",
        "username": "thanhpk"
      },
      "added": [
        ".gcloudignore"
      ],
      "removed": [

      ],
      "modified": [
        "api.test.js",
        "index.js",
        "index.test.js"
      ]
    }
  ],
  "head_commit": {
    "id": "37b1e9931724b2daa527c3e6215c187c56a1db2c",
    "tree_id": "6968c6079c30154be515ddb11ad44af8212d5b24",
    "distinct": true,
    "message": "clean code",
    "timestamp": "2018-11-15T07:42:00+07:00",
    "url": "https://github.com/subiz/git-subiz-net/commit/37b1e9931724b2daa527c3e6215c187c56a1db2c",
    "author": {
      "name": "Phạm Kiều Thanh",
      "email": "hhnnaahhtt@gmail.com",
      "username": "thanhpk"
    },
    "committer": {
      "name": "Phạm Kiều Thanh",
      "email": "hhnnaahhtt@gmail.com",
      "username": "thanhpk"
    },
    "added": [
      ".gcloudignore"
    ],
    "removed": [

    ],
    "modified": [
      "api.test.js",
      "index.js",
      "index.test.js"
    ]
  },
  "repository": {
    "id": 146860571,
    "node_id": "MDEwOlJlcG9zaXRvcnkxNDY4NjA1NzE=",
    "name": "git-subiz-net",
    "full_name": "subiz/git-subiz-net",
    "private": false,
    "owner": {
      "name": "subiz",
      "email": "support@subiz.com",
      "login": "subiz",
      "id": 5790820,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjU3OTA4MjA=",
      "avatar_url": "https://avatars3.githubusercontent.com/u/5790820?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/subiz",
      "html_url": "https://github.com/subiz",
      "followers_url": "https://api.github.com/users/subiz/followers",
      "following_url": "https://api.github.com/users/subiz/following{/other_user}",
      "gists_url": "https://api.github.com/users/subiz/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/subiz/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/subiz/subscriptions",
      "organizations_url": "https://api.github.com/users/subiz/orgs",
      "repos_url": "https://api.github.com/users/subiz/repos",
      "events_url": "https://api.github.com/users/subiz/events{/privacy}",
      "received_events_url": "https://api.github.com/users/subiz/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "html_url": "https://github.com/subiz/git-subiz-net",
    "description": "git domain router",
    "fork": false,
    "url": "https://github.com/subiz/git-subiz-net",
    "forks_url": "https://api.github.com/repos/subiz/git-subiz-net/forks",
    "keys_url": "https://api.github.com/repos/subiz/git-subiz-net/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/subiz/git-subiz-net/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/subiz/git-subiz-net/teams",
    "hooks_url": "https://api.github.com/repos/subiz/git-subiz-net/hooks",
    "issue_events_url": "https://api.github.com/repos/subiz/git-subiz-net/issues/events{/number}",
    "events_url": "https://api.github.com/repos/subiz/git-subiz-net/events",
    "assignees_url": "https://api.github.com/repos/subiz/git-subiz-net/assignees{/user}",
    "branches_url": "https://api.github.com/repos/subiz/git-subiz-net/branches{/branch}",
    "tags_url": "https://api.github.com/repos/subiz/git-subiz-net/tags",
    "blobs_url": "https://api.github.com/repos/subiz/git-subiz-net/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/subiz/git-subiz-net/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/subiz/git-subiz-net/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/subiz/git-subiz-net/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/subiz/git-subiz-net/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/subiz/git-subiz-net/languages",
    "stargazers_url": "https://api.github.com/repos/subiz/git-subiz-net/stargazers",
    "contributors_url": "https://api.github.com/repos/subiz/git-subiz-net/contributors",
    "subscribers_url": "https://api.github.com/repos/subiz/git-subiz-net/subscribers",
    "subscription_url": "https://api.github.com/repos/subiz/git-subiz-net/subscription",
    "commits_url": "https://api.github.com/repos/subiz/git-subiz-net/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/subiz/git-subiz-net/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/subiz/git-subiz-net/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/subiz/git-subiz-net/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/subiz/git-subiz-net/contents/{+path}",
    "compare_url": "https://api.github.com/repos/subiz/git-subiz-net/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/subiz/git-subiz-net/merges",
    "archive_url": "https://api.github.com/repos/subiz/git-subiz-net/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/subiz/git-subiz-net/downloads",
    "issues_url": "https://api.github.com/repos/subiz/git-subiz-net/issues{/number}",
    "pulls_url": "https://api.github.com/repos/subiz/git-subiz-net/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/subiz/git-subiz-net/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/subiz/git-subiz-net/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/subiz/git-subiz-net/labels{/name}",
    "releases_url": "https://api.github.com/repos/subiz/git-subiz-net/releases{/id}",
    "deployments_url": "https://api.github.com/repos/subiz/git-subiz-net/deployments",
    "created_at": 1535702169,
    "updated_at": "2018-11-15T00:41:42Z",
    "pushed_at": 1542242533,
    "git_url": "git://github.com/subiz/git-subiz-net.git",
    "ssh_url": "git@github.com:subiz/git-subiz-net.git",
    "clone_url": "https://github.com/subiz/git-subiz-net.git",
    "svn_url": "https://github.com/subiz/git-subiz-net",
    "homepage": null,
    "size": 89,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "JavaScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "open_issues_count": 0,
    "license": null,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master",
    "stargazers": 0,
    "master_branch": "master",
    "organization": "subiz"
  },
  "pusher": {
    "name": "thanhpk",
    "email": "thanhpk@users.noreply.github.com"
  },
  "organization": {
    "login": "subiz",
    "id": 5790820,
    "node_id": "MDEyOk9yZ2FuaXphdGlvbjU3OTA4MjA=",
    "url": "https://api.github.com/orgs/subiz",
    "repos_url": "https://api.github.com/orgs/subiz/repos",
    "events_url": "https://api.github.com/orgs/subiz/events",
    "hooks_url": "https://api.github.com/orgs/subiz/hooks",
    "issues_url": "https://api.github.com/orgs/subiz/issues",
    "members_url": "https://api.github.com/orgs/subiz/members{/member}",
    "public_members_url": "https://api.github.com/orgs/subiz/public_members{/member}",
    "avatar_url": "https://avatars3.githubusercontent.com/u/5790820?v=4",
    "description": "Subiz is a Customer Communication Tool."
  },
  "sender": {
    "login": "thanhpk",
    "id": 1810201,
    "node_id": "MDQ6VXNlcjE4MTAyMDE=",
    "avatar_url": "https://avatars1.githubusercontent.com/u/1810201?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/thanhpk",
    "html_url": "https://github.com/thanhpk",
    "followers_url": "https://api.github.com/users/thanhpk/followers",
    "following_url": "https://api.github.com/users/thanhpk/following{/other_user}",
    "gists_url": "https://api.github.com/users/thanhpk/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/thanhpk/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/thanhpk/subscriptions",
    "organizations_url": "https://api.github.com/users/thanhpk/orgs",
    "repos_url": "https://api.github.com/users/thanhpk/repos",
    "events_url": "https://api.github.com/users/thanhpk/events{/privacy}",
    "received_events_url": "https://api.github.com/users/thanhpk/received_events",
    "type": "User",
    "site_admin": false
  }
})
	expect(out.url).toBe("https://github.com/subiz/git-subiz-net.git")
	expect(out.commit).toBe('37b1e99')
	expect(out.repo).toBe('git-subiz-net')
	expect(out.branch).toBe('master')
})

test('emtpy github payload', () => {
	let out = github.convertGithubHook({})
	expect(out.url).toBe(undefined)
	expect(out.url).toBe(undefined)
	expect(out.commit).toBe(undefined)
	expect(out.repo).toBe(undefined)
})
