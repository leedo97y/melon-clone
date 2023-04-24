const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

const BASE_JS = "./src/client/js/";

module.exports = {
  entry: {
    main: BASE_JS + "main.js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/styles.css",
    }),
    // new HtmlWebpackPlugin({
    //   filename: "base.pug",
    // }),
    new webpack.EnvironmentPlugin({
      API_KEY: "9ef77bf80f5f45115d9ad6df6c2de8ec",
      JWT_SECRET_KEY: "tomato",
      COOKIE_SECRET: "doylee",
    }),
  ],
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "assets"),
    clean: true,
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
        include: [path.resolve(__dirname, "src/client/images")],
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "images/",
        },
      },
      {
        test: /\.mp3$/,
        include: [path.resolve(__dirname, "src/client/audios")],
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "audios/",
            },
          },
        ],
      },
    ],
  },
};
