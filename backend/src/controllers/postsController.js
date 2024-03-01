const postsModel = require("../models/postsModel");

let getPosts = async (req, res) => {
  try {
    let posts = await postsModel.find();

    if (!posts || posts.length === 0) {
      throw {
        code: 1,
        message: "Không có bài viết nào",
      };
    }

    res.status(200).json({
      code: 0,
      message: "Lấy tất cả bài viết thành công",
      posts,
    });
  } catch (error) {
    res.status(200).json({
      code: error.code || 1,
      message: error.message || "Đã có lỗi xảy ra: getPosts",
    });
  }
};

let createPosts = async (req, res) => {
  try {
    const { content, images, files } = req.body;

    userId = req.userId;

    if (!userId || !content) {
      throw {
        code: 1,
        message: "Lỗi khi tạo bài viết: Thông tin chưa đủ",
      };
    }

    // Tạo bài viết mới
    post = await postsModel.create({
      userId,
      content,
      images: images || [],
      files: files || [],
    });

    res.status(200).json({
      code: 0,
      message: "Tạo bài viết thành công",
      post,
    });
  } catch (error) {
    res.status(200).json({
      code: error.code || 1,
      message: error.message || "Đã có lỗi xảy ra: createPosts",
    });
  }
};

let deletePosts = async (req, res) => {
  try {
  } catch (error) {}
};

let getPostsById = async (req, res) => {
  try {
  } catch (error) {}
};

let getPostsByUserId = async (req, res) => {
  try {
  } catch (error) {}
};

module.exports = {
  getPosts,
  createPosts,
  deletePosts,
  getPostsById,
  getPostsByUserId,
};
