import { combineReducers } from "redux";
import { fork } from "redux-saga/effects";

import { default as auth } from "./auth";
import { authSaga } from "./auth";

import { default as routes } from "./routes";
import { routesSaga } from "./routes";

import { default as payment } from "./payment";
import { paymentSaga } from "./payment";

export default combineReducers({
  auth,
  routes,
  payment,
});

export function* rootSaga() {
  yield fork(authSaga);
  yield fork(routesSaga);
  yield fork(paymentSaga);
}
