import youtubeApi from "../api/youtubeApi";

export const fetchVideoAPI = () => {
  return youtubeApi.get(`videos`, {
    params: {
      part: "snippet",
      chart: "mostPopular",
      maxResults: 10, // Số lượng video bạn muốn hiển thị
    },
  });
};
