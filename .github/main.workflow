workflow "New workflow" {
  on = "push"
  resolves = ["install"]
}

action "install" {
  uses = "aquariuslt/github-actions-yarn@master"
  runs = "yarn"
  args = "install"
}

action "test" {
  uses = "aquariuslt/github-actions-yarn@master"
  needs = ["install"]
  runs = "yarn"
  args = "test"
}
