import Song from "../db/models/songModel.js";
import User from "../db/models/userModel.js";

export const home = async (req, res) => {
  return res.render("home", { pageTitle: "Home" });
};
