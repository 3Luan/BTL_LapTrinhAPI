import { createSlice } from "@reduxjs/toolkit";

export const commentVideoSlice = createSlice({
  name: "commentVideo",
  initialState: {
    comment: [],

    isLoading: false,
    isError: false,
  },
  reducers: {
    GET_VIDEO_COMMENTS_BY_ID: (state, action) => {
      state.isLoading = true;
      state.comment = [];
    },
    GET_VIDEO_COMMENTS_BY_ID_ERROR: (state, action) => {
      state.isLoading = false;
      state.isError = true;

      state.comment = [];
    },
    GET_VIDEO_COMMENTS_BY_ID_SUCCESS: (state, action) => {
      state.isLoading = false;
      state.isError = false;

      state.comment = action.payload;
    },
  },
});

export const {
  GET_VIDEO_COMMENTS_BY_ID,
  GET_VIDEO_COMMENTS_BY_ID_ERROR,
  GET_VIDEO_COMMENTS_BY_ID_SUCCESS,
} = commentVideoSlice.actions;

export default commentVideoSlice.reducer;
