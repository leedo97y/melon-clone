import express from "express";
import { home, register } from "../controllers/songController";
let path = require("path");

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.get("/register", register);

export default rootRouter;
