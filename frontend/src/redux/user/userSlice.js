import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},

    isLoading: false,
    isError: false,
  },
  reducers: {
    GET_USER_BY_ID: (state) => {
      state.isLoading = true;
    },
    GET_USER_BY_ID_ERROR: (state) => {
      state.isLoading = false;
      state.isError = true;

      state.user = null;
    },
    GET_USER_BY_ID_SUCCESS: (state, action) => {
      state.isLoading = false;
      state.isError = false;

      state.user = action.payload;
    },
  },
});

export const { GET_USER_BY_ID, GET_USER_BY_ID_ERROR, GET_USER_BY_ID_SUCCESS } =
  userSlice.actions;

export default userSlice.reducer;
