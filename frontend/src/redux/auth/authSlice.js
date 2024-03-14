import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    id: "",
    name: "",
    email: "",
    avatar: "",

    isLoading: false,
    isError: false,
    auth: false,
  },
  reducers: {
    login: (state) => {
      state.isLoading = true;
    },
    loginError: (state) => {
      state.isLoading = false;
      state.isError = true;
      state.auth = false;

      state.id = "";
      state.name = "";
      state.email = "";
      state.password = "";
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.auth = true;

      state.id = action.payload._id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    refresh: (state) => {
      state.isLoading = true;
    },
    refreshError: (state) => {
      state.isLoading = false;
      state.isError = true;
      state.auth = false;

      state.id = "";
      state.name = "";
      state.email = "";
      state.avatar = "";
    },
    refreshSuccess: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.auth = true;

      state.id = action.payload._id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.avatar = action.payload.avatar;
    },
    logout: (state) => {
      state.isLoading = true;
    },
    logoutError: (state) => {
      state.isLoading = false;
      state.isError = true;
      state.auth = false;
    },
    logoutSuccess: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.auth = false;
    },
  },
});

export const {
  login,
  loginError,
  loginSuccess,
  refresh,
  refreshError,
  refreshSuccess,
  logout,
  logoutError,
  logoutSuccess,
} = authSlice.actions;

export default authSlice.reducer;
