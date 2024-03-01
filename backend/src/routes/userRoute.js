const express = require("express");
const userController = require("../controllers/userController");
const { checkJWT } = require("../middleware/jwtActions");
const router = express.Router();

router.get("/find/:userId", checkJWT, userController.getUserById);

module.exports = router;
