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

workflow "New workflow 1" {
  on = "pull_request"
  resolves = ["aquariuslt/github-actions-yarn@master-1"]
}

action "aquariuslt/github-actions-yarn@master-1" {
  uses = "aquariuslt/github-actions-yarn@master"
  runs = "yarn"
  args = "install"
}
