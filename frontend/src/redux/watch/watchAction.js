import { toast } from "react-toastify";
import { getVideoByIdAPI } from "../../services/videoService";
import {
  GET_VIDEO_BY_ID,
  GET_VIDEO_BY_ID_ERROR,
  GET_VIDEO_BY_ID_SUCCESS,
} from "./watchSlice";

export const getVideoById = (videoId) => {
  return async (dispatch, getState) => {
    dispatch(GET_VIDEO_BY_ID());

    let res = await getVideoByIdAPI(videoId);

    console.log("res: ", res);

    if (res) {
      if (res.items) {
        dispatch(GET_VIDEO_BY_ID_SUCCESS(res.items[0]));
      } else {
        dispatch(GET_VIDEO_BY_ID_ERROR());
      }
    } else {
      toast.error("Lỗi server: (getVideoById)");
      dispatch(GET_VIDEO_BY_ID_ERROR());
    }
  };
};
