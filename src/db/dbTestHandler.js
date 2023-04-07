import { userModel } from "./models/userModel.js";

export const dbTestHandler = async (db) => {
  // userModel.create({
  //   _id: "642ae081d7e3118c7f9695ac",
  //   email: "leedoy11@gmail.com",
  //   password: "12345",
  //   nickName: "Doy",
  // });

  process.on("SIGINT", async () => {
    await db.dropDatabase();

    console.log("DB clear!");
    process.exit();
  });
};
