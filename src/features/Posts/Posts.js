import { useState } from "react";
import { useSelector } from "react-redux";

import { selectPostByTitle } from "./postsSlice";
import { useGetPostsQuery, useCreatePostMutation } from "../../services/api";

import Post from "./Post";

export default function Posts() {
  const { isLoading, isError, isSuccess, error } = useGetPostsQuery();

  const [createPost, { isLoading: isCreating }] = useCreatePostMutation();

  const [filter, setFilter] = useState("");

  let content = null;

  const data = useSelector((state) => selectPostByTitle(state, filter));

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = data.length ? (
      data.map((item) => <Post key={item.id} {...item} />)
    ) : (
      <div>No post found.</div>
    );
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return (
    <div className="posts">
      {isCreating ? (
        "Creating..."
      ) : (
        <button
          onClick={() => createPost({ title: "fouo", body: "baur", userId: 1 })}
        >
          Create Post
        </button>
      )}
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
