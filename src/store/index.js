import { configureStore } from "@reduxjs/toolkit";

import { postsApi } from "../services/postApi";
import postsReducer from "../features/Posts/postsSlice";

export const store = configureStore({
  reducer: {
    // posts: postsReducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});
