workflow "Default test" {
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

workflow "Build when comment" {
  on = "issue_comment"
  resolves = [
    "vsoch/pull-request-action",
  ]
}

action "comment" {
  uses = "actions/bin/filter@46ffca7632504e61db2d4cb16be1e80f333cb859"
  args = "issue_comment build"
}

action "install-pull" {
  uses = "aquariuslt/github-actions-yarn@master"
  needs = ["comment"]
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
