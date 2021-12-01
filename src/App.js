import { useGetPostsQuery, useGetUsersQuery } from "./services/api";

import Posts from "./features/Posts/Posts";

function App() {
  useGetPostsQuery();
  useGetUsersQuery();

  return (
    <div className="App">
      <Posts />
    </div>
  );
}

export default App;
