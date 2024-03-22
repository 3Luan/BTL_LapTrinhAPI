import { createSlice } from "@reduxjs/toolkit";

export const videoSlice = createSlice({
  name: "video",
  initialState: {
    videos: [],

    isLoading: false,
    isError: false,
  },
  reducers: {
    FETCH_VIDEO: (state, action) => {
      state.videos = [];

      state.isLoading = true;
    },
    FETCH_VIDEO_ERROR: (state, action) => {
      state.videos = [];

      state.isLoading = false;
      state.isError = true;
    },
    FETCH_VIDEO_SUCCESS: (state, action) => {
      state.videos = action.payload;

      state.isLoading = false;
      state.isError = false;
    },
  },
});

export const { FETCH_VIDEO, FETCH_VIDEO_ERROR, FETCH_VIDEO_SUCCESS } =
  videoSlice.actions;

export default videoSlice.reducer;
