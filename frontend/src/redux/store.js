import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "./video/videoSlice";
import watchSlice from "./watch/watchSlice";
import relatedSlice from "./related/relatedSlice";

export default configureStore({
  reducer: {
    videos: videoSlice,
    watch: watchSlice,
    related: relatedSlice,
  },
});
