import { getVideoCommentsByIdAPI } from "../../services/videoService";
import {
  GET_VIDEO_COMMENTS_BY_ID,
  GET_VIDEO_COMMENTS_BY_ID_ERROR,
  GET_VIDEO_COMMENTS_BY_ID_SUCCESS,
} from "./commentVideoSlice";

export const getVideoCommentsById = (videoId) => {
  return async (dispatch, getState) => {
    dispatch(GET_VIDEO_COMMENTS_BY_ID());

    let res = await getVideoCommentsByIdAPI(videoId);
    console.log(res);
    if (res) {
      if (res.items) {
        dispatch(GET_VIDEO_COMMENTS_BY_ID_SUCCESS(res.items));
      } else {
        dispatch(GET_VIDEO_COMMENTS_BY_ID_ERROR());
      }
    } else {
      dispatch(GET_VIDEO_COMMENTS_BY_ID_ERROR());
    }
  };
};
