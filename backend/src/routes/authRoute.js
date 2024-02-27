const express = require("express");
const authController = require("../controllers/authController");
const { checkJWT } = require("../middleware/jwtActions");
const router = express.Router();
const passport = require("passport");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/refresh", checkJWT, authController.refresh);
router.post("/logout", authController.logout);

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"],
    successRedirect: "http://localhost:3000/", // Địa chỉ frontend
    failureRedirect: "http://localhost:3000/login", // Địa chỉ frontend khi đăng nhập thất bại
  })
);

router.get(
  "/google/callback",
  (req, res, next) => {
    passport.authenticate("google", (err, profile) => {
      req.user = profile;
      next();
    })(req, res, next);
  },
  (req, res) => {
    res.redirect(`${process.env.URL_FRONTEND}`);
  }
);

module.exports = router;
