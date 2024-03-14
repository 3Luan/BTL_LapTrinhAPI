import backendApi from "../api/backendApi";

export const getUserByIdAPI = (userId) => {
  return backendApi.get(`/api/user/find/${userId}`);
};

export const addHistoryAPI = (videoId) => {
  return backendApi.post("/api/user/addHistory", { videoId });
};

export const getHistoryAPI = () => {
  return backendApi.get("/api/user/getHistory");
};
