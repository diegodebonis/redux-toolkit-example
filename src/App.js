import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchAllPosts,
  selectAllPosts,
  selectPostByTitle,
} from "./features/Posts/postsSlice";

import { useGetPostsQuery } from "./services/postApi";

function App() {
  // const dispatch = useDispatch();
  const [filter, setFilter] = useState("");
  const posts = useSelector(selectAllPosts);
  const { data, isLoading, isError, isSuccess, error } = useGetPostsQuery();

  let content = null;

  const val = useSelector((state) => selectPostByTitle(state, filter));

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = val.map((item) => <div key={item.id}>{item.title}</div>);
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return (
    <div className="App">
      <h2>Posts</h2>
      Filter:{" "}
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {content}
    </div>
  );
}

export default App;
