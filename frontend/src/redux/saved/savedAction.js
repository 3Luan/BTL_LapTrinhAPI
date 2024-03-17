import toast from "react-hot-toast";
import {
  getSavedVideoAPI,
  toggleSaveVideoAPI,
} from "../../services/userService";
import {
  GET_SAVED,
  GET_SAVED_ERROR,
  GET_SAVED_SUCCESS,
  SAVED,
  SAVED_SUCCESS,
} from "./savedSlice";
import { getVideoByIdAPI } from "../../services/videoService";

export const handleToggleSaveVideo = (videoId) => {
  return async (dispatch, getState) => {
    dispatch(SAVED());
    let res = await toggleSaveVideoAPI(videoId);
    dispatch(SAVED_SUCCESS());
  };
};

export const handleGetSavedVideo = () => {
  return async (dispatch, getState) => {
    dispatch(GET_SAVED());

    let res = await getSavedVideoAPI();

    console.log(res);

    if (res) {
      if (res.code === 0) {
        // Lấy danh sách các video IDs từ mảng saved
        const videoIds = res.saved.map((item) => item.videoId);

        // Gọi API để lấy thông tin của các video từ videoIds
        let videosInfo = await Promise.all(
          videoIds.map((videoId) => getVideoByIdAPI(videoId))
        );

        // Lọc thông tin cần thiết từ kết quả trả về
        const savedData = res.saved.map((item, index) => ({
          addedAt: item.addedAt,
          videoInfo: videosInfo[index].items[0],
        }));

        dispatch(GET_SAVED_SUCCESS(savedData));
      } else {
        dispatch(GET_SAVED_ERROR());
      }
    } else {
      dispatch(GET_SAVED_ERROR());
    }
  };
};
