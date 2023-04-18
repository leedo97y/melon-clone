import express from "express";
import morgan from "morgan";
import session from "express-session";
// import flash from "express-flash";
// import MongoStore from "connect-mongo";
import { localsMiddleware } from "./middlewares";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";

const router = express.Router();

const MemoryStore = require("memorystore")(session);
const maxAge = 3.6e6 * 24;

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    store: new MemoryStore({ checkPeriod: maxAge }),
    cookie: { maxAge: maxAge }, // 72시간 유효
  })
);
// app.use(flash());
app.use(localsMiddleware);
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("assets"));

app.use(rootRouter);
app.use("/apis", userRouter);

/*
Add more routers here!
*/

export default app;
