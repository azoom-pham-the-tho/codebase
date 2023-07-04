import { LoginResponse } from "@/shared/interface/auth";
import { put, call, takeLatest, fork } from "redux-saga/effects";
import { login, loginFalied, loginSuccess, logout } from "./auth.slice";
import authApi from "@/services/api/authApi";
import { ActionPayload } from "@/shared/interface/store";

function* watchlogin() {
  yield takeLatest(login, handleLogin);
}

function* watchlogout() {
  yield takeLatest(logout, handleLogout);
}
function* handleLogin(action: ActionPayload) {
  try {
    const datares: LoginResponse = yield authApi.login(action.payload);
    if (datares != null) {
      yield put(loginSuccess(datares));
      yield sessionStorage.setItem("token", datares.token);
    } else {
      yield put(loginFalied());
    }
  } catch (error) {
    yield put(loginFalied());
  }
}

function* handleLogout() {
  yield call(removelocal);
}

function* removelocal() {
  yield sessionStorage.removeItem("token");
  yield sessionStorage.removeItem("refreshtoken");
}

export default function* AuthSaga() {
  yield fork(watchlogin);
  yield fork(watchlogout);
}
