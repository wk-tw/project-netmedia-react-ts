import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { UserState } from "./types/UserState";

/**
 * Initial State
 */
const initialState: { user?: UserState } = { user: undefined };

/**
 * Reducers
 */
const loginReducer = (
  state: { user?: UserState },
  action: PayloadAction<UserState>,
): void => {
  state.user = action.payload;
};

const logoutReducer = (state: { user?: UserState }) => {
  state.user = undefined;
};

/**
 * Slice
 */
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: loginReducer,
    logout: logoutReducer,
  },
});

/**
 * Actions
 */
export const { login, logout } = userSlice.actions;

/**
 * Selectors
 */
export const selectUser = (state: RootState): UserState | undefined =>
  state.user.user;

export default userSlice.reducer;
