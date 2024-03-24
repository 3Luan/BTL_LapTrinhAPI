import { toast } from "react-toastify";
import {
  FETCH_VIDEO,
  FETCH_VIDEO_ERROR,
  FETCH_VIDEO_SEARCH,
  FETCH_VIDEO_SEARCH_ERROR,
  FETCH_VIDEO_SEARCH_SUCCESS,
  FETCH_VIDEO_SUCCESS,
} from "./videoPopularSlice";
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
    dispatch(FETCH_VIDEO_SEARCH());

    let res = await searchVideosAPI(keyword);

    if (res) {
      if (res.items) {
        dispatch(FETCH_VIDEO_SEARCH_SUCCESS(res.items));
      } else {
        dispatch(FETCH_VIDEO_SEARCH_ERROR());
      }
    } else {
      toast.error("Lỗi server: (getVideosBySearch)");
      dispatch(FETCH_VIDEO_SEARCH_ERROR());
    }
  };
};
