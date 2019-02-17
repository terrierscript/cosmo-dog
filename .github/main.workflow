workflow "New workflow" {
  on = "push"
  resolves = ["test"]
}

action "test" {
  uses = "docker://node:latest"
  runs = "yarn test"
}
