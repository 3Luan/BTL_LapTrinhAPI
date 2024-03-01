const express = require("express");
const postsController = require("../controllers/postsController");
const { checkJWT } = require("../middleware/jwtActions");
const router = express.Router();

router.get("/getPosts", checkJWT, postsController.getPosts);
router.post("/createPosts", checkJWT, postsController.createPosts);
router.delete("/deletePosts", checkJWT, postsController.getPosts);

module.exports = router;
