import express from "express";

import {
  home,
  register,
  login,
  myplaylist,
  toptracks,
  popstar,
  kpop,
} from "../controllers/songController";
let path = require("path");

const rootRouter = express.Router();

rootRouter.use("/", serveStatic(""));

// 경로 뒤에는 songController를 통해서 나온다.
rootRouter.all("/", home);
rootRouter.use("/register", register);
rootRouter.use("/login", login);
rootRouter.use("/myplaylist", myplaylist);
rootRouter.use("/toptracks", toptracks);
rootRouter.use("/popstar", popstar);
rootRouter.use("/kpop", kpop);

// views폴더 내의 ${resource} 폴더 내의 모든 파일을 웹에 띄우며,
// 이 때 ${resource}.html 을 기본 파일로 설정함.

// express.static은 express에서 기본으로 제공해주는 함수이다.
function serveStatic(resource) {
  const resourcePath = path.join(`../views/${resource}`);
  const option = { index: `${resource}.html` };
  return express.static(resourcePath, option);
}

export default rootRouter;
