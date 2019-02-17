import runTests from "react-cosmos-telescope";

console.log(require.resolve("../cosmos.config.js"));
runTests({
  cosmosConfigPath: require.resolve("../cosmos.config.next.js")
  // exclude: "/MediaComponent/"
});
