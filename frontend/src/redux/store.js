import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "./videopopular/videoPopularSlice";
import watchSlice from "./watch/watchSlice";
import relatedSlice from "./related/relatedSlice";
import trendingSlice from "./trending/trendingSlice";
import authSlice from "./auth/authSlice";
import userSlice from "./user/userSlice";
import postsSlice from "./posts/postsSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    posts: postsSlice,
    videos: videoSlice,
    watch: watchSlice,
    related: relatedSlice,
    trending: trendingSlice,
  },
});
