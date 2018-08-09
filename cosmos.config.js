module.exports = {
  webpack(config) {
    return {
      ...config,
      resolve: {
        extensions: [".ts", ".tsx", ".css", ".svg", ".js", ".jsx"]
      }
    };
  }
};
