import toast from "react-hot-toast";
import { getPostsAPI, getPostsByUserId } from "../../services/postsService";
import { GET_POSTS, GET_POSTS_ERROR, GET_POSTS_SUCCESS } from "./postsSlice";

export const handleGetPosts = () => {
  return async (dispatch, getState) => {
    dispatch(GET_POSTS());

    let res = await getPostsAPI();

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

export const handlegetPostsByUserId = () => {
  return async (dispatch, getState) => {
    dispatch(GET_POSTS());

    let res = await getPostsByUserId();

    if (res) {
      if (res.code === 0) {
        dispatch(GET_POSTS_SUCCESS(res.posts));
      } else {
        dispatch(GET_POSTS_ERROR());
      }
    } else {
      toast.error("Error handlegetPostsByUserId");
      dispatch(GET_POSTS_ERROR());
    }
  };
};
