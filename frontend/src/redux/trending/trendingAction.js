import { toast } from "react-toastify";
import { getPopularMusicVideosAPI } from "../../services/videoService";
import {
  GET_TRENDING_MUSSIC,
  GET_TRENDING_MUSSIC_ERROR,
  GET_TRENDING_MUSSIC_SUCCESS,
} from "./trendingSlice";

export const getPopularMusicVideos = () => {
  return async (dispatch, getState) => {
    dispatch(GET_TRENDING_MUSSIC());

    let res = await getPopularMusicVideosAPI();

    if (res) {
      if (res.items) {
        dispatch(GET_TRENDING_MUSSIC_SUCCESS(res.items));
      } else {
        dispatch(GET_TRENDING_MUSSIC_ERROR());
      }
    } else {
      toast.error("Lỗi server: (getPopularMusicVideos)");
      dispatch(GET_TRENDING_MUSSIC_ERROR());
    }
  };
};
