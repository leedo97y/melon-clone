import { userModel } from "./models/userModel.js";
import { songModel } from "./models/songModel.js";

export const dbTestHandler = async (db) => {
  userModel.create({
    _id: "642ae081d7e3118c7f9695ac",
    email: "leedoy11@gmail.com",
    nickName: "Doy",
  });

  songModel.create({
    _id: "642adee2d7e3118c7f9695aa",
    title: "Edge of Desire",
    image: {
      path: "",
      filename: "Edge of Desire",
    },
    artist: "John Mayer",
    description: "good song",
    category: "pop",
    likes: 121,
  });

  process.on("SIGINT", async () => {
    await db.dropDatabase();

    console.log("DB clear!");
    process.exit();
  });
};
