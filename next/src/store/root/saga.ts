import { all } from "redux-saga/effects";
import AuthSaga from "../auth/auth.saga";

function* testsaga() {
  yield console.log("Saga đã chạy");
}

export default function* rootSaga() {
  yield all([
      testsaga(),
      AuthSaga()
  ]);
}
