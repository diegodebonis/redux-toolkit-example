import { createSelector } from "@reduxjs/toolkit";

import { api } from "../../services/api";

export const selectPostsResult = api.endpoints.getPosts.select();

export const isGetPostsFetching = createSelector(
  selectPostsResult,
  (postsResult) => postsResult?.isLoading ?? null
);

export const selectAllPosts = createSelector(
  selectPostsResult,
  (postsResult) => postsResult?.data ?? []
);

export const selectPostByTitle = createSelector(
  selectAllPosts,
  (state, title) => title,
  (posts, title) => posts.filter((item) => item.title.includes(title))
);
