import {
  IFetchAuthRequestPayload,
  IfetchAuthResponse,
  IFetchRegisterRequest,
  IFetchRegisterResponse,
} from "@modules-auth";
import api from "modules/api";
import { takeEvery } from "redux-saga/effects";
import { fork, call, put } from "redux-saga/effects";
import {
  fetchAuthFailure,
  fetchAuthRequest,
  fetchAuthSuccess,
  fetchRegisterFailure,
  fetchRegisterRequest,
  fetchRegisterSuccess,
  saveToken,
  setLoginError,
  setRegisterError,
} from "./actions";

function* fetchAuthWatcher() {
  yield takeEvery(fetchAuthRequest, fetchAuthFlow);
}

export function* fetchAuthFlow({
  payload,
}: {
  payload: IFetchAuthRequestPayload;
}) {
  try {
    const response: IfetchAuthResponse = yield call(api.fetchAuth, payload);

    if (response.success) {
      yield put(fetchAuthSuccess());
      yield put(saveToken(response.token));
    } else {
      yield put(fetchAuthFailure());
      yield put(saveToken(""));
      yield put(setLoginError(response.error));
    }
  } catch (error) {
    console.log("error", error);
    yield put(fetchAuthFailure());
  }
}

function* fetchRegisterWatcher() {
  yield takeEvery(fetchRegisterRequest, fetchRegisterFlow);
}

export function* fetchRegisterFlow({
  payload,
}: {
  payload: IFetchRegisterRequest & { history: any };
}) {
  try {
    const response: IFetchRegisterResponse = yield call(
      api.fetchRegister,
      payload
    );

    if (response.success) {
      yield put(fetchAuthSuccess());
      yield put(fetchRegisterSuccess());
      yield put(saveToken(response.token));

      payload.history.push("/map");
    } else {
      yield put(fetchRegisterFailure());
      yield put(setRegisterError(response.error));
    }
  } catch (error) {
    console.log("error", error);
  }
}

export function* authSaga() {
  yield fork(fetchAuthWatcher);
  yield fork(fetchRegisterWatcher);
}
