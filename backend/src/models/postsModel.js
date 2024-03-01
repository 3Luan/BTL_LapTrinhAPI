const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    images: [
      {
        imageUrl: { type: String, required: true },
        description: { type: String },
      },
    ],
    files: [
      {
        fileUrl: { type: String, required: true },
        fileName: { type: String, required: true },
        fileSize: { type: Number },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const postsModel = mongoose.model("Posts", postsSchema);

module.exports = postsModel;
