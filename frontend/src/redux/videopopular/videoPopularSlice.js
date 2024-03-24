import { createSlice } from "@reduxjs/toolkit";

export const videoSlice = createSlice({
  name: "video",
  initialState: {
    videos: [],
    videoSearch: [],

    isLoading: false,
    isError: false,
  },
  reducers: {
    FETCH_VIDEO: (state, action) => {
      state.videoSearch = [];
      state.isLoading = true;
    },
    FETCH_VIDEO_ERROR: (state, action) => {
      state.videos = [];
      state.videoSearch = [];

      state.isLoading = false;
      state.isError = true;
    },
    FETCH_VIDEO_SUCCESS: (state, action) => {
      state.videos = action.payload;
      state.videoSearch = [];

      state.isLoading = false;
      state.isError = false;
    },

    FETCH_VIDEO_SEARCH: (state, action) => {
      state.videos = [];

      state.isLoading = true;
    },
    FETCH_VIDEO_SEARCH_ERROR: (state, action) => {
      state.videos = [];
      state.videoSearch = [];

      state.isLoading = false;
      state.isError = true;
    },
    FETCH_VIDEO_SEARCH_SUCCESS: (state, action) => {
      state.videoSearch = action.payload;
      state.videos = [];

      state.isLoading = false;
      state.isError = false;
    },
  },
});

export const {
  FETCH_VIDEO,
  FETCH_VIDEO_ERROR,
  FETCH_VIDEO_SUCCESS,
  FETCH_VIDEO_SEARCH,
  FETCH_VIDEO_SEARCH_ERROR,
  FETCH_VIDEO_SEARCH_SUCCESS,
} = videoSlice.actions;

export default videoSlice.reducer;
