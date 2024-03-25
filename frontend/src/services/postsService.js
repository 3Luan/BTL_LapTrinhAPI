import backendApi from "../api/backendApi";

export const getPostsAPI = () => {
  return backendApi.get(`/api/posts/getPosts`);
};

export const createPostAPI = (formData) => {
  return backendApi.post(`/api/posts/createPosts`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getPostsByUserId = (userId) => {
  return backendApi.get(`/api/posts/getPostsByUserId/${userId}`);
};

export const toggleLikePostAPI = (postId) => {
  return backendApi.post(`/api/posts/toggleLikePost`, { postId });
};
