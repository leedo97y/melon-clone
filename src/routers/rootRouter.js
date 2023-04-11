import express from "express";
import { home, register, login } from "../controllers/songController";
let path = require("path");

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.get("/register", register);
rootRouter.get("/login", login);

export default rootRouter;
