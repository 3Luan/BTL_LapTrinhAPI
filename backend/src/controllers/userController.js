const userModel = require("../models/UserModel");

let getUserById = async (req, res) => {
  try {
    const userId = req.params.userId;

    if (!userId) {
      throw {
        code: 1,
        message: "Người dùng không tồn tại",
      };
    }

    let user = await userModel.findById(userId);

    if (!user) {
      throw {
        code: 1,
        message: "Người dùng không tồn tại",
      };
    }

    res.status(200).json({
      code: 0,
      message: "Lấy thông tin người dùng bằng profile thành công",
      user,
    });
  } catch (error) {
    res.status(200).json({
      code: error.code || 1,
      message: error.message || "Đã có lỗi xảy ra: getUserById",
    });
  }
};

let addHistory = async (req, res) => {
  try {
    const { videoId } = req.body;
    const userId = req.userId;

    // Tìm người dùng
    const user = await userModel.findById(userId);

    // Nếu người dùng không tồn tại
    if (!user) {
      throw {
        code: 1,
        message: "Lỗi: Người dùng không tồn tại",
      };
    }

    // Tìm video trong lịch sử của người dùng
    const existingVideoIndex = user.history.findIndex(
      (item) => item.videoId === videoId
    );

    if (existingVideoIndex !== -1) {
      // Nếu video đã tồn tại, cập nhật thời gian
      user.history[existingVideoIndex].addedAt = Date.now();
    } else {
      // Nếu video chưa có trong lịch sử, thêm mới vào lịch sử
      user.history.unshift({ videoId, addedAt: Date.now() });
    }

    // Lưu trữ người dùng đã cập nhật
    // Sử dụng validateBeforeSave: false để tránh các kiểm tra mô hình
    await user.save();

    res.status(200).json({
      code: 0,
      message: "Add History thành công",
      history: user.history,
    });
  } catch (error) {
    console.error(error);
    res.status(200).json({
      code: error.code || 1,
      message: error.message || "Đã có lỗi xảy ra: addHistory",
    });
  }
};

let getHistory = async (req, res) => {
  try {
    const userId = req.userId;

    // Tìm người dùng theo userId
    const user = await userModel.findById(userId);

    // Kiểm tra nếu không tìm thấy người dùng
    if (!user) {
      throw {
        code: 1,
        message: "Lỗi: Người dùng không tồn tại",
      };
    }

    // Trả về lịch sử của người dùng
    res.status(200).json({
      code: 0,
      message: "Lấy video đã xem thành công",
      history: user.history,
    });
  } catch (error) {
    res.status(200).json({
      code: error.code || 1,
      message: error.message || "Đã có lỗi xảy ra: getHistory",
    });
  }
};

module.exports = {
  getUserById,
  addHistory,
  getHistory,
};
