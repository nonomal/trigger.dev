import { EventSpecificationExample } from "@trigger.dev/sdk";

export const issueAssigned: EventSpecificationExample = {
  id: "issue.assigned",
  name: "Issue assigned",
  payload: {
    issue: {
      id: 1767861922,
      url: "https://api.github.com/repos/triggerdotdev/empty/issues/4",
      body: "This is the bod",
      user: {
        id: 10635986,
        url: "https://api.github.com/users/matt-aitken",
        type: "User",
        login: "matt-aitken",
        node_id: "MDQ6VXNlcjEwNjM1OTg2",
        html_url: "https://github.com/matt-aitken",
        gists_url: "https://api.github.com/users/matt-aitken/gists{/gist_id}",
        repos_url: "https://api.github.com/users/matt-aitken/repos",
        avatar_url: "https://avatars.githubusercontent.com/u/10635986?v=4",
        events_url: "https://api.github.com/users/matt-aitken/events{/privacy}",
        site_admin: false,
        gravatar_id: "",
        starred_url:
          "https://api.github.com/users/matt-aitken/starred{/owner}{/repo}",
        followers_url: "https://api.github.com/users/matt-aitken/followers",
        following_url:
          "https://api.github.com/users/matt-aitken/following{/other_user}",
        organizations_url: "https://api.github.com/users/matt-aitken/orgs",
        subscriptions_url:
          "https://api.github.com/users/matt-aitken/subscriptions",
        received_events_url:
          "https://api.github.com/users/matt-aitken/received_events",
      },
      state: "open",
      title: "Fourth time lucky?",
      labels: [],
      locked: false,
      number: 4,
      node_id: "I_kwDOJyTwbc5pX26i",
      assignee: {
        id: 10635986,
        url: "https://api.github.com/users/matt-aitken",
        type: "User",
        login: "matt-aitken",
        node_id: "MDQ6VXNlcjEwNjM1OTg2",
        html_url: "https://github.com/matt-aitken",
        gists_url: "https://api.github.com/users/matt-aitken/gists{/gist_id}",
        repos_url: "https://api.github.com/users/matt-aitken/repos",
        avatar_url: "https://avatars.githubusercontent.com/u/10635986?v=4",
        events_url: "https://api.github.com/users/matt-aitken/events{/privacy}",
        site_admin: false,
        gravatar_id: "",
        starred_url:
          "https://api.github.com/users/matt-aitken/starred{/owner}{/repo}",
        followers_url: "https://api.github.com/users/matt-aitken/followers",
        following_url:
          "https://api.github.com/users/matt-aitken/following{/other_user}",
        organizations_url: "https://api.github.com/users/matt-aitken/orgs",
        subscriptions_url:
          "https://api.github.com/users/matt-aitken/subscriptions",
        received_events_url:
          "https://api.github.com/users/matt-aitken/received_events",
      },
      comments: 1,
      html_url: "https://github.com/triggerdotdev/empty/issues/4",
      assignees: [
        {
          id: 10635986,
          url: "https://api.github.com/users/matt-aitken",
          type: "User",
          login: "matt-aitken",
          node_id: "MDQ6VXNlcjEwNjM1OTg2",
          html_url: "https://github.com/matt-aitken",
          gists_url: "https://api.github.com/users/matt-aitken/gists{/gist_id}",
          repos_url: "https://api.github.com/users/matt-aitken/repos",
          avatar_url: "https://avatars.githubusercontent.com/u/10635986?v=4",
          events_url:
            "https://api.github.com/users/matt-aitken/events{/privacy}",
          site_admin: false,
          gravatar_id: "",
          starred_url:
            "https://api.github.com/users/matt-aitken/starred{/owner}{/repo}",
          followers_url: "https://api.github.com/users/matt-aitken/followers",
          following_url:
            "https://api.github.com/users/matt-aitken/following{/other_user}",
          organizations_url: "https://api.github.com/users/matt-aitken/orgs",
          subscriptions_url:
            "https://api.github.com/users/matt-aitken/subscriptions",
          received_events_url:
            "https://api.github.com/users/matt-aitken/received_events",
        },
      ],
      closed_at: null,
      milestone: null,
      reactions: {
        "+1": 0,
        "-1": 0,
        url: "https://api.github.com/repos/triggerdotdev/empty/issues/4/reactions",
        eyes: 0,
        heart: 0,
        laugh: 0,
        hooray: 0,
        rocket: 0,
        confused: 0,
        total_count: 0,
      },
      created_at: "2023-06-21T15:24:20Z",
      events_url:
        "https://api.github.com/repos/triggerdotdev/empty/issues/4/events",
      labels_url:
        "https://api.github.com/repos/triggerdotdev/empty/issues/4/labels{/name}",
      updated_at: "2023-06-21T15:36:53Z",
      comments_url:
        "https://api.github.com/repos/triggerdotdev/empty/issues/4/comments",
      state_reason: null,
      timeline_url:
        "https://api.github.com/repos/triggerdotdev/empty/issues/4/timeline",
      repository_url: "https://api.github.com/repos/triggerdotdev/empty",
      active_lock_reason: null,
      author_association: "MEMBER",
      performed_via_github_app: null,
    },
    action: "assigned",
    sender: {
      id: 10635986,
      url: "https://api.github.com/users/matt-aitken",
      type: "User",
      login: "matt-aitken",
      node_id: "MDQ6VXNlcjEwNjM1OTg2",
      html_url: "https://github.com/matt-aitken",
      gists_url: "https://api.github.com/users/matt-aitken/gists{/gist_id}",
      repos_url: "https://api.github.com/users/matt-aitken/repos",
      avatar_url: "https://avatars.githubusercontent.com/u/10635986?v=4",
      events_url: "https://api.github.com/users/matt-aitken/events{/privacy}",
      site_admin: false,
      gravatar_id: "",
      starred_url:
        "https://api.github.com/users/matt-aitken/starred{/owner}{/repo}",
      followers_url: "https://api.github.com/users/matt-aitken/followers",
      following_url:
        "https://api.github.com/users/matt-aitken/following{/other_user}",
      organizations_url: "https://api.github.com/users/matt-aitken/orgs",
      subscriptions_url:
        "https://api.github.com/users/matt-aitken/subscriptions",
      received_events_url:
        "https://api.github.com/users/matt-aitken/received_events",
    },
    assignee: {
      id: 10635986,
      url: "https://api.github.com/users/matt-aitken",
      type: "User",
      login: "matt-aitken",
      node_id: "MDQ6VXNlcjEwNjM1OTg2",
      html_url: "https://github.com/matt-aitken",
      gists_url: "https://api.github.com/users/matt-aitken/gists{/gist_id}",
      repos_url: "https://api.github.com/users/matt-aitken/repos",
      avatar_url: "https://avatars.githubusercontent.com/u/10635986?v=4",
      events_url: "https://api.github.com/users/matt-aitken/events{/privacy}",
      site_admin: false,
      gravatar_id: "",
      starred_url:
        "https://api.github.com/users/matt-aitken/starred{/owner}{/repo}",
      followers_url: "https://api.github.com/users/matt-aitken/followers",
      following_url:
        "https://api.github.com/users/matt-aitken/following{/other_user}",
      organizations_url: "https://api.github.com/users/matt-aitken/orgs",
      subscriptions_url:
        "https://api.github.com/users/matt-aitken/subscriptions",
      received_events_url:
        "https://api.github.com/users/matt-aitken/received_events",
    },
    repository: {
      id: 656732269,
      url: "https://api.github.com/repos/triggerdotdev/empty",
      fork: false,
      name: "empty",
      size: 0,
      forks: 0,
      owner: {
        id: 95297378,
        url: "https://api.github.com/users/triggerdotdev",
        type: "Organization",
        login: "triggerdotdev",
        node_id: "O_kgDOBa4fYg",
        html_url: "https://github.com/triggerdotdev",
        gists_url: "https://api.github.com/users/triggerdotdev/gists{/gist_id}",
        repos_url: "https://api.github.com/users/triggerdotdev/repos",
        avatar_url: "https://avatars.githubusercontent.com/u/95297378?v=4",
        events_url:
          "https://api.github.com/users/triggerdotdev/events{/privacy}",
        site_admin: false,
        gravatar_id: "",
        starred_url:
          "https://api.github.com/users/triggerdotdev/starred{/owner}{/repo}",
        followers_url: "https://api.github.com/users/triggerdotdev/followers",
        following_url:
          "https://api.github.com/users/triggerdotdev/following{/other_user}",
        organizations_url: "https://api.github.com/users/triggerdotdev/orgs",
        subscriptions_url:
          "https://api.github.com/users/triggerdotdev/subscriptions",
        received_events_url:
          "https://api.github.com/users/triggerdotdev/received_events",
      },
      topics: [],
      git_url: "git://github.com/triggerdotdev/empty.git",
      license: null,
      node_id: "R_kgDOJyTwbQ",
      private: false,
      ssh_url: "git@github.com:triggerdotdev/empty.git",
      svn_url: "https://github.com/triggerdotdev/empty",
      archived: false,
      disabled: false,
      has_wiki: true,
      homepage: null,
      html_url: "https://github.com/triggerdotdev/empty",
      keys_url:
        "https://api.github.com/repos/triggerdotdev/empty/keys{/key_id}",
      language: null,
      tags_url: "https://api.github.com/repos/triggerdotdev/empty/tags",
      watchers: 0,
      blobs_url:
        "https://api.github.com/repos/triggerdotdev/empty/git/blobs{/sha}",
      clone_url: "https://github.com/triggerdotdev/empty.git",
      forks_url: "https://api.github.com/repos/triggerdotdev/empty/forks",
      full_name: "triggerdotdev/empty",
      has_pages: false,
      hooks_url: "https://api.github.com/repos/triggerdotdev/empty/hooks",
      pulls_url:
        "https://api.github.com/repos/triggerdotdev/empty/pulls{/number}",
      pushed_at: "2023-06-21T14:21:08Z",
      teams_url: "https://api.github.com/repos/triggerdotdev/empty/teams",
      trees_url:
        "https://api.github.com/repos/triggerdotdev/empty/git/trees{/sha}",
      created_at: "2023-06-21T14:21:07Z",
      events_url: "https://api.github.com/repos/triggerdotdev/empty/events",
      has_issues: true,
      issues_url:
        "https://api.github.com/repos/triggerdotdev/empty/issues{/number}",
      labels_url:
        "https://api.github.com/repos/triggerdotdev/empty/labels{/name}",
      merges_url: "https://api.github.com/repos/triggerdotdev/empty/merges",
      mirror_url: null,
      updated_at: "2023-06-21T14:21:08Z",
      visibility: "public",
      archive_url:
        "https://api.github.com/repos/triggerdotdev/empty/{archive_format}{/ref}",
      commits_url:
        "https://api.github.com/repos/triggerdotdev/empty/commits{/sha}",
      compare_url:
        "https://api.github.com/repos/triggerdotdev/empty/compare/{base}...{head}",
      description:
        "An empty repo that can be used to test the @trigger.dev/github integration",
      forks_count: 0,
      is_template: false,
      open_issues: 4,
      branches_url:
        "https://api.github.com/repos/triggerdotdev/empty/branches{/branch}",
      comments_url:
        "https://api.github.com/repos/triggerdotdev/empty/comments{/number}",
      contents_url:
        "https://api.github.com/repos/triggerdotdev/empty/contents/{+path}",
      git_refs_url:
        "https://api.github.com/repos/triggerdotdev/empty/git/refs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/triggerdotdev/empty/git/tags{/sha}",
      has_projects: true,
      releases_url:
        "https://api.github.com/repos/triggerdotdev/empty/releases{/id}",
      statuses_url:
        "https://api.github.com/repos/triggerdotdev/empty/statuses/{sha}",
      allow_forking: true,
      assignees_url:
        "https://api.github.com/repos/triggerdotdev/empty/assignees{/user}",
      downloads_url:
        "https://api.github.com/repos/triggerdotdev/empty/downloads",
      has_downloads: true,
      languages_url:
        "https://api.github.com/repos/triggerdotdev/empty/languages",
      default_branch: "main",
      milestones_url:
        "https://api.github.com/repos/triggerdotdev/empty/milestones{/number}",
      stargazers_url:
        "https://api.github.com/repos/triggerdotdev/empty/stargazers",
      watchers_count: 0,
      deployments_url:
        "https://api.github.com/repos/triggerdotdev/empty/deployments",
      git_commits_url:
        "https://api.github.com/repos/triggerdotdev/empty/git/commits{/sha}",
      has_discussions: false,
      subscribers_url:
        "https://api.github.com/repos/triggerdotdev/empty/subscribers",
      contributors_url:
        "https://api.github.com/repos/triggerdotdev/empty/contributors",
      issue_events_url:
        "https://api.github.com/repos/triggerdotdev/empty/issues/events{/number}",
      stargazers_count: 0,
      subscription_url:
        "https://api.github.com/repos/triggerdotdev/empty/subscription",
      collaborators_url:
        "https://api.github.com/repos/triggerdotdev/empty/collaborators{/collaborator}",
      issue_comment_url:
        "https://api.github.com/repos/triggerdotdev/empty/issues/comments{/number}",
      notifications_url:
        "https://api.github.com/repos/triggerdotdev/empty/notifications{?since,all,participating}",
      open_issues_count: 4,
      web_commit_signoff_required: false,
    },
    organization: {
      id: 95297378,
      url: "https://api.github.com/orgs/triggerdotdev",
      login: "triggerdotdev",
      node_id: "O_kgDOBa4fYg",
      hooks_url: "https://api.github.com/orgs/triggerdotdev/hooks",
      repos_url: "https://api.github.com/orgs/triggerdotdev/repos",
      avatar_url: "https://avatars.githubusercontent.com/u/95297378?v=4",
      events_url: "https://api.github.com/orgs/triggerdotdev/events",
      issues_url: "https://api.github.com/orgs/triggerdotdev/issues",
      description: "",
      members_url: "https://api.github.com/orgs/triggerdotdev/members{/member}",
      public_members_url:
        "https://api.github.com/orgs/triggerdotdev/public_members{/member}",
    },
  },
};

export const issueOpened: EventSpecificationExample = {
  id: "issue.opened",
  name: "Issue opened",
  payload: {
    issue: {
      id: 1754473379,
      url: "https://api.github.com/repos/ericallam/basic-starter-12k/issues/21",
      body: 'This is a *big* problem:\r\n\r\n```\r\nconst foo = "bar"\r\n```',
      user: {
        id: 10635986,
        url: "https://api.github.com/users/matt-aitken",
        type: "User",
        login: "matt-aitken",
        node_id: "MDQ6VXNlcjEwNjM1OTg2",
        html_url: "https://github.com/matt-aitken",
        gists_url: "https://api.github.com/users/matt-aitken/gists{/gist_id}",
        repos_url: "https://api.github.com/users/matt-aitken/repos",
        avatar_url: "https://avatars.githubusercontent.com/u/10635986?v=4",
        events_url: "https://api.github.com/users/matt-aitken/events{/privacy}",
        site_admin: false,
        gravatar_id: "",
        starred_url:
          "https://api.github.com/users/matt-aitken/starred{/owner}{/repo}",
        followers_url: "https://api.github.com/users/matt-aitken/followers",
        following_url:
          "https://api.github.com/users/matt-aitken/following{/other_user}",
        organizations_url: "https://api.github.com/users/matt-aitken/orgs",
        subscriptions_url:
          "https://api.github.com/users/matt-aitken/subscriptions",
        received_events_url:
          "https://api.github.com/users/matt-aitken/received_events",
      },
      state: "open",
      title: "This is a sample issue title #20",
      labels: [],
      locked: false,
      number: 21,
      node_id: "I_kwDOI-yZFc5okyOj",
      assignee: null,
      comments: 0,
      html_url: "https://github.com/ericallam/basic-starter-12k/issues/21",
      assignees: [],
      closed_at: null,
      milestone: null,
      reactions: {
        "+1": 0,
        "-1": 0,
        url: "https://api.github.com/repos/ericallam/basic-starter-12k/issues/21/reactions",
        eyes: 0,
        heart: 0,
        laugh: 0,
        hooray: 0,
        rocket: 0,
        confused: 0,
        total_count: 0,
      },
      created_at: "2023-06-13T09:42:02Z",
      events_url:
        "https://api.github.com/repos/ericallam/basic-starter-12k/issues/21/events",
      labels_url:
        "https://api.github.com/repos/ericallam/basic-starter-12k/issues/21/labels{/name}",
      updated_at: "2023-06-13T09:42:02Z",
      comments_url:
        "https://api.github.com/repos/ericallam/basic-starter-12k/issues/21/comments",
      state_reason: null,
      timeline_url:
        "https://api.github.com/repos/ericallam/basic-starter-12k/issues/21/timeline",
      repository_url:
        "https://api.github.com/repos/ericallam/basic-starter-12k",
      active_lock_reason: null,
      author_association: "NONE",
      performed_via_github_app: null,
    },
    action: "opened",
    sender: {
      id: 10635986,
      url: "https://api.github.com/users/matt-aitken",
      type: "User",
      login: "matt-aitken",
      node_id: "MDQ6VXNlcjEwNjM1OTg2",
      html_url: "https://github.com/matt-aitken",
      gists_url: "https://api.github.com/users/matt-aitken/gists{/gist_id}",
      repos_url: "https://api.github.com/users/matt-aitken/repos",
      avatar_url: "https://avatars.githubusercontent.com/u/10635986?v=4",
      events_url: "https://api.github.com/users/matt-aitken/events{/privacy}",
      site_admin: false,
      gravatar_id: "",
      starred_url:
        "https://api.github.com/users/matt-aitken/starred{/owner}{/repo}",
      followers_url: "https://api.github.com/users/matt-aitken/followers",
      following_url:
        "https://api.github.com/users/matt-aitken/following{/other_user}",
      organizations_url: "https://api.github.com/users/matt-aitken/orgs",
      subscriptions_url:
        "https://api.github.com/users/matt-aitken/subscriptions",
      received_events_url:
        "https://api.github.com/users/matt-aitken/received_events",
    },
    repository: {
      id: 602708245,
      url: "https://api.github.com/repos/ericallam/basic-starter-12k",
      fork: false,
      name: "basic-starter-12k",
      size: 0,
      forks: 0,
      owner: {
        id: 534,
        url: "https://api.github.com/users/ericallam",
        type: "User",
        login: "ericallam",
        node_id: "MDQ6VXNlcjUzNA==",
        html_url: "https://github.com/ericallam",
        gists_url: "https://api.github.com/users/ericallam/gists{/gist_id}",
        repos_url: "https://api.github.com/users/ericallam/repos",
        avatar_url: "https://avatars.githubusercontent.com/u/534?v=4",
        events_url: "https://api.github.com/users/ericallam/events{/privacy}",
        site_admin: false,
        gravatar_id: "",
        starred_url:
          "https://api.github.com/users/ericallam/starred{/owner}{/repo}",
        followers_url: "https://api.github.com/users/ericallam/followers",
        following_url:
          "https://api.github.com/users/ericallam/following{/other_user}",
        organizations_url: "https://api.github.com/users/ericallam/orgs",
        subscriptions_url:
          "https://api.github.com/users/ericallam/subscriptions",
        received_events_url:
          "https://api.github.com/users/ericallam/received_events",
      },
      topics: [],
      git_url: "git://github.com/ericallam/basic-starter-12k.git",
      license: null,
      node_id: "R_kgDOI-yZFQ",
      private: false,
      ssh_url: "git@github.com:ericallam/basic-starter-12k.git",
      svn_url: "https://github.com/ericallam/basic-starter-12k",
      archived: false,
      disabled: false,
      has_wiki: true,
      homepage: null,
      html_url: "https://github.com/ericallam/basic-starter-12k",
      keys_url:
        "https://api.github.com/repos/ericallam/basic-starter-12k/keys{/key_id}",
      language: null,
      tags_url: "https://api.github.com/repos/ericallam/basic-starter-12k/tags",
      watchers: 0,
      blobs_url:
        "https://api.github.com/repos/ericallam/basic-starter-12k/git/blobs{/sha}",
      clone_url: "https://github.com/ericallam/basic-starter-12k.git",
      forks_url:
        "https://api.github.com/repos/ericallam/basic-starter-12k/forks",
      full_name: "ericallam/basic-starter-12k",
      has_pages: false,
      hooks_url:
        "https://api.github.com/repos/ericallam/basic-starter-12k/hooks",
      pulls_url:
        "https://api.github.com/repos/ericallam/basic-starter-12k/pulls{/number}",
      pushed_at: "2023-02-16T19:25:20Z",
      teams_url:
        "https://api.github.com/repos/ericallam/basic-starter-12k/teams",
      trees_url:
        "https://api.github.com/repos/ericallam/basic-starter-12k/git/trees{/sha}",
      created_at: "2023-02-16T19:25:19Z",
      events_url:
        "https://api.github.com/repos/ericallam/basic-starter-12k/events",
      has_issues: true,
      issues_url:
        "https://api.github.com/repos/ericallam/basic-starter-12k/issues{/number}",
      labels_url:
        "https://api.github.com/repos/ericallam/basic-starter-12k/labels{/name}",
      merges_url:
        "https://api.github.com/repos/ericallam/basic-starter-12k/merges",
      mirror_url: null,
      updated_at: "2023-02-16T19:25:19Z",
      visibility: "public",
      archive_url:
        "https://api.github.com/repos/ericallam/basic-starter-12k/{archive_format}{/ref}",
      commits_url:
        "https://api.github.com/repos/ericallam/basic-starter-12k/commits{/sha}",
      compare_url:
        "https://api.github.com/repos/ericallam/basic-starter-12k/compare/{base}...{head}",
      description: null,
      forks_count: 0,
      is_template: false,
      open_issues: 21,
      branches_url:
        "https://api.github.com/repos/ericallam/basic-starter-12k/branches{/branch}",
      comments_url:
        "https://api.github.com/repos/ericallam/basic-starter-12k/comments{/number}",
      contents_url:
        "https://api.github.com/repos/ericallam/basic-starter-12k/contents/{+path}",
      git_refs_url:
        "https://api.github.com/repos/ericallam/basic-starter-12k/git/refs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/ericallam/basic-starter-12k/git/tags{/sha}",
      has_projects: true,
      releases_url:
        "https://api.github.com/repos/ericallam/basic-starter-12k/releases{/id}",
      statuses_url:
        "https://api.github.com/repos/ericallam/basic-starter-12k/statuses/{sha}",
      allow_forking: true,
      assignees_url:
        "https://api.github.com/repos/ericallam/basic-starter-12k/assignees{/user}",
      downloads_url:
        "https://api.github.com/repos/ericallam/basic-starter-12k/downloads",
      has_downloads: true,
      languages_url:
        "https://api.github.com/repos/ericallam/basic-starter-12k/languages",
      default_branch: "main",
      milestones_url:
        "https://api.github.com/repos/ericallam/basic-starter-12k/milestones{/number}",
      stargazers_url:
        "https://api.github.com/repos/ericallam/basic-starter-12k/stargazers",
      watchers_count: 0,
      deployments_url:
        "https://api.github.com/repos/ericallam/basic-starter-12k/deployments",
      git_commits_url:
        "https://api.github.com/repos/ericallam/basic-starter-12k/git/commits{/sha}",
      has_discussions: false,
      subscribers_url:
        "https://api.github.com/repos/ericallam/basic-starter-12k/subscribers",
      contributors_url:
        "https://api.github.com/repos/ericallam/basic-starter-12k/contributors",
      issue_events_url:
        "https://api.github.com/repos/ericallam/basic-starter-12k/issues/events{/number}",
      stargazers_count: 0,
      subscription_url:
        "https://api.github.com/repos/ericallam/basic-starter-12k/subscription",
      collaborators_url:
        "https://api.github.com/repos/ericallam/basic-starter-12k/collaborators{/collaborator}",
      issue_comment_url:
        "https://api.github.com/repos/ericallam/basic-starter-12k/issues/comments{/number}",
      notifications_url:
        "https://api.github.com/repos/ericallam/basic-starter-12k/notifications{?since,all,participating}",
      open_issues_count: 21,
      web_commit_signoff_required: false,
    },
  },
};

export const issueCommentCreated: EventSpecificationExample = {
  id: "issuecomment.created",
  name: "Issue comment created",
  payload: {
    issue: {
      id: 1767861922,
      url: "https://api.github.com/repos/triggerdotdev/empty/issues/4",
      body: "This is the bod",
      user: {
        id: 10635986,
        url: "https://api.github.com/users/matt-aitken",
        type: "User",
        login: "matt-aitken",
        node_id: "MDQ6VXNlcjEwNjM1OTg2",
        html_url: "https://github.com/matt-aitken",
        gists_url: "https://api.github.com/users/matt-aitken/gists{/gist_id}",
        repos_url: "https://api.github.com/users/matt-aitken/repos",
        avatar_url: "https://avatars.githubusercontent.com/u/10635986?v=4",
        events_url: "https://api.github.com/users/matt-aitken/events{/privacy}",
        site_admin: false,
        gravatar_id: "",
        starred_url:
          "https://api.github.com/users/matt-aitken/starred{/owner}{/repo}",
        followers_url: "https://api.github.com/users/matt-aitken/followers",
        following_url:
          "https://api.github.com/users/matt-aitken/following{/other_user}",
        organizations_url: "https://api.github.com/users/matt-aitken/orgs",
        subscriptions_url:
          "https://api.github.com/users/matt-aitken/subscriptions",
        received_events_url:
          "https://api.github.com/users/matt-aitken/received_events",
      },
      state: "open",
      title: "Fourth time lucky?",
      labels: [],
      locked: false,
      number: 4,
      node_id: "I_kwDOJyTwbc5pX26i",
      assignee: {
        id: 10635986,
        url: "https://api.github.com/users/matt-aitken",
        type: "User",
        login: "matt-aitken",
        node_id: "MDQ6VXNlcjEwNjM1OTg2",
        html_url: "https://github.com/matt-aitken",
        gists_url: "https://api.github.com/users/matt-aitken/gists{/gist_id}",
        repos_url: "https://api.github.com/users/matt-aitken/repos",
        avatar_url: "https://avatars.githubusercontent.com/u/10635986?v=4",
        events_url: "https://api.github.com/users/matt-aitken/events{/privacy}",
        site_admin: false,
        gravatar_id: "",
        starred_url:
          "https://api.github.com/users/matt-aitken/starred{/owner}{/repo}",
        followers_url: "https://api.github.com/users/matt-aitken/followers",
        following_url:
          "https://api.github.com/users/matt-aitken/following{/other_user}",
        organizations_url: "https://api.github.com/users/matt-aitken/orgs",
        subscriptions_url:
          "https://api.github.com/users/matt-aitken/subscriptions",
        received_events_url:
          "https://api.github.com/users/matt-aitken/received_events",
      },
      comments: 2,
      html_url: "https://github.com/triggerdotdev/empty/issues/4",
      assignees: [
        {
          id: 10635986,
          url: "https://api.github.com/users/matt-aitken",
          type: "User",
          login: "matt-aitken",
          node_id: "MDQ6VXNlcjEwNjM1OTg2",
          html_url: "https://github.com/matt-aitken",
          gists_url: "https://api.github.com/users/matt-aitken/gists{/gist_id}",
          repos_url: "https://api.github.com/users/matt-aitken/repos",
          avatar_url: "https://avatars.githubusercontent.com/u/10635986?v=4",
          events_url:
            "https://api.github.com/users/matt-aitken/events{/privacy}",
          site_admin: false,
          gravatar_id: "",
          starred_url:
            "https://api.github.com/users/matt-aitken/starred{/owner}{/repo}",
          followers_url: "https://api.github.com/users/matt-aitken/followers",
          following_url:
            "https://api.github.com/users/matt-aitken/following{/other_user}",
          organizations_url: "https://api.github.com/users/matt-aitken/orgs",
          subscriptions_url:
            "https://api.github.com/users/matt-aitken/subscriptions",
          received_events_url:
            "https://api.github.com/users/matt-aitken/received_events",
        },
      ],
      closed_at: null,
      milestone: null,
      reactions: {
        "+1": 0,
        "-1": 0,
        url: "https://api.github.com/repos/triggerdotdev/empty/issues/4/reactions",
        eyes: 0,
        heart: 0,
        laugh: 0,
        hooray: 0,
        rocket: 0,
        confused: 0,
        total_count: 0,
      },
      created_at: "2023-06-21T15:24:20Z",
      events_url:
        "https://api.github.com/repos/triggerdotdev/empty/issues/4/events",
      labels_url:
        "https://api.github.com/repos/triggerdotdev/empty/issues/4/labels{/name}",
      updated_at: "2023-06-21T16:02:28Z",
      comments_url:
        "https://api.github.com/repos/triggerdotdev/empty/issues/4/comments",
      state_reason: null,
      timeline_url:
        "https://api.github.com/repos/triggerdotdev/empty/issues/4/timeline",
      repository_url: "https://api.github.com/repos/triggerdotdev/empty",
      active_lock_reason: null,
      author_association: "MEMBER",
      performed_via_github_app: null,
    },
    action: "created",
    sender: {
      id: 10635986,
      url: "https://api.github.com/users/matt-aitken",
      type: "User",
      login: "matt-aitken",
      node_id: "MDQ6VXNlcjEwNjM1OTg2",
      html_url: "https://github.com/matt-aitken",
      gists_url: "https://api.github.com/users/matt-aitken/gists{/gist_id}",
      repos_url: "https://api.github.com/users/matt-aitken/repos",
      avatar_url: "https://avatars.githubusercontent.com/u/10635986?v=4",
      events_url: "https://api.github.com/users/matt-aitken/events{/privacy}",
      site_admin: false,
      gravatar_id: "",
      starred_url:
        "https://api.github.com/users/matt-aitken/starred{/owner}{/repo}",
      followers_url: "https://api.github.com/users/matt-aitken/followers",
      following_url:
        "https://api.github.com/users/matt-aitken/following{/other_user}",
      organizations_url: "https://api.github.com/users/matt-aitken/orgs",
      subscriptions_url:
        "https://api.github.com/users/matt-aitken/subscriptions",
      received_events_url:
        "https://api.github.com/users/matt-aitken/received_events",
    },
    comment: {
      id: 1601114728,
      url: "https://api.github.com/repos/triggerdotdev/empty/issues/comments/1601114728",
      body: 'This is a short comment with short code snippet:\r\n\r\n```\r\nconst rick = "astley";\r\n```',
      user: {
        id: 10635986,
        url: "https://api.github.com/users/matt-aitken",
        type: "User",
        login: "matt-aitken",
        node_id: "MDQ6VXNlcjEwNjM1OTg2",
        html_url: "https://github.com/matt-aitken",
        gists_url: "https://api.github.com/users/matt-aitken/gists{/gist_id}",
        repos_url: "https://api.github.com/users/matt-aitken/repos",
        avatar_url: "https://avatars.githubusercontent.com/u/10635986?v=4",
        events_url: "https://api.github.com/users/matt-aitken/events{/privacy}",
        site_admin: false,
        gravatar_id: "",
        starred_url:
          "https://api.github.com/users/matt-aitken/starred{/owner}{/repo}",
        followers_url: "https://api.github.com/users/matt-aitken/followers",
        following_url:
          "https://api.github.com/users/matt-aitken/following{/other_user}",
        organizations_url: "https://api.github.com/users/matt-aitken/orgs",
        subscriptions_url:
          "https://api.github.com/users/matt-aitken/subscriptions",
        received_events_url:
          "https://api.github.com/users/matt-aitken/received_events",
      },
      node_id: "IC_kwDOJyTwbc5fbxJo",
      html_url:
        "https://github.com/triggerdotdev/empty/issues/4#issuecomment-1601114728",
      issue_url: "https://api.github.com/repos/triggerdotdev/empty/issues/4",
      reactions: {
        "+1": 0,
        "-1": 0,
        url: "https://api.github.com/repos/triggerdotdev/empty/issues/comments/1601114728/reactions",
        eyes: 0,
        heart: 0,
        laugh: 0,
        hooray: 0,
        rocket: 0,
        confused: 0,
        total_count: 0,
      },
      created_at: "2023-06-21T16:02:27Z",
      updated_at: "2023-06-21T16:02:27Z",
      author_association: "MEMBER",
      performed_via_github_app: null,
    },
    repository: {
      id: 656732269,
      url: "https://api.github.com/repos/triggerdotdev/empty",
      fork: false,
      name: "empty",
      size: 0,
      forks: 0,
      owner: {
        id: 95297378,
        url: "https://api.github.com/users/triggerdotdev",
        type: "Organization",
        login: "triggerdotdev",
        node_id: "O_kgDOBa4fYg",
        html_url: "https://github.com/triggerdotdev",
        gists_url: "https://api.github.com/users/triggerdotdev/gists{/gist_id}",
        repos_url: "https://api.github.com/users/triggerdotdev/repos",
        avatar_url: "https://avatars.githubusercontent.com/u/95297378?v=4",
        events_url:
          "https://api.github.com/users/triggerdotdev/events{/privacy}",
        site_admin: false,
        gravatar_id: "",
        starred_url:
          "https://api.github.com/users/triggerdotdev/starred{/owner}{/repo}",
        followers_url: "https://api.github.com/users/triggerdotdev/followers",
        following_url:
          "https://api.github.com/users/triggerdotdev/following{/other_user}",
        organizations_url: "https://api.github.com/users/triggerdotdev/orgs",
        subscriptions_url:
          "https://api.github.com/users/triggerdotdev/subscriptions",
        received_events_url:
          "https://api.github.com/users/triggerdotdev/received_events",
      },
      topics: [],
      git_url: "git://github.com/triggerdotdev/empty.git",
      license: null,
      node_id: "R_kgDOJyTwbQ",
      private: false,
      ssh_url: "git@github.com:triggerdotdev/empty.git",
      svn_url: "https://github.com/triggerdotdev/empty",
      archived: false,
      disabled: false,
      has_wiki: true,
      homepage: null,
      html_url: "https://github.com/triggerdotdev/empty",
      keys_url:
        "https://api.github.com/repos/triggerdotdev/empty/keys{/key_id}",
      language: null,
      tags_url: "https://api.github.com/repos/triggerdotdev/empty/tags",
      watchers: 0,
      blobs_url:
        "https://api.github.com/repos/triggerdotdev/empty/git/blobs{/sha}",
      clone_url: "https://github.com/triggerdotdev/empty.git",
      forks_url: "https://api.github.com/repos/triggerdotdev/empty/forks",
      full_name: "triggerdotdev/empty",
      has_pages: false,
      hooks_url: "https://api.github.com/repos/triggerdotdev/empty/hooks",
      pulls_url:
        "https://api.github.com/repos/triggerdotdev/empty/pulls{/number}",
      pushed_at: "2023-06-21T14:21:08Z",
      teams_url: "https://api.github.com/repos/triggerdotdev/empty/teams",
      trees_url:
        "https://api.github.com/repos/triggerdotdev/empty/git/trees{/sha}",
      created_at: "2023-06-21T14:21:07Z",
      events_url: "https://api.github.com/repos/triggerdotdev/empty/events",
      has_issues: true,
      issues_url:
        "https://api.github.com/repos/triggerdotdev/empty/issues{/number}",
      labels_url:
        "https://api.github.com/repos/triggerdotdev/empty/labels{/name}",
      merges_url: "https://api.github.com/repos/triggerdotdev/empty/merges",
      mirror_url: null,
      updated_at: "2023-06-21T14:21:08Z",
      visibility: "public",
      archive_url:
        "https://api.github.com/repos/triggerdotdev/empty/{archive_format}{/ref}",
      commits_url:
        "https://api.github.com/repos/triggerdotdev/empty/commits{/sha}",
      compare_url:
        "https://api.github.com/repos/triggerdotdev/empty/compare/{base}...{head}",
      description:
        "An empty repo that can be used to test the @trigger.dev/github integration",
      forks_count: 0,
      is_template: false,
      open_issues: 4,
      branches_url:
        "https://api.github.com/repos/triggerdotdev/empty/branches{/branch}",
      comments_url:
        "https://api.github.com/repos/triggerdotdev/empty/comments{/number}",
      contents_url:
        "https://api.github.com/repos/triggerdotdev/empty/contents/{+path}",
      git_refs_url:
        "https://api.github.com/repos/triggerdotdev/empty/git/refs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/triggerdotdev/empty/git/tags{/sha}",
      has_projects: true,
      releases_url:
        "https://api.github.com/repos/triggerdotdev/empty/releases{/id}",
      statuses_url:
        "https://api.github.com/repos/triggerdotdev/empty/statuses/{sha}",
      allow_forking: true,
      assignees_url:
        "https://api.github.com/repos/triggerdotdev/empty/assignees{/user}",
      downloads_url:
        "https://api.github.com/repos/triggerdotdev/empty/downloads",
      has_downloads: true,
      languages_url:
        "https://api.github.com/repos/triggerdotdev/empty/languages",
      default_branch: "main",
      milestones_url:
        "https://api.github.com/repos/triggerdotdev/empty/milestones{/number}",
      stargazers_url:
        "https://api.github.com/repos/triggerdotdev/empty/stargazers",
      watchers_count: 0,
      deployments_url:
        "https://api.github.com/repos/triggerdotdev/empty/deployments",
      git_commits_url:
        "https://api.github.com/repos/triggerdotdev/empty/git/commits{/sha}",
      has_discussions: false,
      subscribers_url:
        "https://api.github.com/repos/triggerdotdev/empty/subscribers",
      contributors_url:
        "https://api.github.com/repos/triggerdotdev/empty/contributors",
      issue_events_url:
        "https://api.github.com/repos/triggerdotdev/empty/issues/events{/number}",
      stargazers_count: 0,
      subscription_url:
        "https://api.github.com/repos/triggerdotdev/empty/subscription",
      collaborators_url:
        "https://api.github.com/repos/triggerdotdev/empty/collaborators{/collaborator}",
      issue_comment_url:
        "https://api.github.com/repos/triggerdotdev/empty/issues/comments{/number}",
      notifications_url:
        "https://api.github.com/repos/triggerdotdev/empty/notifications{?since,all,participating}",
      open_issues_count: 4,
      web_commit_signoff_required: false,
    },
    organization: {
      id: 95297378,
      url: "https://api.github.com/orgs/triggerdotdev",
      login: "triggerdotdev",
      node_id: "O_kgDOBa4fYg",
      hooks_url: "https://api.github.com/orgs/triggerdotdev/hooks",
      repos_url: "https://api.github.com/orgs/triggerdotdev/repos",
      avatar_url: "https://avatars.githubusercontent.com/u/95297378?v=4",
      events_url: "https://api.github.com/orgs/triggerdotdev/events",
      issues_url: "https://api.github.com/orgs/triggerdotdev/issues",
      description: "",
      members_url: "https://api.github.com/orgs/triggerdotdev/members{/member}",
      public_members_url:
        "https://api.github.com/orgs/triggerdotdev/public_members{/member}",
    },
  },
};

export const starredRepo: EventSpecificationExample = {
  id: "star.created",
  name: "Repo starred",
  payload: {
    action: "created",
    sender: {
      id: 10635986,
      url: "https://api.github.com/users/matt-aitken",
      type: "User",
      login: "matt-aitken",
      node_id: "MDQ6VXNlcjEwNjM1OTg2",
      html_url: "https://github.com/matt-aitken",
      gists_url: "https://api.github.com/users/matt-aitken/gists{/gist_id}",
      repos_url: "https://api.github.com/users/matt-aitken/repos",
      avatar_url: "https://avatars.githubusercontent.com/u/10635986?v=4",
      events_url: "https://api.github.com/users/matt-aitken/events{/privacy}",
      site_admin: false,
      gravatar_id: "",
      starred_url:
        "https://api.github.com/users/matt-aitken/starred{/owner}{/repo}",
      followers_url: "https://api.github.com/users/matt-aitken/followers",
      following_url:
        "https://api.github.com/users/matt-aitken/following{/other_user}",
      organizations_url: "https://api.github.com/users/matt-aitken/orgs",
      subscriptions_url:
        "https://api.github.com/users/matt-aitken/subscriptions",
      received_events_url:
        "https://api.github.com/users/matt-aitken/received_events",
    },
    repository: {
      id: 656732269,
      url: "https://api.github.com/repos/triggerdotdev/empty",
      fork: false,
      name: "empty",
      size: 0,
      forks: 0,
      owner: {
        id: 95297378,
        url: "https://api.github.com/users/triggerdotdev",
        type: "Organization",
        login: "triggerdotdev",
        node_id: "O_kgDOBa4fYg",
        html_url: "https://github.com/triggerdotdev",
        gists_url: "https://api.github.com/users/triggerdotdev/gists{/gist_id}",
        repos_url: "https://api.github.com/users/triggerdotdev/repos",
        avatar_url: "https://avatars.githubusercontent.com/u/95297378?v=4",
        events_url:
          "https://api.github.com/users/triggerdotdev/events{/privacy}",
        site_admin: false,
        gravatar_id: "",
        starred_url:
          "https://api.github.com/users/triggerdotdev/starred{/owner}{/repo}",
        followers_url: "https://api.github.com/users/triggerdotdev/followers",
        following_url:
          "https://api.github.com/users/triggerdotdev/following{/other_user}",
        organizations_url: "https://api.github.com/users/triggerdotdev/orgs",
        subscriptions_url:
          "https://api.github.com/users/triggerdotdev/subscriptions",
        received_events_url:
          "https://api.github.com/users/triggerdotdev/received_events",
      },
      topics: [],
      git_url: "git://github.com/triggerdotdev/empty.git",
      license: null,
      node_id: "R_kgDOJyTwbQ",
      private: false,
      ssh_url: "git@github.com:triggerdotdev/empty.git",
      svn_url: "https://github.com/triggerdotdev/empty",
      archived: false,
      disabled: false,
      has_wiki: true,
      homepage: null,
      html_url: "https://github.com/triggerdotdev/empty",
      keys_url:
        "https://api.github.com/repos/triggerdotdev/empty/keys{/key_id}",
      language: null,
      tags_url: "https://api.github.com/repos/triggerdotdev/empty/tags",
      watchers: 1,
      blobs_url:
        "https://api.github.com/repos/triggerdotdev/empty/git/blobs{/sha}",
      clone_url: "https://github.com/triggerdotdev/empty.git",
      forks_url: "https://api.github.com/repos/triggerdotdev/empty/forks",
      full_name: "triggerdotdev/empty",
      has_pages: false,
      hooks_url: "https://api.github.com/repos/triggerdotdev/empty/hooks",
      pulls_url:
        "https://api.github.com/repos/triggerdotdev/empty/pulls{/number}",
      pushed_at: "2023-06-21T14:21:08Z",
      teams_url: "https://api.github.com/repos/triggerdotdev/empty/teams",
      trees_url:
        "https://api.github.com/repos/triggerdotdev/empty/git/trees{/sha}",
      created_at: "2023-06-21T14:21:07Z",
      events_url: "https://api.github.com/repos/triggerdotdev/empty/events",
      has_issues: true,
      issues_url:
        "https://api.github.com/repos/triggerdotdev/empty/issues{/number}",
      labels_url:
        "https://api.github.com/repos/triggerdotdev/empty/labels{/name}",
      merges_url: "https://api.github.com/repos/triggerdotdev/empty/merges",
      mirror_url: null,
      updated_at: "2023-06-21T17:22:03Z",
      visibility: "public",
      archive_url:
        "https://api.github.com/repos/triggerdotdev/empty/{archive_format}{/ref}",
      commits_url:
        "https://api.github.com/repos/triggerdotdev/empty/commits{/sha}",
      compare_url:
        "https://api.github.com/repos/triggerdotdev/empty/compare/{base}...{head}",
      description:
        "An empty repo that can be used to test the @trigger.dev/github integration",
      forks_count: 0,
      is_template: false,
      open_issues: 4,
      branches_url:
        "https://api.github.com/repos/triggerdotdev/empty/branches{/branch}",
      comments_url:
        "https://api.github.com/repos/triggerdotdev/empty/comments{/number}",
      contents_url:
        "https://api.github.com/repos/triggerdotdev/empty/contents/{+path}",
      git_refs_url:
        "https://api.github.com/repos/triggerdotdev/empty/git/refs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/triggerdotdev/empty/git/tags{/sha}",
      has_projects: true,
      releases_url:
        "https://api.github.com/repos/triggerdotdev/empty/releases{/id}",
      statuses_url:
        "https://api.github.com/repos/triggerdotdev/empty/statuses/{sha}",
      allow_forking: true,
      assignees_url:
        "https://api.github.com/repos/triggerdotdev/empty/assignees{/user}",
      downloads_url:
        "https://api.github.com/repos/triggerdotdev/empty/downloads",
      has_downloads: true,
      languages_url:
        "https://api.github.com/repos/triggerdotdev/empty/languages",
      default_branch: "main",
      milestones_url:
        "https://api.github.com/repos/triggerdotdev/empty/milestones{/number}",
      stargazers_url:
        "https://api.github.com/repos/triggerdotdev/empty/stargazers",
      watchers_count: 1,
      deployments_url:
        "https://api.github.com/repos/triggerdotdev/empty/deployments",
      git_commits_url:
        "https://api.github.com/repos/triggerdotdev/empty/git/commits{/sha}",
      has_discussions: false,
      subscribers_url:
        "https://api.github.com/repos/triggerdotdev/empty/subscribers",
      contributors_url:
        "https://api.github.com/repos/triggerdotdev/empty/contributors",
      issue_events_url:
        "https://api.github.com/repos/triggerdotdev/empty/issues/events{/number}",
      stargazers_count: 1,
      subscription_url:
        "https://api.github.com/repos/triggerdotdev/empty/subscription",
      collaborators_url:
        "https://api.github.com/repos/triggerdotdev/empty/collaborators{/collaborator}",
      issue_comment_url:
        "https://api.github.com/repos/triggerdotdev/empty/issues/comments{/number}",
      notifications_url:
        "https://api.github.com/repos/triggerdotdev/empty/notifications{?since,all,participating}",
      open_issues_count: 4,
      web_commit_signoff_required: false,
    },
    starred_at: "2023-06-21T17:22:03Z",
    organization: {
      id: 95297378,
      url: "https://api.github.com/orgs/triggerdotdev",
      login: "triggerdotdev",
      node_id: "O_kgDOBa4fYg",
      hooks_url: "https://api.github.com/orgs/triggerdotdev/hooks",
      repos_url: "https://api.github.com/orgs/triggerdotdev/repos",
      avatar_url: "https://avatars.githubusercontent.com/u/95297378?v=4",
      events_url: "https://api.github.com/orgs/triggerdotdev/events",
      issues_url: "https://api.github.com/orgs/triggerdotdev/issues",
      description: "",
      members_url: "https://api.github.com/orgs/triggerdotdev/members{/member}",
      public_members_url:
        "https://api.github.com/orgs/triggerdotdev/public_members{/member}",
    },
  },
};

export const newBranch: EventSpecificationExample = {
  id: "branch.new",
  name: "Branch created",
  payload: {
    ref: "test",
    sender: {
      id: 10635986,
      url: "https://api.github.com/users/matt-aitken",
      type: "User",
      login: "matt-aitken",
      node_id: "MDQ6VXNlcjEwNjM1OTg2",
      html_url: "https://github.com/matt-aitken",
      gists_url: "https://api.github.com/users/matt-aitken/gists{/gist_id}",
      repos_url: "https://api.github.com/users/matt-aitken/repos",
      avatar_url: "https://avatars.githubusercontent.com/u/10635986?v=4",
      events_url: "https://api.github.com/users/matt-aitken/events{/privacy}",
      site_admin: false,
      gravatar_id: "",
      starred_url:
        "https://api.github.com/users/matt-aitken/starred{/owner}{/repo}",
      followers_url: "https://api.github.com/users/matt-aitken/followers",
      following_url:
        "https://api.github.com/users/matt-aitken/following{/other_user}",
      organizations_url: "https://api.github.com/users/matt-aitken/orgs",
      subscriptions_url:
        "https://api.github.com/users/matt-aitken/subscriptions",
      received_events_url:
        "https://api.github.com/users/matt-aitken/received_events",
    },
    ref_type: "branch",
    repository: {
      id: 656732269,
      url: "https://api.github.com/repos/triggerdotdev/empty",
      fork: false,
      name: "empty",
      size: 0,
      forks: 0,
      owner: {
        id: 95297378,
        url: "https://api.github.com/users/triggerdotdev",
        type: "Organization",
        login: "triggerdotdev",
        node_id: "O_kgDOBa4fYg",
        html_url: "https://github.com/triggerdotdev",
        gists_url: "https://api.github.com/users/triggerdotdev/gists{/gist_id}",
        repos_url: "https://api.github.com/users/triggerdotdev/repos",
        avatar_url: "https://avatars.githubusercontent.com/u/95297378?v=4",
        events_url:
          "https://api.github.com/users/triggerdotdev/events{/privacy}",
        site_admin: false,
        gravatar_id: "",
        starred_url:
          "https://api.github.com/users/triggerdotdev/starred{/owner}{/repo}",
        followers_url: "https://api.github.com/users/triggerdotdev/followers",
        following_url:
          "https://api.github.com/users/triggerdotdev/following{/other_user}",
        organizations_url: "https://api.github.com/users/triggerdotdev/orgs",
        subscriptions_url:
          "https://api.github.com/users/triggerdotdev/subscriptions",
        received_events_url:
          "https://api.github.com/users/triggerdotdev/received_events",
      },
      topics: [],
      git_url: "git://github.com/triggerdotdev/empty.git",
      license: null,
      node_id: "R_kgDOJyTwbQ",
      private: false,
      ssh_url: "git@github.com:triggerdotdev/empty.git",
      svn_url: "https://github.com/triggerdotdev/empty",
      archived: false,
      disabled: false,
      has_wiki: true,
      homepage: null,
      html_url: "https://github.com/triggerdotdev/empty",
      keys_url:
        "https://api.github.com/repos/triggerdotdev/empty/keys{/key_id}",
      language: null,
      tags_url: "https://api.github.com/repos/triggerdotdev/empty/tags",
      watchers: 0,
      blobs_url:
        "https://api.github.com/repos/triggerdotdev/empty/git/blobs{/sha}",
      clone_url: "https://github.com/triggerdotdev/empty.git",
      forks_url: "https://api.github.com/repos/triggerdotdev/empty/forks",
      full_name: "triggerdotdev/empty",
      has_pages: false,
      hooks_url: "https://api.github.com/repos/triggerdotdev/empty/hooks",
      pulls_url:
        "https://api.github.com/repos/triggerdotdev/empty/pulls{/number}",
      pushed_at: "2023-06-21T17:54:25Z",
      teams_url: "https://api.github.com/repos/triggerdotdev/empty/teams",
      trees_url:
        "https://api.github.com/repos/triggerdotdev/empty/git/trees{/sha}",
      created_at: "2023-06-21T14:21:07Z",
      events_url: "https://api.github.com/repos/triggerdotdev/empty/events",
      has_issues: true,
      issues_url:
        "https://api.github.com/repos/triggerdotdev/empty/issues{/number}",
      labels_url:
        "https://api.github.com/repos/triggerdotdev/empty/labels{/name}",
      merges_url: "https://api.github.com/repos/triggerdotdev/empty/merges",
      mirror_url: null,
      updated_at: "2023-06-21T17:23:26Z",
      visibility: "public",
      archive_url:
        "https://api.github.com/repos/triggerdotdev/empty/{archive_format}{/ref}",
      commits_url:
        "https://api.github.com/repos/triggerdotdev/empty/commits{/sha}",
      compare_url:
        "https://api.github.com/repos/triggerdotdev/empty/compare/{base}...{head}",
      description:
        "An empty repo that can be used to test the @trigger.dev/github integration",
      forks_count: 0,
      is_template: false,
      open_issues: 4,
      branches_url:
        "https://api.github.com/repos/triggerdotdev/empty/branches{/branch}",
      comments_url:
        "https://api.github.com/repos/triggerdotdev/empty/comments{/number}",
      contents_url:
        "https://api.github.com/repos/triggerdotdev/empty/contents/{+path}",
      git_refs_url:
        "https://api.github.com/repos/triggerdotdev/empty/git/refs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/triggerdotdev/empty/git/tags{/sha}",
      has_projects: true,
      releases_url:
        "https://api.github.com/repos/triggerdotdev/empty/releases{/id}",
      statuses_url:
        "https://api.github.com/repos/triggerdotdev/empty/statuses/{sha}",
      allow_forking: true,
      assignees_url:
        "https://api.github.com/repos/triggerdotdev/empty/assignees{/user}",
      downloads_url:
        "https://api.github.com/repos/triggerdotdev/empty/downloads",
      has_downloads: true,
      languages_url:
        "https://api.github.com/repos/triggerdotdev/empty/languages",
      default_branch: "main",
      milestones_url:
        "https://api.github.com/repos/triggerdotdev/empty/milestones{/number}",
      stargazers_url:
        "https://api.github.com/repos/triggerdotdev/empty/stargazers",
      watchers_count: 0,
      deployments_url:
        "https://api.github.com/repos/triggerdotdev/empty/deployments",
      git_commits_url:
        "https://api.github.com/repos/triggerdotdev/empty/git/commits{/sha}",
      has_discussions: false,
      subscribers_url:
        "https://api.github.com/repos/triggerdotdev/empty/subscribers",
      contributors_url:
        "https://api.github.com/repos/triggerdotdev/empty/contributors",
      issue_events_url:
        "https://api.github.com/repos/triggerdotdev/empty/issues/events{/number}",
      stargazers_count: 0,
      subscription_url:
        "https://api.github.com/repos/triggerdotdev/empty/subscription",
      collaborators_url:
        "https://api.github.com/repos/triggerdotdev/empty/collaborators{/collaborator}",
      issue_comment_url:
        "https://api.github.com/repos/triggerdotdev/empty/issues/comments{/number}",
      notifications_url:
        "https://api.github.com/repos/triggerdotdev/empty/notifications{?since,all,participating}",
      open_issues_count: 4,
      web_commit_signoff_required: false,
    },
    description:
      "An empty repo that can be used to test the @trigger.dev/github integration",
    pusher_type: "user",
    organization: {
      id: 95297378,
      url: "https://api.github.com/orgs/triggerdotdev",
      login: "triggerdotdev",
      node_id: "O_kgDOBa4fYg",
      hooks_url: "https://api.github.com/orgs/triggerdotdev/hooks",
      repos_url: "https://api.github.com/orgs/triggerdotdev/repos",
      avatar_url: "https://avatars.githubusercontent.com/u/95297378?v=4",
      events_url: "https://api.github.com/orgs/triggerdotdev/events",
      issues_url: "https://api.github.com/orgs/triggerdotdev/issues",
      description: "",
      members_url: "https://api.github.com/orgs/triggerdotdev/members{/member}",
      public_members_url:
        "https://api.github.com/orgs/triggerdotdev/public_members{/member}",
    },
    master_branch: "main",
  },
};

export const push: EventSpecificationExample = {
  id: "push",
  name: "Push",
  payload: {
    ref: "refs/heads/main",
    after: "1ca6a91f4a1385e448364a5de1960a3da60d3fe2",
    before: "7f0b6655803858ac09ae05354a679d6dad03120c",
    forced: false,
    pusher: {
      name: "matt-aitken",
      email: "matt@mattaitken.com",
    },
    sender: {
      id: 10635986,
      url: "https://api.github.com/users/matt-aitken",
      type: "User",
      login: "matt-aitken",
      node_id: "MDQ6VXNlcjEwNjM1OTg2",
      html_url: "https://github.com/matt-aitken",
      gists_url: "https://api.github.com/users/matt-aitken/gists{/gist_id}",
      repos_url: "https://api.github.com/users/matt-aitken/repos",
      avatar_url: "https://avatars.githubusercontent.com/u/10635986?v=4",
      events_url: "https://api.github.com/users/matt-aitken/events{/privacy}",
      site_admin: false,
      gravatar_id: "",
      starred_url:
        "https://api.github.com/users/matt-aitken/starred{/owner}{/repo}",
      followers_url: "https://api.github.com/users/matt-aitken/followers",
      following_url:
        "https://api.github.com/users/matt-aitken/following{/other_user}",
      organizations_url: "https://api.github.com/users/matt-aitken/orgs",
      subscriptions_url:
        "https://api.github.com/users/matt-aitken/subscriptions",
      received_events_url:
        "https://api.github.com/users/matt-aitken/received_events",
    },
    commits: [
      {
        id: "1ca6a91f4a1385e448364a5de1960a3da60d3fe2",
        url: "https://github.com/triggerdotdev/empty/commit/1ca6a91f4a1385e448364a5de1960a3da60d3fe2",
        added: [],
        author: {
          name: "Matt Aitken",
          email: "matt@mattaitken.com",
          username: "matt-aitken",
        },
        message: "Updated the readme",
        removed: [],
        tree_id: "3a584b2cae2fe34a195e1fe437cc62031ddff447",
        distinct: true,
        modified: ["README.md"],
        committer: {
          name: "Matt Aitken",
          email: "matt@mattaitken.com",
          username: "matt-aitken",
        },
        timestamp: "2023-06-21T19:27:16+01:00",
      },
    ],
    compare:
      "https://github.com/triggerdotdev/empty/compare/7f0b66558038...1ca6a91f4a13",
    created: false,
    deleted: false,
    base_ref: null,
    repository: {
      id: 656732269,
      url: "https://github.com/triggerdotdev/empty",
      fork: false,
      name: "empty",
      size: 0,
      forks: 0,
      owner: {
        id: 95297378,
        url: "https://api.github.com/users/triggerdotdev",
        name: "triggerdotdev",
        type: "Organization",
        email: "hello@trigger.dev",
        login: "triggerdotdev",
        node_id: "O_kgDOBa4fYg",
        html_url: "https://github.com/triggerdotdev",
        gists_url: "https://api.github.com/users/triggerdotdev/gists{/gist_id}",
        repos_url: "https://api.github.com/users/triggerdotdev/repos",
        avatar_url: "https://avatars.githubusercontent.com/u/95297378?v=4",
        events_url:
          "https://api.github.com/users/triggerdotdev/events{/privacy}",
        site_admin: false,
        gravatar_id: "",
        starred_url:
          "https://api.github.com/users/triggerdotdev/starred{/owner}{/repo}",
        followers_url: "https://api.github.com/users/triggerdotdev/followers",
        following_url:
          "https://api.github.com/users/triggerdotdev/following{/other_user}",
        organizations_url: "https://api.github.com/users/triggerdotdev/orgs",
        subscriptions_url:
          "https://api.github.com/users/triggerdotdev/subscriptions",
        received_events_url:
          "https://api.github.com/users/triggerdotdev/received_events",
      },
      topics: [],
      git_url: "git://github.com/triggerdotdev/empty.git",
      license: null,
      node_id: "R_kgDOJyTwbQ",
      private: false,
      ssh_url: "git@github.com:triggerdotdev/empty.git",
      svn_url: "https://github.com/triggerdotdev/empty",
      archived: false,
      disabled: false,
      has_wiki: true,
      homepage: null,
      html_url: "https://github.com/triggerdotdev/empty",
      keys_url:
        "https://api.github.com/repos/triggerdotdev/empty/keys{/key_id}",
      language: null,
      tags_url: "https://api.github.com/repos/triggerdotdev/empty/tags",
      watchers: 0,
      blobs_url:
        "https://api.github.com/repos/triggerdotdev/empty/git/blobs{/sha}",
      clone_url: "https://github.com/triggerdotdev/empty.git",
      forks_url: "https://api.github.com/repos/triggerdotdev/empty/forks",
      full_name: "triggerdotdev/empty",
      has_pages: false,
      hooks_url: "https://api.github.com/repos/triggerdotdev/empty/hooks",
      pulls_url:
        "https://api.github.com/repos/triggerdotdev/empty/pulls{/number}",
      pushed_at: 1687372039,
      teams_url: "https://api.github.com/repos/triggerdotdev/empty/teams",
      trees_url:
        "https://api.github.com/repos/triggerdotdev/empty/git/trees{/sha}",
      created_at: 1687357267,
      events_url: "https://api.github.com/repos/triggerdotdev/empty/events",
      has_issues: true,
      issues_url:
        "https://api.github.com/repos/triggerdotdev/empty/issues{/number}",
      labels_url:
        "https://api.github.com/repos/triggerdotdev/empty/labels{/name}",
      merges_url: "https://api.github.com/repos/triggerdotdev/empty/merges",
      mirror_url: null,
      stargazers: 0,
      updated_at: "2023-06-21T17:23:26Z",
      visibility: "public",
      archive_url:
        "https://api.github.com/repos/triggerdotdev/empty/{archive_format}{/ref}",
      commits_url:
        "https://api.github.com/repos/triggerdotdev/empty/commits{/sha}",
      compare_url:
        "https://api.github.com/repos/triggerdotdev/empty/compare/{base}...{head}",
      description:
        "An empty repo that can be used to test the @trigger.dev/github integration",
      forks_count: 0,
      is_template: false,
      open_issues: 4,
      branches_url:
        "https://api.github.com/repos/triggerdotdev/empty/branches{/branch}",
      comments_url:
        "https://api.github.com/repos/triggerdotdev/empty/comments{/number}",
      contents_url:
        "https://api.github.com/repos/triggerdotdev/empty/contents/{+path}",
      git_refs_url:
        "https://api.github.com/repos/triggerdotdev/empty/git/refs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/triggerdotdev/empty/git/tags{/sha}",
      has_projects: true,
      organization: "triggerdotdev",
      releases_url:
        "https://api.github.com/repos/triggerdotdev/empty/releases{/id}",
      statuses_url:
        "https://api.github.com/repos/triggerdotdev/empty/statuses/{sha}",
      allow_forking: true,
      assignees_url:
        "https://api.github.com/repos/triggerdotdev/empty/assignees{/user}",
      downloads_url:
        "https://api.github.com/repos/triggerdotdev/empty/downloads",
      has_downloads: true,
      languages_url:
        "https://api.github.com/repos/triggerdotdev/empty/languages",
      master_branch: "main",
      default_branch: "main",
      milestones_url:
        "https://api.github.com/repos/triggerdotdev/empty/milestones{/number}",
      stargazers_url:
        "https://api.github.com/repos/triggerdotdev/empty/stargazers",
      watchers_count: 0,
      deployments_url:
        "https://api.github.com/repos/triggerdotdev/empty/deployments",
      git_commits_url:
        "https://api.github.com/repos/triggerdotdev/empty/git/commits{/sha}",
      has_discussions: false,
      subscribers_url:
        "https://api.github.com/repos/triggerdotdev/empty/subscribers",
      contributors_url:
        "https://api.github.com/repos/triggerdotdev/empty/contributors",
      issue_events_url:
        "https://api.github.com/repos/triggerdotdev/empty/issues/events{/number}",
      stargazers_count: 0,
      subscription_url:
        "https://api.github.com/repos/triggerdotdev/empty/subscription",
      collaborators_url:
        "https://api.github.com/repos/triggerdotdev/empty/collaborators{/collaborator}",
      issue_comment_url:
        "https://api.github.com/repos/triggerdotdev/empty/issues/comments{/number}",
      notifications_url:
        "https://api.github.com/repos/triggerdotdev/empty/notifications{?since,all,participating}",
      open_issues_count: 4,
      web_commit_signoff_required: false,
    },
    head_commit: {
      id: "1ca6a91f4a1385e448364a5de1960a3da60d3fe2",
      url: "https://github.com/triggerdotdev/empty/commit/1ca6a91f4a1385e448364a5de1960a3da60d3fe2",
      added: [],
      author: {
        name: "Matt Aitken",
        email: "matt@mattaitken.com",
        username: "matt-aitken",
      },
      message: "Updated the readme",
      removed: [],
      tree_id: "3a584b2cae2fe34a195e1fe437cc62031ddff447",
      distinct: true,
      modified: ["README.md"],
      committer: {
        name: "Matt Aitken",
        email: "matt@mattaitken.com",
        username: "matt-aitken",
      },
      timestamp: "2023-06-21T19:27:16+01:00",
    },
    organization: {
      id: 95297378,
      url: "https://api.github.com/orgs/triggerdotdev",
      login: "triggerdotdev",
      node_id: "O_kgDOBa4fYg",
      hooks_url: "https://api.github.com/orgs/triggerdotdev/hooks",
      repos_url: "https://api.github.com/orgs/triggerdotdev/repos",
      avatar_url: "https://avatars.githubusercontent.com/u/95297378?v=4",
      events_url: "https://api.github.com/orgs/triggerdotdev/events",
      issues_url: "https://api.github.com/orgs/triggerdotdev/issues",
      description: "",
      members_url: "https://api.github.com/orgs/triggerdotdev/members{/member}",
      public_members_url:
        "https://api.github.com/orgs/triggerdotdev/public_members{/member}",
    },
  },
};
