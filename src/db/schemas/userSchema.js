import { Schema } from "mongoose";

export const UserSchema = new Schema(
  {
    email: String,
    password: String,
    nickname: String,
    role: {
      type: String,
      default: "basic-user",
    },
  },
  {
    timestamps: true,
  }
);
