import backendApi from "../api/backendApi";

export const registerAPI = (name, email, password) => {
  return backendApi.post("/api/auth/register", { name, email, password });
};

export const loginAPI = (email, password) => {
  return backendApi.post("/api/auth/login", { email, password });
};

export const loginWithGoogleAPI = () => {
  return backendApi.get("/api/auth/google/callback");
};

export const refreshAPI = () => {
  return backendApi.post("/api/auth/refresh");
};

export const logoutAPI = () => {
  return backendApi.post("/api/auth/logout");
};
