import { getPostsByIdAPI } from "../../services/postsService";
import {
  getPostById,
  getPostByIdError,
  getPostByIdSuccess,
} from "./postDetailsSlice";

export const handleGetPostById = (postId) => {
  return async (dispatch, getState) => {
    dispatch(getPostById());

    let res = await getPostsByIdAPI(postId);

    if (res) {
      if (res.code === 0) {
        dispatch(getPostByIdSuccess(res.postDetail));
      } else {
        dispatch(getPostByIdError());
      }
    } else {
      dispatch(getPostByIdError());
    }
  };
};
