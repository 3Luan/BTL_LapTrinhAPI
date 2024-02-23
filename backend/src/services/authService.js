const jwtActions = require("../middleware/jwtActions");
const userModel = require("../models/UserModel");
const bcrypt = require("bcrypt");

let handleRegister = async (email, password) => {
  try {
    if (!email || !password) {
      throw {
        code: 1,
        message: "Không được bỏ trống thông tin",
      };
    }

    let user = await userModel.findOne({ email });

    if (user) {
      throw {
        code: 1,
        message: "Email đã tồn tại",
      };
    }

    let payload = {
      id: user._id,
    };

    const accessToken = jwtActions.createAccessJWT(payload);
    const refreshToken = jwtActions.createRefreshJWT(payload);

    return {
      code: 0,
      message: "Đăng ký thành công",
      user,
      accessToken,
      refreshToken,
    };
  } catch (error) {
    return {
      code: error.code || 500,
      message: error.message || "Đã có lỗi xảy ra",
    };
  }
};

let handleLogin = async (email, password) => {
  try {
    if (!email || !password) {
      throw {
        code: 1,
        message: "Không được bỏ trống thông tin",
      };
    }

    let user = await userModel.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw {
        code: 1,
        message: "Tài khoản hoặc mật khẩu không chính xác",
      };
    }

    user.password = ""; // xóa mật khẩu trước khi gửi về client

    let payload = {
      id: user._id,
    };

    const accessToken = jwtActions.createAccessJWT(payload);
    const refreshToken = jwtActions.createRefreshJWT(payload);

    return {
      code: 0,
      message: "Đăng nhập thành công",
      user,
      accessToken,
      refreshToken,
    };
  } catch (error) {
    return {
      code: error.code || 500,
      message: error.message || "Đã có lỗi xảy ra",
    };
  }
};

let handleLogout = async () => {
  try {
  } catch (error) {
    return {
      code: error.code || 500,
      message: error.message || "Đã có lỗi xảy ra",
    };
  }
};

let handleRefresh = async (userId) => {
  try {
    if (!userId) {
      throw {
        code: 1,
        message: "Đã có lỗi xảy ra khi refresh1",
      };
    }

    let user = await userModel.findById(userId);

    if (!user) {
      throw {
        code: 1,
        message: "Đã có lỗi xảy ra khi refresh2",
      };
    }

    user.password = ""; // xóa mật khẩu trước khi gửi về client

    let payload = {
      id: user._id,
    };

    const accessToken = jwtActions.createAccessJWT(payload);

    return {
      code: 0,
      message: "Refresh thành công",
      user,
      accessToken,
    };
  } catch (error) {
    return {
      code: error.code || 500,
      message: error.message || "Đã có lỗi xảy ra",
    };
  }
};

module.exports = {
  handleRegister: handleRegister,
  handleLogin: handleLogin,
  handleLogout: handleLogout,
  handleRefresh: handleRefresh,
};
