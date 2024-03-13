import { createSlice } from "@reduxjs/toolkit";

export const historySlice = createSlice({
  name: "history",
  initialState: {
    history: [],

    isLoading: false,
    isError: false,
  },
  reducers: {
    GET_HISTORY: (state) => {
      state.isLoading = true;
    },
    GET_HISTORY_ERROR: (state) => {
      state.isLoading = false;
      state.isError = true;

      state.history = [];
    },
    GET_HISTORY_SUCCESS: (state, action) => {
      state.isLoading = false;
      state.isError = false;

      state.history = action.payload;
    },
  },
});

export const { GET_HISTORY, GET_HISTORY_ERROR, GET_HISTORY_SUCCESS } =
  historySlice.actions;

export default historySlice.reducer;
