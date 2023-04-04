import mongoose from "mongoose";
import { SongSchema } from "../schemas/songSchema.js";

const Song = mongoose.model("Song", SongSchema);

// export class SongModel {
//   async findByTitle(title) {
//     return await Song.findOne({ title });
//   }

//   async findByArtist(artist) {
//     return await Song.findOne({ artist });
//   }

//   async findById(songId) {
//     return await Song.findOne({ _id: songId });
//   }

//   async deleteUser(songId) {
//     return await Song.findByIdAndDelete(songId);
//   }
// }

const songModel = new Song();

export default songModel;
