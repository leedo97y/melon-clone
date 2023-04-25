import { userModel } from "./db/models/userModel.js";

// 데이터 베이스에 기본 정보를 넣어서 테스팅 할 수 있다.
// 현재는 데이터 베이스에 있는 이 정보로 로그인을 하고 있음.
// 주석처리한 부분은 DB Clear 해주는 부분.

export const dbTestHandler = async (db) => {
  userModel.create({
    _id: "643548c6d7e3118c7f9695c4",
    email: "leedoy11@gmail.com",
    password: "12345",
    nickname: "Doy",
    role: "basic-user",
  });
  userModel.create({
    _id: "6437c197d7e3118c7f9695d0",
    email: "doy@gmail.com",
    password: "12341234",
    nickname: "doyyyy",
    role: "basic-user",
  });
  userModel.create({
    _id: "6437c1c9d7e3118c7f9695d1",
    email: "camel@gmail.com",
    password: "121212",
    nickname: "camelCase",
    role: "basic-user",
  });
  // process.on("SIGINT", async () => {
  //   await db.dropDatabase();
  //   console.log("DB clear!");
  //   process.exit();
  // });
};
