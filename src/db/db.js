import mongoose from "mongoose";
import { dbTestHandler } from "./dbTestHandler";

const DB_URL =
  process.env.MONGODB_URL ||
  "MongoDB 서버 주소가 설정되지 않았습니다.\n./db/index.ts 파일을 확인해 주세요. \n.env 파일도 필요합니다.\n";

setTimeout(function () {
  mongoose.connect(DB_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true,
  });
}, 60000);

const db = mongoose.connection;

// const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) => console.log("❌ DB Error", error);

db.on("connected", async () => {
  console.log("정상적으로 MongoDB 서버에 연결되었습니다.  " + DB_URL);
  if (process.env.NODE_ENV === "dev") {
    await db.dropDatabase();
    await dbTestHandler(db);
  }
});

db.on("error", handleError);
// db.once("open", handleOpen);

export * from "./models/userModel.js";
