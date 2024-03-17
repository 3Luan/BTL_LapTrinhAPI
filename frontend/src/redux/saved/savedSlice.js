import { createSlice } from "@reduxjs/toolkit";

export const savedSlice = createSlice({
  name: "saved",
  initialState: {
    saved: [],

    isLoading: false,
    isError: false,
  },
  reducers: {
    SAVED: (state) => {
      state.isLoading = true;
    },
    SAVED_SUCCESS: (state) => {
      state.isLoading = false;
    },
    GET_SAVED: (state) => {
      state.isLoading = true;
    },
    GET_SAVED_ERROR: (state) => {
      state.isLoading = false;
      state.isError = true;

      state.saved = [];
    },
    GET_SAVED_SUCCESS: (state, action) => {
      state.isLoading = false;
      state.isError = false;

      state.saved = action.payload;
    },
  },
});

export const {
  SAVED,
  SAVED_SUCCESS,
  GET_SAVED,
  GET_SAVED_ERROR,
  GET_SAVED_SUCCESS,
} = savedSlice.actions;

export default savedSlice.reducer;
