import { IFetchAuthRequestPayload, IFetchRegisterRequest, ISavePaymentData } from "@modules-auth";
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
  saveCardFailure,
  saveCardRequest,
  saveCardSuccess,
  saveToken,
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
    const response = yield call(api.fetchAuth, payload);

    if (response.success) {
      yield put(fetchAuthSuccess(true));
      yield put(saveToken(response.token));
    } else {
      yield put(fetchAuthFailure(false));
      yield put(saveToken(""));
    }
  } catch (error) {
    console.log("error", error);
    yield put(fetchAuthFailure(false));
  }
}

function* fetchfetchUpdatePaymentWatcher() {
    yield takeEvery(saveCardRequest, fetchUpdatePaymentFlow);
  }
  
  function* fetchUpdatePaymentFlow({
    payload,
  }: {
    payload: ISavePaymentData;
  }) {
    try {
      const response = yield call(api.fetchUpdatePayment, payload);
  
      if (response.success) {
        yield put(saveCardSuccess(true));
      
      } else {
        yield put(saveCardFailure(false));
       
      }
    } catch (error) {
      console.log("error", error);
    }
  }


  function* fetchRegisterWatcher() {
    yield takeEvery(fetchRegisterRequest, fetchRegisterFlow);
  }
  
  function* fetchRegisterFlow({
    payload,
  }: {
    payload: IFetchRegisterRequest;
  }) {
    try {
      const response = yield call(api.fetchRegister, payload);
  
      if (response.success) {
        yield put(fetchRegisterSuccess(true));
      
      } else {
        yield put(fetchRegisterFailure(false));
       
      }
    } catch (error) {
      console.log("error", error);
    }
  }

export function* authSaga() {
  yield fork(fetchAuthWatcher);
  yield fork(fetchfetchUpdatePaymentWatcher);

  yield fork(fetchRegisterWatcher);

  
}
