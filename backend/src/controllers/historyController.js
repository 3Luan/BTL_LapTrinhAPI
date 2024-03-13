const historyModel = require("../models/historyModel");
const mongoose = require("mongoose");

let addHistory = async (req, res) => {
  try {
    const { videoId } = req.body;
    userId = req.userId;

    if (!userId || !videoId) {
      throw {
        code: 1,
        message: "Lỗi khi addHistory",
      };
    }

    // Tìm kiếm lịch sử xem video với userId và videoId tương ứng
    let history = await historyModel.findOneAndUpdate(
      { user: userId, video: videoId },
      { $set: { updatedAt: Date.now() } }, // Cập nhật thời gian
      { upsert: true, new: true }
    );

    res.status(200).json({
      code: 0,
      message: "Add History thành công",
      history,
    });
  } catch (error) {
    console.log(error);
    res.status(200).json({
      code: error.code || 1,
      message: error.message || "Đã có lỗi xảy ra: addHistory",
    });
  }
};

let getHistory = async (req, res) => {
  try {
    userId = req.userId;

    const history = await historyModel.find({ user: userId });

    res.status(200).json({
      code: 0,
      message: "Lấy video đã xem thành công",
      history: history,
    });
  } catch (error) {
    res.status(200).json({
      code: error.code || 1,
      message: error.message || "Đã có lỗi xảy ra: getHistory",
    });
  }
};

module.exports = {
  addHistory,
  getHistory,
};
