const express = require("express");
const userController = require("../controllers/userController");
const { checkJWT } = require("../middleware/jwtActions");
const router = express.Router();

router.get("/find/:userId", checkJWT, userController.getUserById);
router.post("/addHistory", checkJWT, userController.addHistory);
router.get("/getHistory", checkJWT, userController.getHistory);

module.exports = router;
