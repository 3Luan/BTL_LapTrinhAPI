import { createSlice } from "@reduxjs/toolkit";

export const relatedSlice = createSlice({
  name: "related",
  initialState: {
    video: [],
    isLoading: true,
    isError: false,
  },
  reducers: {
    GET_VIDEO_RELATED: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    GET_VIDEO_RELATED_ERROR: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },
    GET_VIDEO_RELATED_SUCCESS: (state, action) => {
      state.isLoading = false;
      state.isError = false;

      state.video = action.payload;
    },
  },
});

export const {
  GET_VIDEO_RELATED,
  GET_VIDEO_RELATED_ERROR,
  GET_VIDEO_RELATED_SUCCESS,
} = relatedSlice.actions;

export default relatedSlice.reducer;
