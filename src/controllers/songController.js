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
export const toptracks = async (req, res) => {
  return res.render("toptrackspage", { pageTitle: "topTracks" });
};
export const pop = async (req, res) => {
  return res.render("pop", { pageTitle: "pop" });
};
export const kpop = async (req, res) => {
  return res.render("kpop", { pageTitle: "k-pop" });
};
