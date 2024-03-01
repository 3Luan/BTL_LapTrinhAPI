import backendApi from "../api/backendApi";

export const getUserByIdAPI = (userId) => {
  return backendApi.get(`/api/user/find/${userId}`);
};
