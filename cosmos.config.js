module.exports = {
  // webpackConfigPath: "node_modules/react-scripts-ts/config/webpack.config.dev"

  webpack(config) {
    return {
      ...config,
      resolve: {
        extensions: [".ts", ".tsx", ".css", ".svg", ".js", ".jsx"]
      },
      module: {
        rules: [
          // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
          { test: /\.tsx?$/, loader: "ts-loader" },
          {
            test: /\.(jpg|png|gif)$/,
            loader: ["url-loader"]
          }
        ]
      }
    };
  }
};
