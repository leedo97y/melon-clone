import express from "express";
import { home } from "../controllers/songController";
let path = require("path");

const rootRouter = express.Router();

rootRouter.get("/", home);

export default rootRouter;
