import { toast } from "react-toastify";
import {
  FETCH_VIDEO,
  FETCH_VIDEO_ERROR,
  FETCH_VIDEO_SUCCESS,
} from "./videoSlice";
import { popularVideosAPI, searchVideosAPI } from "../../services/videoService";

export const getPopularVideos = () => {
  return async (dispatch, getState) => {
    dispatch(FETCH_VIDEO());

    let res = await popularVideosAPI();

    if (res) {
      if (res.items) {
        dispatch(FETCH_VIDEO_SUCCESS(res.items));
      } else {
        dispatch(FETCH_VIDEO_ERROR());
      }
    } else {
      toast.error("Lỗi server: (getPopularVideos)");
      dispatch(FETCH_VIDEO_ERROR());
    }
  };
};

export const getVideosBySearch = (keyword) => {
  return async (dispatch, getState) => {
    dispatch(FETCH_VIDEO());

    let res = await searchVideosAPI(keyword);

    console.log("res: ", res);

    if (res) {
      if (res.items) {
        dispatch(FETCH_VIDEO_SUCCESS(res.items));
      } else {
        dispatch(FETCH_VIDEO_ERROR());
      }
    } else {
      toast.error("Lỗi server: (getPopularVideos)");
      dispatch(FETCH_VIDEO_ERROR());
    }
  };
};
