import backendApi from "../api/backendApi";

export const getPostsAPI = () => {
  return backendApi.get(`/api/posts/getPosts`);
};

export const createPosts = (content, images, files) => {
  return backendApi.post(`/api/posts/createPosts`, { content, images, files });
};
