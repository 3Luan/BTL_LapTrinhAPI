const express = require("express");
const authController = require("../controllers/authController");
const { checkJWT } = require("../middleware/jwtActions");
const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/refresh", checkJWT, authController.refresh);
router.post("/logout", authController.logout);

module.exports = router;
