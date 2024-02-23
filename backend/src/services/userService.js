const userModel = require("../models/UserModel");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwtActions = require("../middleware/jwtActions");

let handleRegister = (res, name, email, password) => {
  return new Promise(async (resolve, reject) => {
    let data = {};

    try {
      let user = await userModel.findOne({ email });

      if (user) {
        data = {
          errCode: 1,
          errMessage: "Email đã tồn tại",
        };
      } else if (!name || !email || !password) {
        data = {
          errCode: 1,
          errMessage: "Không được bỏ trống",
        };
      } else if (!validator.isEmail(email)) {
        data = {
          errCode: 1,
          errMessage: "Email không đúng định dạng",
        };
      } else {
        // if (!validator.isStrongPassword(password)) return res.status(400).json("Password must be a strong password...");
        user = new userModel({ name, email, password });
        user.password = await bcrypt.hash(user.password, 10);

        await user.save();

        let payload = {
          data: user,
        };

        // Đăng ký thành công, tạo JWT token
        const token = jwtActions.createJWT(payload);
        res.cookie("token", token, { httpOnly: true }); // lưu token vào cookies

        data = {
          errCode: 0,
          errMessage: "Tạo tài khoản thành công",
          user,
        };
      }

      resolve(data);
    } catch (error) {
      console.log(error);
      data = {
        errCode: 1,
        errMessage: error,
      };
      resolve(data);
    }
  });
};

let handleLogin = (res, email, password) => {
  return new Promise(async (resolve, reject) => {
    let data = {};

    try {
      let user = await userModel.findOne({ email });

      // user không tồn tại
      if (!user) {
        data = {
          errCode: 1,
          errMessage: "Tài khoản hoặc mật khẩu không chính xác",
        };
      } else {
        const isPasswordValid = await bcrypt.compare(password, user.password);

        // user không đúng mật khẩu
        if (!isPasswordValid) {
          data = {
            errCode: 1,
            errMessage: "Tài khoản hoặc mật khẩu không chính xác",
          };
        } else {
          // Đăng nhập thành công
          user.password = ""; // xóa mật khẩu trước khi lấy lên client

          let payload = {
            data: user,
          };

          // Đăng nhập thành công, tạo JWT token
          const token = jwtActions.createJWT(payload);

          res.cookie("token", token, { httpOnly: true });

          data = {
            errCode: 0,
            errMessage: "Đăng nhập thành công",
            user,
          };
        }
      }
      resolve(data);
    } catch (error) {
      console.log(error);
      data = {
        errCode: 1,
        errMessage: error,
      };
      resolve(data);
    }
  });
};

let handleRefresh = (req) => {
  return new Promise(async (resolve, reject) => {
    let data = {};

    try {
      let user = req.user.data;

      data = {
        errCode: 0,
        errMessage: "Lấy dữ liệu user login khi refresh thành công",
        user,
      };

      resolve(data);
    } catch (error) {
      console.log(error);
      data = {
        errCode: 1,
        errMessage: error,
      };
      resolve(data);
    }
  });
};

let handleLogout = (res) => {
  return new Promise(async (resolve, reject) => {
    let data = {};

    try {
      res.clearCookie("token");

      data = {
        errCode: 0,
        errMessage: "Đăng xuất thành công",
      };

      resolve(data);
    } catch (error) {
      console.log(error);
      data = {
        errCode: 1,
        errMessage: `Đăng xuất thất bại: ${error}`,
      };
      resolve(data);
    }
  });
};

module.exports = {
  handleRegister: handleRegister,
  handleLogin: handleLogin,
  handleRefresh: handleRefresh,
  handleLogout: handleLogout,
};
