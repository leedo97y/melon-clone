const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

const BASE_JS = "./src/client/js/";

module.exports = {
  entry: {
    main: BASE_JS + "main.js",
    header: BASE_JS + "header.js",
    playlist: BASE_JS + "playlist.js",
    register: BASE_JS + "register.js",
    // login: BASE_JS + "login.js",
    myplaylist: BASE_JS + "myplaylist.js",
    toptracks: BASE_JS + "toptracks.js",
    popstar: BASE_JS + "popstar.js",
    kpop: BASE_JS + "kpop.js",
    api: BASE_JS + "api.js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/styles.css",
    }),
    new HtmlWebpackPlugin({
      filename: "base.pug",
    }),
    new webpack.EnvironmentPlugin({
      API_KEY: "9ef77bf80f5f45115d9ad6df6c2de8ec",
      JWT_SECRET_KEY: "tomato",
      COOKIE_SECRET: "doylee",
    }),
  ],
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "docs"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        loader: "file-loader",
        options: {
          name: "images/[name].[ext]",
        },
      },
      {
        test: /\.mp3$/,
        loader: "file-loader",
        options: {
          name: "audios/[name].[ext]",
        },
      },
    ],
  },
};
