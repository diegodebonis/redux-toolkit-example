import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllPosts, selectAllPosts } from "./features/Posts/postsSlice";

import { useGetPostsQuery } from "./services/postApi";

function App() {
  // const dispatch = useDispatch();
  // const posts = useSelector(selectAllPosts);
  const { data, isLoading, isError, isSuccess, error } = useGetPostsQuery();

  let content = null;

  // console.log("posts: ", posts);

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = data.map((item) => <div key={item.id}>{item.title}</div>);
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return (
    <div className="App">
      <h2>Posts</h2>
      Filter: <input type="text" />
      {content}
    </div>
  );
}

export default App;
