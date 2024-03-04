const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      ref: "Users",
    },
    posts: {
      type: String,
      ref: "Posts",
    },
  },
  {
    timestamps: true,
  }
);

const likeModel = mongoose.model("Like", likeSchema);

module.exports = likeModel;
