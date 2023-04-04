import { Schema } from "mongoose";

export const SongSchema = new Schema(
  {
    title: String,
    image: {
      path: String,
      filename: String,
    },
    artist: String,
    description: String,
    category: String,
    likes: Number,
  },
  {
    timestamps: true,
  }
);
