const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  const devtool = isProduction ? "source-map" : "eval-cheap-module-source-map";

  return {
    mode: isProduction ? "production" : "development",
    entry: "./src/index.tsx",
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "dist"),
    },
    module: {
      rules: [
        {
          oneOf: [
            {
              test: /\.tsx?$/,
              loader: "ts-loader",
              exclude: /node_modules/,
            },
            {
              test: /\.js$/,
              loader: "babel-loader",
              exclude: /node_modules/,
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react"],
              },
            },
            {
              test: /\.(scss|css)$/,
              use: ["style-loader", "css-loader", "sass-loader"],
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      fallback: {
        "process/browser": require.resolve("process/browser"),
      },
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: "process/browser",
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        filename: "./index.html",
        favicon: "./public/favicon.ico",
      }),
    ],
    cache: true,
    devtool,
  };
};
