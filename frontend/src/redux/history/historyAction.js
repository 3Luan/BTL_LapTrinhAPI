import toast from "react-hot-toast";
import {
  GET_HISTORY,
  GET_HISTORY_ERROR,
  GET_HISTORY_SUCCESS,
} from "./historySlice";
import { addHistoryAPI, getHistoryAPI } from "../../services/userService";
import { getVideoByIdAPI } from "../../services/videoService";

export const handleAddHistory = (videoId) => {
  return async (dispatch, getState) => {
    // let res = await createPosts(content, images, files);
    let res = await addHistoryAPI(videoId);

    // if (res) {
    //   if (res.code === 0) {
    //     toast.success("Tạo bài viết thành công");
    //   } else {
    //     toast.error("Có lỗi khi tạo bài viết. Hãy thử lại");
    //   }
    // } else {
    //   toast.error("Error handleCreatePosts");
    // }
  };
};

export const handleGetHistory = () => {
  return async (dispatch, getState) => {
    // dispatch(GET_HISTORY());

    let res = await getHistoryAPI();

    if (res) {
      if (res.code === 0) {
        // Lấy danh sách các video IDs từ mảng history
        const videoIds = res.history.map((item) => item.videoId);

        // Gọi API để lấy thông tin của các video từ videoIds
        let videosInfo = await Promise.all(
          videoIds.map((videoId) => getVideoByIdAPI(videoId))
        );

        // Lọc thông tin cần thiết từ kết quả trả về
        const historyData = res.history.map((item, index) => ({
          addedAt: item.addedAt,
          videoInfo: videosInfo[index].items[0],
        }));

        dispatch(GET_HISTORY_SUCCESS(historyData));
      } else {
        dispatch(GET_HISTORY_ERROR());
      }
    } else {
      dispatch(GET_HISTORY_ERROR());
    }
  };
};
