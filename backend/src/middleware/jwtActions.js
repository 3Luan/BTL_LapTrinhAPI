const jwt = require("jsonwebtoken");

const createAccessJWT = (payload) => {
  let secret = process.env.ACCESS_JWT_SECRET;

  return jwt.sign(payload, secret, { expiresIn: "1d" });
};

const createRefreshJWT = (payload) => {
  let secret = process.env.REFRESH_JWT_SECRET;

  return jwt.sign(payload, secret, { expiresIn: "30d" });
};

const checkJWT = async (req, res, next) => {
  const token = req.cookies.refreshtoken;

  // console.log(cookies);

  if (!token) {
    return res.status(401).json({
      code: 1,
      message: "Hãy đăng nhập1",
    });
  }

  jwt.verify(token, process.env.REFRESH_JWT_SECRET, async (error, resutl) => {
    if (error) {
      return res.status(401).json({
        code: 1,
        message: "Hãy đăng nhập2",
      });
    }

    req.userId = resutl.id;
    next();
  });

  // if (cookies && cookies.token) {
  //   const token = cookies.token;
  //   let data = await verifyJWT(token);

  //   if (data) {
  //     data.data.password = "";
  //     req.user = data;
  //     next();
  //   } else {
  //     return res.status(401).json({
  //       errCode: 1,
  //       errMessage: "Phiên bản hết hạn. Hãy đăng nhập lại!",
  //     });
  //   }
  // } else {
  //   return res.status(401).json({
  //     errCode: 1,
  //     errMessage: "Đăng nhập để thực hiện thao tác này!",
  //   });
  // }
};

module.exports = {
  createAccessJWT: createAccessJWT,
  createRefreshJWT: createRefreshJWT,
  checkJWT: checkJWT,
};
