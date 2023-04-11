const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpack = require("webpack");

const BASE_JS = "./src/client/js/";

module.exports = {
  entry: {
    main: BASE_JS + "main.js",
    playlist: BASE_JS + "playlist.js",
    register: BASE_JS + "register.js",
    login: BASE_JS + "login.js",
    api: BASE_JS + "api.js",
    loginData: BASE_JS + "loginData.js",
  },
  // devServer: {
  //   before: (app, server, compiler) => {
  //     app.get("/api/datas", (req, res) => {
  //       res.json([
  //         {
  //           email: "doylee@gmail.com",
  //           password: "12341234",
  //           nickname: "doy",
  //         },
  //         {
  //           email: "cobalt33@gmail.com",
  //           password: "11223344",
  //           nickname: "cobalt",
  //         },
  //         {
  //           email: "test11@gmail.com",
  //           password: "11111111",
  //           nickname: "test11",
  //         },
  //       ]);
  //     });
  //   },
  // },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/styles.css",
    }),
    new webpack.EnvironmentPlugin({
      API_KEY: "9ef77bf80f5f45115d9ad6df6c2de8ec",
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
