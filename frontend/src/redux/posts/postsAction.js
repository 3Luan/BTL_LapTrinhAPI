import toast from "react-hot-toast";
import { createPosts, getPostsAPI } from "../../services/postsService";
import { GET_POSTS, GET_POSTS_ERROR, GET_POSTS_SUCCESS } from "./postsSlice";

export const handleCreatePosts = (formData) => {
  return async (dispatch, getState) => {
    // let res = await createPosts(content, images, files);
    let res = await createPosts(formData);

    // if (res) {
    //   if (res.code === 0) {
    //     toast.success("Tạo bài viết thành công");
    //   } else {
    //     toast.error("Có lỗi khi tạo bài viết. Hãy thử lại");
    //   }
    // } else {
    //   toast.error("Error handleCreatePosts");
    // }
  };
};

export const handleGetPosts = () => {
  return async (dispatch, getState) => {
    dispatch(GET_POSTS());

    let res = await getPostsAPI();

    console.log("res", res);

    if (res) {
      if (res.code === 0) {
        dispatch(GET_POSTS_SUCCESS(res.posts));
      } else {
        dispatch(GET_POSTS_ERROR());
      }
    } else {
      toast.error("Error handleGetPosts");
      dispatch(GET_POSTS_ERROR());
    }
  };
};
