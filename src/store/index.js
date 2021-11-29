import { configureStore } from "@reduxjs/toolkit";

import { api } from "../services/api";
// import postsReducer from "../features/Posts/postsSlice";

export const store = configureStore({
  reducer: {
    // posts: postsReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
