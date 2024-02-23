const userService = require("../services/userService");

let registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  let data = await userService.handleRegister(res, name, email, password);
  return res.status(200).json({
    data,
  });
};

let loginUser = async (req, res) => {
  const { email, password } = req.body;
  let data = await userService.handleLogin(res, email, password);
  return res.status(200).json({
    data,
  });
};

let refreshUser = async (req, res) => {
  let data = await userService.handleRefresh(req);
  return res.status(200).json({
    data,
  });
};

let logoutUser = async (req, res) => {
  let data = await userService.handleLogout(res);
  return res.status(200).json({
    data,
  });
};

module.exports = {
  registerUser: registerUser,
  loginUser: loginUser,
  refreshUser: refreshUser,
  logoutUser: logoutUser,
};
