import { Schema } from "mongoose";

export const UserSchema = new Schema(
  {
    email: String,
    nickName: String,
  },
  {
    timestamps: true,
  }
);
