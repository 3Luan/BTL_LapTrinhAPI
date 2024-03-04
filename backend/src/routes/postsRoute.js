const express = require("express");
const postsController = require("../controllers/postsController");
const { checkJWT } = require("../middleware/jwtActions");
const router = express.Router();

const multer = require("multer");
const storage = multer.memoryStorage(); // You can change this to diskStorage if you want to save files to disk
const upload = multer({ storage: storage });

router.post(
  "/createPosts",
  checkJWT,
  upload.fields([
    { name: "images", maxCount: 10 },
    { name: "files", maxCount: 10 },
  ]),
  postsController.createPosts
);
router.get("/getPosts", checkJWT, postsController.getPosts);
router.delete("/deletePosts", checkJWT, postsController.getPosts);

module.exports = router;
