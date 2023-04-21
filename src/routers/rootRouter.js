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

rootRouter.all("/", home);
rootRouter.use("/register", register);
rootRouter.use("/login", login);
rootRouter.use("/myplaylist", myplaylist);
rootRouter.use("/toptracks", toptracks);
rootRouter.use("/popstar", popstar);
rootRouter.use("/kpop", kpop);

function serveStatic(resource) {
  const resourcePath = path.join(`../views/${resource}`);
  const option = { index: `${resource}.html` };
  return express.static(resourcePath, option);
}

export default rootRouter;
