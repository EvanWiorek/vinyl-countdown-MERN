const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const AlbumSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Album title cannot not be blank."],
      minlength: [2, "Album title needs to be at least 2 characters long."],
      unique: [true, "{PATH} is already on this list."],
    },
    artistName: {
      type: String,
      required: [true, "Artist name cannot not be blank."],
      minlength: [2, "Artist name needs to be at least 2 characters long."],
    },
    owned: {
      type: Boolean,
      default: false,
    },
    // isFavorited: {
    //   type: Boolean,
    //   default: false,
    // },
    description: {
      type: String,
      required: [true, "Description name cannot not be blank."],
      minlength: [
        3,
        "Description name needs to be at least 3 characters long.",
      ],
    },
    genres: {
      genreOne: {
        type: String,
        required: [true, "Each album should have at least one genre."],
      },
      genreTwo: {
        type: String,
        required: false,
      },
      genreThree: {
        type: String,
        required: false,
      },
    },
  },
  { timestamps: true }
);

AlbumSchema.plugin(uniqueValidator, {message: '{VALUE} is already on this list.'})

module.exports.Album = mongoose.model("Album", AlbumSchema);
