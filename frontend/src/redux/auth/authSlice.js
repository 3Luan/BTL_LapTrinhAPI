import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    id: "",
    name: "",
    email: "",
    avatar: "",
    // password: "",

    isLoading: false,
    isError: false,
    auth: false,
  },
  reducers: {
    register: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.auth = false;

      state.id = "";
      state.name = "";
      state.avatar = "";
      state.email = "";
      // state.password = "";
    },
    registerError: (state) => {
      state.isLoading = false;
      state.isError = true;
      state.auth = false;

      state.id = "";
      state.name = "";
      state.avatar = "";
      state.email = "";
      // state.password = "";
    },
    registerSuccess: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.auth = true;

      state.id = action.payload._id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.avatar;
      // state.password = action.payload.password;
    },
    login: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.auth = false;

      state.id = "";
      state.name = "";
      state.email = "";
      state.password = "";
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
      console.log("0");

      state.isLoading = true;
      state.isError = false;
    },
    refreshError: (state) => {
      console.log("1");

      state.isLoading = false;
      state.isError = true;
      state.auth = false;

      state.id = "";
      state.name = "";
      state.email = "";
      state.avatar = "";
      // state.password = "";
    },
    refreshSuccess: (state, action) => {
      console.log("2");

      state.isLoading = false;
      state.isError = false;
      state.auth = true;

      state.id = action.payload._id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.avatar = action.payload.avatar;
      // state.password = action.payload.password;
    },
    logout: (state) => {
      state.isLoading = true;
      state.isError = false;
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
  register,
  registerError,
  registerSuccess,
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
