import express from "express";

import {
  home,
  register,
  login,
  // getLogin,
  // postLogin,
  myplaylist,
} from "../controllers/songController";
let path = require("path");

const rootRouter = express.Router();

// // rootRouter.use("/", serverStatic(""));

// rootRouter.get("/", home);
// rootRouter.get("/register", register);
// rootRouter.get("/login", getLogin);
// rootRouter.post("/login", postLogin);
// rootRouter.get("/myplaylist", myplaylist);

// // function serverStatic(resource) {
// //   const resourcePath = path.join(`../views/${resource}`);
// //   const option = { index: `${resource}.html` };

// //   return express.static(resourcePath, option);
// // }

rootRouter.use("/", serveStatic(""));

rootRouter.all("/", home);
rootRouter.use("/register", register);
rootRouter.use("/login", login);
rootRouter.use("/myplaylist", myplaylist);

function serveStatic(resource) {
  const resourcePath = path.join(`../views/${resource}`);
  const option = { index: `${resource}.html` };
  return express.static(resourcePath, option);
}

export default rootRouter;
