const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
    },
    name: { type: String, require: true, minlength: 3, maxlength: 30 },
    email: {
      type: String,
      require: true,
      minlength: 3,
      maxlength: 200,
      unique: true,
    },
    avatar: { type: String },
    password: { type: String, require: true, minlength: 3, maxlength: 1024 },
    // posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    playlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Playlists" }],
    // history: [{ type: mongoose.Schema.Types.ObjectId, ref: "Historys" }],
    history: [
      {
        videoId: { type: String },
        addedAt: { type: Date, default: Date.now },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("Users", userSchema);

module.exports = userModel;
