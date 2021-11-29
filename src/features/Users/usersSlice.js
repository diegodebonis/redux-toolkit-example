import { createSelector } from "@reduxjs/toolkit";

import { api } from "../../services/api";

export const selectUsersResult = api.endpoints.getUsers.select();

export const selectAllUsers = createSelector(
  selectUsersResult,
  (users) => users?.data ?? []
);

export const selectUserById = createSelector(
  selectAllUsers,
  (state, id) => id,
  (users, id) => users.find((item) => item.id === id)
);

export const selectIsFetchingUsers = createSelector(
  selectUsersResult,
  (users) => users?.isLoading ?? null
);
