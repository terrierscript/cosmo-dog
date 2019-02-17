workflow "New workflow" {
  on = "push"
  resolves = ["aquariuslt/github-actions-yarn@master"]
}

action "install" {
  uses = "aquariuslt/github-actions-yarn@master"
  runs = "yarn"
  args = "install"
}

action "aquariuslt/github-actions-yarn@master" {
  uses = "aquariuslt/github-actions-yarn@master"
  needs = ["install"]
  runs = "yarn"
  args = "test"
}

workflow "Pull Req" {
  on = "issue_comment"
  resolves = ["vsoch/pull-request-action"]
}

action "install-pull" {
  uses = "aquariuslt/github-actions-yarn@master"
  runs = "yarn"
  args = "install"
}

action "test-upgrade" {
  uses = "aquariuslt/github-actions-yarn@master"
  needs = ["install-pull"]
  runs = "yarn"
  args = "test -u"
}

action "vsoch/pull-request-action" {
  uses = "vsoch/pull-request-action@master"
  needs = ["test-upgrade"]
  secrets = ["GITHUB_TOKEN"]
}
