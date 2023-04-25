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

/**
 * user 스키마이다.
 *
 * email, password, nickname, role이 있으며,
 * role은 basic-user가 default 값이다.
 */
