const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      max: 100,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      max: 500,
      trim: true,
    },
    url: {
      type: String,
      required: true,
      max: 1024,
      trim: false,
    },
  },
  {
    timestamps: true,
  }
);
const Post = mongoose.model("post", postSchema);
module.exports = Post;
