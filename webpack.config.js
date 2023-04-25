const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

const BASE_JS = "./src/client/js/";
// base 루트를 미리 작성함.

module.exports = {
  entry: {
    // entry 파일이 여러개여도 됨.
    // assets에 번들링해서 업로드해줌.
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
      // css 파일을 변환 시켜주는 플러그인
    }),
    new HtmlWebpackPlugin({
      filename: "home.pug",
      // 깃헙 페이지로 배포 시도 시 작성했던 코드로, html용 플러그인 코드
    }),
    new webpack.EnvironmentPlugin({
      // .env 안의 일부 환경변수 인식을 못하는 관계로 플러그인으로 넣음.
      API_KEY: "9ef77bf80f5f45115d9ad6df6c2de8ec",
      JWT_SECRET_KEY: "tomato",
      COOKIE_SECRET: "doylee",
    }),
  ],
  output: {
    // filename의 형식으로 path로 들어감.
    filename: "js/[name].js",
    path: path.resolve(__dirname, "assets"),
    // clean 번들링해서 파일을 교체할때, 그 전 파일을 지워주는 여부를 결정하는 코드.
    clean: true,
  },
  module: {
    rules: [
      {
        // 확장자가 .js인 파일을 node-modules 폴더를 제외하고 babel-loader를 사용해서 읽어옴.
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
        // .scss로 작성한 css 파일을 css-loader와 sass-loader를 사용해서 읽어옴.
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        // 이미지 파일 로더 (jpeg | jpg = jpe?g)
        test: /\.(gif|png|jpe?g|svg)$/,
        loader: "file-loader",
        options: {
          name: "images/[name].[ext]",
        },
      },
      {
        // 오디오 파일 로더
        test: /\.mp3$/,
        loader: "file-loader",
        options: {
          name: "audios/[name].[ext]",
        },
      },
    ],
  },
};
