import express from "express";
import morgan from "morgan";
import session from "express-session";
// import flash from "express-flash";
// import MongoStore from "connect-mongo";
import { localsMiddleware } from "./middlewares";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";

const router = express.Router();

// 데이터 베이스 기반으로 되어있던 express session을 메모리 스토러 기반으로 바꿔주는 부분.
// 로그인 시 express session을 쓰려고 했지만, 공식문서가 잘 이해가지 않아 패스함.
const MemoryStore = require("memorystore")(session);

// express session의 시간 부분에 사용됨.
const maxAge = 3.6e6 * 24;

const app = express();
const logger = morgan("dev");

// view engine을 퍼그로 세팅해준다.
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// express session 사용하는 부분
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
// app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("assets"));

app.use(rootRouter);
app.use("/apis", userRouter);

/*
Add more routers here!
*/

export default app;
