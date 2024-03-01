import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    avatar: "",

    isLoading: true,
    isError: false,
    auth: false,
  },
  reducers: {
    GET_USER_BY_ID: (state) => {
      state.isLoading = true;
      state.isError = false;

      state.name = "";
      state.avatar = "";
    },
    GET_USER_BY_ID_ERROR: (state) => {
      state.isLoading = false;
      state.isError = true;

      state.name = "";
      state.avatar = "";
    },
    GET_USER_BY_ID_SUCCESS: (state, action) => {
      state.isLoading = false;
      state.isError = false;

      state.name = action.payload.name;
      state.avatar = action.payload.avatar;
    },
  },
});

export const { GET_USER_BY_ID, GET_USER_BY_ID_ERROR, GET_USER_BY_ID_SUCCESS } =
  userSlice.actions;

export default userSlice.reducer;
