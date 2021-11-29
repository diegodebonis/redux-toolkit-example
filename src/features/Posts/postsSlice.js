import axios from "axios";
import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";

import { postsApi } from "../../services/postApi";

export const selectPostsResult = postsApi.endpoints.getPosts.select();

export const selectAllPosts = createSelector(
  selectPostsResult,
  (postsResult) => postsResult?.data ?? []
);

export const selectPostByTitle = createSelector(
  selectAllPosts,
  (state, title) => title,
  (posts, title) => {
    console.log("ads");
    return posts.filter((item) => item.title.includes(title));
  }
);

const initialState = {
  posts: [],
};

export const fetchAllPosts = createAsyncThunk("/posts", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
});

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state = [...state, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllPosts.fulfilled, (state, action) => {
      state.posts.push(action.payload);
    });
  },
});

export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;
