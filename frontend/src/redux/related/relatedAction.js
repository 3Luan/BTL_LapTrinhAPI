import { toast } from "react-toastify";
import { getVideoRelatedByIdAPI } from "../../services/videoService";
import {
  GET_VIDEO_RELATED,
  GET_VIDEO_RELATED_ERROR,
  GET_VIDEO_RELATED_SUCCESS,
} from "./relatedSlice";

export const getVideoRelatedById = (videoTitle) => {
  return async (dispatch, getState) => {
    dispatch(GET_VIDEO_RELATED());

    let res = await getVideoRelatedByIdAPI(videoTitle);

    if (res) {
      if (res.items) {
        dispatch(GET_VIDEO_RELATED_SUCCESS(res.items));
      } else {
        dispatch(GET_VIDEO_RELATED_ERROR());
      }
    } else {
      toast.error("Lỗi server: (getVideoRelatedById)");
      dispatch(GET_VIDEO_RELATED_ERROR());
    }
  };
};
