const mongoose = require("mongoose");

const historySchema = new mongoose.Schema(
  {
    user: {
      type: String,
      ref: "Users",
    },
    video: { type: String },
  },
  {
    timestamps: true,
  }
);

const historyModel = mongoose.model("Historys", historySchema);

module.exports = historyModel;
