import backendApi from "../api/backendApi";

export const registerAPI = (name, email, password) => {
  return backendApi.post("/api/register", { name, email, password });
};

export const loginAPI = (email, password) => {
  return backendApi.post("/api/login", { email, password });
};

export const refreshAPI = () => {
  return backendApi.post("/api/refresh");
};

export const logoutAPI = () => {
  return backendApi.post("/api/logout");
};
