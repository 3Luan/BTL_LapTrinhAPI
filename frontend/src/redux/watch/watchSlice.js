import { createSlice } from "@reduxjs/toolkit";

export const watchSlice = createSlice({
  name: "watch",
  initialState: {
    video: null,

    isLoading: false,
    isError: false,
  },
  reducers: {
    GET_VIDEO_BY_ID: (state, action) => {
      state.isLoading = true;
    },
    GET_VIDEO_BY_ID_ERROR: (state, action) => {
      state.isLoading = false;
      state.isError = true;

      state.video = null;
    },
    GET_VIDEO_BY_ID_SUCCESS: (state, action) => {
      state.isLoading = false;
      state.isError = false;

      state.video = action.payload;
    },
  },
});

export const {
  GET_VIDEO_BY_ID,
  GET_VIDEO_BY_ID_ERROR,
  GET_VIDEO_BY_ID_SUCCESS,
} = watchSlice.actions;

export default watchSlice.reducer;
