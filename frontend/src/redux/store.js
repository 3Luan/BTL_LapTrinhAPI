import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "./videopopular/videoPopularSlice";
import watchSlice from "./watch/watchSlice";
import relatedSlice from "./related/relatedSlice";
import trendingSlice from "./trending/trendingSlice";
import authSlice from "./auth/authSlice";
import userSlice from "./user/userSlice";
import postsSlice from "./posts/postsSlice";
import historySlice from "./history/historySlice";
import savedSlice from "./saved/savedSlice";
import commentVideoSlice from "./comment/commentVideoSlice";
import postDetailsSlice from "./postDetails/postDetailsSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    posts: postsSlice,
    postDetails: postDetailsSlice,
    videos: videoSlice,
    watch: watchSlice,
    related: relatedSlice,
    trending: trendingSlice,
    history: historySlice,
    saved: savedSlice,
    commentVideo: commentVideoSlice,
  },
});
