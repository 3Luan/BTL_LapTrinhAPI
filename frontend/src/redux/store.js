import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "./video/videoSlice";

export default configureStore({
  reducer: {
    videos: videoSlice,
  },
});
