import { toast } from "react-toastify";
import {
  FETCH_VIDEO,
  FETCH_VIDEO_ERROR,
  FETCH_VIDEO_SUCCESS,
} from "./videoSlice";
import { fetchVideoAPI } from "../../services/videoService";

export const handleFetchVideos = () => {
  return async (dispatch, getState) => {
    dispatch(FETCH_VIDEO());

    let res = await fetchVideoAPI();

    console.log("res: ", res);

    if (res) {
      if (res.items) {
        dispatch(FETCH_VIDEO_SUCCESS(res.items));
      } else {
        dispatch(FETCH_VIDEO_ERROR());
      }
    } else {
      toast.error("Lỗi server: (handleFetchVideos)");
      dispatch(FETCH_VIDEO_ERROR());
    }
  };
};
