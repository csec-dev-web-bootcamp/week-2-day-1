// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const nodeExternals = require("webpack-node-externals");
const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  target: "node",
  externals: [
    nodeExternals({
      additionalModuleDirs: ["../../node_modules"],
    }),
  ],
  resolve: {
    alias: {
      "@lib/common": path.resolve(__dirname, "../../libs/common/src"),
      "@/prisma/client": path.resolve(__dirname, "../../prisma/client"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.devtool = false;
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
