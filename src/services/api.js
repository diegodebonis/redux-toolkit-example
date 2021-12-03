import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3004",
  }),
  tagTypes: ["Posts", "User"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      // query: () => "/posts",
      query: () => "posts",
      // Provides a list of `Posts` by `id`.
      // If any mutation is executed that `invalidate`s any of these tags, this query will re-run to be always up-to-date.
      // The `LIST` id is a "virtual id" we just made up to be able to invalidate this query specifically if a new `Posts` element was added.
      providesTags: (result) =>
        // is result available?
        result
          ? // successful query
            [
              ...result.map(({ id }) => ({ type: "Posts", id })),
              { type: "Posts", id: "LIST" },
            ]
          : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
            [{ type: "Posts", id: "LIST" }],
    }),
    getPost: builder.query({
      query: (postId) => `/posts/${postId}`,
    }),
    getUsers: builder.query({
      query: () => "/users?_delay=2000",
    }),
    getUser: builder.query({
      query: (userId) => `/users/${userId}`,
    }),
    createPost: builder.mutation({
      query: (data) => {
        return {
          url: `/posts`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useGetUsersQuery,
  useGetUserQuery,
  useCreatePostMutation,
} = api;
