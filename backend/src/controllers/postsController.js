const postsModel = require("../models/postsModel");
const mongoose = require("mongoose");

let createPosts = async (req, res) => {
  try {
    const { content } = req.body;
    const images = req.files.images || [];
    const files = req.files.files || [];

    userId = req.userId;

    if (!userId || !content) {
      throw {
        code: 1,
        message: "Lỗi khi tạo bài viết: Thông tin chưa đủ",
      };
    }

    // Convert images
    const imageObjects = images.map((image) => ({
      data: image.buffer,
      contentType: image.mimetype,
      size: image.size,
    }));

    // Convert files
    const fileObjects = files.map((file) => ({
      data: file.buffer,
      contentType: file.mimetype,
      originalName: file.originalname,
      size: file.size,
    }));

    // Tạo bài viết mới
    post = await postsModel.create({
      user: userId,
      content,
      images: imageObjects,
      files: fileObjects,
    });

    res.status(200).json({
      code: 0,
      message: "Tạo bài viết thành công",
      post,
    });
  } catch (error) {
    console.log(error);
    res.status(200).json({
      code: error.code || 1,
      message: error.message || "Đã có lỗi xảy ra: createPosts",
    });
  }
};

let getPosts = async (req, res) => {
  try {
    const posts = await postsModel
      .find()
      .populate("user")
      .sort({ createdAt: -1 });

    if (!posts || posts.length === 0) {
      throw {
        code: 1,
        message: "Không có bài viết nào",
      };
    }

    // Convert image data to base64 for sending to the client
    const postsWithImagesAndFiles = posts.map((post) => {
      const images = post.images.map((image) => ({
        contentType: image.contentType,
        data: image.data.toString("base64"),
      }));

      const files = post.files.map((file) => ({
        contentType: file.contentType,
        data: file.data.toString("base64"),
        originalName: file.originalName, // Tên gốc của file
        size: file.size, // Kích thước của file trong byte
      }));

      return {
        ...post._doc,
        images,
        files,
      };
    });

    res.status(200).json({
      code: 0,
      message: "Lấy tất cả bài viết thành công",
      posts: postsWithImagesAndFiles,
    });
  } catch (error) {
    res.status(200).json({
      code: error.code || 1,
      message: error.message || "Đã có lỗi xảy ra: getPosts",
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
