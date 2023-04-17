import express from "express";
import morgan from "morgan";
import session from "express-session";
// import flash from "express-flash";
// import MongoStore from "connect-mongo";
import { localsMiddleware } from "./middlewares";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import { userList } from "./data/userList";
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

// app.get("/", (req, res) => {
//   if (req.headers.cookie) {
//     const [, privateKey] = req.headers.cookie.split("=");
//     const userInfo = privateSession[privateKey];
//     res.render("home", {
//       loggedIn: true,
//       loggedInUser: userInfo,
//     });
//   } else {
//     res.render("home", { loggedIn: false });
//   }
// });

// app.get("/login", (req, res) => {
//   const msg = req.query.msg;
//   res.render("login", { msg });
// });

// app.post("/login", (req, res) => {
//   const { userEmail, userPw } = req.body;

//   const [user] = userList.filter(
//     (item) => item.email === userEmail && item.password === userPw
//   );

//   if (user) {
//     const privateKey = Math.floor(Math.random() * 1000000000);
//     privateSession[privateKey] = user;
//     console.log(privateSession);
//     res.setHeader("Set-Cookie", `connect.id=${privateKey}; path=/`);
//     alert("로그인에 성공하였습니다!");
//     res.redirect("/");
//   } else {
//     res.redirect("/login?msg=등록되지 않은 사용자입니다.");
//   }
// });

/*
Add more routers here!
*/

export default app;
