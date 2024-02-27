import youtubeApi from "../api/youtubeApi";

export const popularVideosAPI = () => {
  return youtubeApi.get(`videos`, {
    params: {
      part: "snippet",
      chart: "mostPopular",
      regionCode: "VN", // Video của quốc gia nào
      maxResults: 1, // Số lượng video bạn muốn hiển thị
    },
  });
};

export const searchVideosAPI = (keyword) => {
  return youtubeApi.get(`search`, {
    params: {
      part: "snippet",
      type: "video",
      q: keyword,
      maxResults: 10,
    },
  });
};

export const getVideoByIdAPI = (videoId) => {
  return youtubeApi.get(`videos`, {
    params: {
      part: "snippet,statistics,contentDetails",
      id: videoId,
    },
  });
};

export const getVideoRelatedByIdAPI = (videoTitle) => {
  return youtubeApi.get(`search`, {
    params: {
      part: "snippet",
      type: "video",
      q: videoTitle,
      maxResults: 10,
    },
  });
};

export const getPopularMusicVideosAPI = () => {
  return youtubeApi.get(`videos`, {
    params: {
      part: "snippet",
      chart: "mostPopular",
      regionCode: "VN",
      videoCategoryId: 10,
      maxResults: 10,
    },
  });
};
