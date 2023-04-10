import { Schema } from "mongoose";

export const UserSchema = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    nickName: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
