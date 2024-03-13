import backendApi from "../api/backendApi";

export const addHistoryAPI = (videoId) => {
  return backendApi.post("/api/history/addHistory", { videoId });
};

export const getHistoryAPI = () => {
  return backendApi.get("/api/history/getHistory");
};
