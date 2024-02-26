import { createSlice } from "@reduxjs/toolkit";

export const trendingSlice = createSlice({
  name: "trending",
  initialState: {
    videos: [],

    isLoading: true,
    isError: false,
  },
  reducers: {
    GET_TRENDING_MUSSIC: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    GET_TRENDING_MUSSIC_ERROR: (state, action) => {
      state.videos = [];

      state.isLoading = false;
      state.isError = true;
    },
    GET_TRENDING_MUSSIC_SUCCESS: (state, action) => {
      state.videos = action.payload;

      state.isLoading = false;
      state.isError = false;
    },
  },
});

export const {
  GET_TRENDING_MUSSIC,
  GET_TRENDING_MUSSIC_ERROR,
  GET_TRENDING_MUSSIC_SUCCESS,
} = trendingSlice.actions;

export default trendingSlice.reducer;
