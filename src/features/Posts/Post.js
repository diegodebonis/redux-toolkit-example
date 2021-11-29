import { useSelector } from "react-redux";
import { selectUserById, selectIsFetchingUsers } from "../Users/usersSlice";

export default function Post({ title, userId }) {
  const user = useSelector((state) => selectUserById(state, userId));
  const isLoading = useSelector(selectIsFetchingUsers);

  return (
    <div className="post">
      <div>Title: {title}</div>
      <div>Written by: {isLoading ? "loading..." : user.name}</div>
    </div>
  );
}
