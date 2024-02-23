const userService = require("../services/authService");

let registerUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let data = await userService.handleRegister(email, password);

    if (data.code === 0) {
      //Set cookie trong trường hợp đăng nhập thành công
      res.cookie("refreshtoken", data.refreshToken, {
        httpOnly: true,
        path: "/api/refresh",
        maxAge: 24 * 30 * 60 * 60 * 100, // 30 ngày
      });

      // Bỏ refreshtoken trước khi trả về cho client
      let { refreshToken, ...newData } = data;
      data = newData;
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(200).json({
      code: error.code,
      message: error.message,
    });
  }
};

let loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let data = await userService.handleLogin(email, password);

    if (data.code === 0) {
      //Set cookie trong trường hợp đăng nhập thành công
      res.cookie("refreshtoken", data.refreshToken, {
        httpOnly: true,
        path: "/api/refresh",
        maxAge: 24 * 30 * 60 * 60 * 100, // 30 ngày
      });

      // Bỏ refreshtoken trước khi trả về cho client
      let { refreshToken, ...newData } = data;
      data = newData;
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(200).json({
      code: error.code,
      message: error.message,
    });
  }
};

let logoutUser = async (req, res) => {
  try {
    res.clearCookie("refreshtoken", { path: "/api/refresh" });
    res.status(200).json({
      code: 0,
      message: "Đăng xuất thành công",
    });
  } catch (error) {
    res.status(200).json({
      code: 1,
      message: "Đăng xuất thất bại",
    });
  }
};

let refreshUser = async (req, res) => {
  try {
    let data = await userService.handleRefresh(req.userId);

    res.status(200).json(data);
  } catch (error) {
    res.status(200).json({
      code: 1,
      message: "Hãy đăng nhập",
    });
  }
};

module.exports = {
  registerUser: registerUser,
  loginUser: loginUser,
  logoutUser: logoutUser,
  refreshUser: refreshUser,
};
