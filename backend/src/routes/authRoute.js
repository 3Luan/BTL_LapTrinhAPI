const express = require("express");
const authController = require("../controllers/authController");
const { checkJWT } = require("../middleware/jwtActions");
const router = express.Router();

// router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
router.post("/refresh", checkJWT, authController.refreshUser);
router.post("/logout", authController.logoutUser);

module.exports = router;
