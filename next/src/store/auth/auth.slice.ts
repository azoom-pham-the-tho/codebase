import { AuthInitState } from "@/shared/interface/store";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../root/store";

const initialState: AuthInitState = {
  loading: false,
  logging: false,
  user: {
    token: "",
    username: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.loading = true;
      state.user = { token: "", username: "" };
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.logging = true;
      state.user = action.payload;
    },
    loginFalied(state) {
      state.loading = false;
    },
    logout(state) {
      state.loading = false;
      state.logging = false;
      state.user = { token: "", username: "" };
    },
  },
});
export const { login, loginSuccess, loginFalied, logout } = authSlice.actions;

export const selectLogging = (state: RootState) => state.auth.logging;
export const selectLoading = (state: RootState) => state.auth.loading;
export const selectdatauser = (state: RootState) => state.auth.user;

const authReducer = authSlice.reducer;
export default authReducer;
