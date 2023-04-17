import { userList } from "../data/userList";
export const privateSession = {};

// export const home = async (req, res) => {
//   if (req.headers.cookie) {
//     const [, privateKey] = req.headers.cookie.split("=");
//     const userInfo = privateSession[privateKey];
//     res.render("home", {
//       pageTitle: "home",
//       isLogin: true,
//       userInfo,
//     });
//   } else {
//     res.render("home", { pageTitle: "home", isLogin: false });
//   }
// };

// export const register = async (req, res) => {
//   return res.render("register", { pageTitle: "register" });
// };

// export const getLogin = async (req, res) => {
//   const msg = req.query.msg;
//   res.render("login", { pageTitle: "login", msg });
// };

// export const postLogin = async (req, res) => {
//   const { email, password } = req.body;

//   const [user] = userList.filter(
//     (item) => item.email === email && item.password === password
//   );

//   if (user) {
//     const privateKey = Math.floor(Math.random() * 1000000000);
//     privateSession[privateKey] = user;
//     console.log(privateSession);
//     res.setHeader("Set-Cookie", `connect.id=${privateKey}; path=/`);
//     res.redirect("/");
//   } else {
//     res.redirect("/login?msg=등록되지 않은 사용자입니다.");
//   }
// };

// export const myplaylist = async (req, res) => {
//   return res.render("myplaylist", { pageTitle: "myplaylist" });
// };

export const home = async (req, res) => {
  return res.render("home", { pageTitle: "home" });
};
export const register = async (req, res) => {
  return res.render("register", { pageTitle: "register" });
};
export const login = async (req, res) => {
  return res.render("login", { pageTitle: "login" });
};
export const myplaylist = async (req, res) => {
  return res.render("myplaylist", { pageTitle: "myplaylist" });
};
