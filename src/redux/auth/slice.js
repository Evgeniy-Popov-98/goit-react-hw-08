import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import { register, login, refreshUser, logOut } from "./operations";

const INITAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState: INITAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        // state.isRefreshing = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.fulfilled, (state, action) => {
        // state.isRefreshing = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(logOut.fulfilled, () => {
        return INITAL_STATE;
      }),
});

export const authReducer = authSlice.reducer;
