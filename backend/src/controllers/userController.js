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

module.exports = {
  getUserById,
};
