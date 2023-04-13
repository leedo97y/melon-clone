// import User from "../db/models/userModel.js";

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
