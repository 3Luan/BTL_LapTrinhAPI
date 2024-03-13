const express = require("express");
const { checkJWT } = require("../middleware/jwtActions");
const router = express.Router();
const hisrotyController = require("../controllers/historyController");

router.post("/addHistory", checkJWT, hisrotyController.addHistory);
router.get("/getHistory", checkJWT, hisrotyController.getHistory);

module.exports = router;
