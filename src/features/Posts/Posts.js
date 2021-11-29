import { useState } from "react";
import { useSelector } from "react-redux";

import { selectPostByTitle } from "./postsSlice";
import { useGetPostsQuery } from "../../services/postApi";

export default function Posts() {
  const { isLoading, isError, isSuccess, error } = useGetPostsQuery();

  const [filter, setFilter] = useState("");

  let content = null;

  const data = useSelector((state) => selectPostByTitle(state, filter));

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = data.length ? (
      data.map((item) => <div key={item.id}>{item.title}</div>)
    ) : (
      <div>No post found.</div>
    );
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }
  return (
    <>
      <h2>Posts</h2>
      Filter:{" "}
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {content}
    </>
  );
}
