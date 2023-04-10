// import User from "../db/models/userModel.js";

export const home = async (req, res) => {
  return res.render("home", { pageTitle: "Home" });
};

export const register = async (req, res) => {
  return res.render("register", { pageTitle: "Register" });
};
