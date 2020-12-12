import { combineReducers } from "redux";
import { fork } from "redux-saga/effects";

import { default as auth } from "./auth";
import { authSaga } from "./auth";

import { default as routes } from "./routes";
import { routesSaga } from "./routes";

export default combineReducers({
  auth,
  routes,
});

export function* rootSaga() {
  yield fork(authSaga);
  yield fork(routesSaga);
}
