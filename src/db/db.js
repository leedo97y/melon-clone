import mongoose from "mongoose";
import { dbTestHandler } from "./dbTestHandler";
export * from "./models/userModel.js";

mongoose.connect(process.env.DB_URL, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useFindAndModify: false,
  // useCreateIndex: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) => console.log("❌ DB Error", error);

db.on("connected", async () => {
  console.log(
    "정상적으로 MongoDB 서버에 연결되었습니다.  " + process.env.DB_URL
  );
  if (process.env.NODE_ENV === "dev") {
    await db.dropDatabase();
    await dbTestHandler(db);
  }
});

db.on("error", handleError);
db.once("open", handleOpen);
