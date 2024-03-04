import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],

    isLoading: true,
    isError: false,
  },
  reducers: {
    GET_POSTS: (state) => {
      state.isLoading = true;
      state.isError = false;

      state.posts = [];
    },
    GET_POSTS_ERROR: (state) => {
      state.isLoading = false;
      state.isError = true;

      state.posts = [];
    },
    GET_POSTS_SUCCESS: (state, action) => {
      state.isLoading = false;
      state.isError = false;

      state.posts = action.payload;
    },
  },
});

export const { GET_POSTS, GET_POSTS_ERROR, GET_POSTS_SUCCESS } =
  postsSlice.actions;

export default postsSlice.reducer;
