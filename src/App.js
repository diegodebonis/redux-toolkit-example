// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import {
//   fetchAllPosts,
//   selectAllPosts,
//   selectPostByTitle,
// } from "./features/Posts/postsSlice";

// import { useGetPostsQuery } from "./services/postApi";

import Posts from "./features/Posts/Posts";

function App() {
  // const dispatch = useDispatch();

  // const posts = useSelector(selectAllPosts);
  // const { data, isLoading, isError, isSuccess, error } = useGetPostsQuery();

  return (
    <div className="App">
      <Posts />
    </div>
  );
}

export default App;
