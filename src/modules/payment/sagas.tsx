import {
  IFetchAuthRequestPayload,
  IFetchRegisterRequest,
  ISavePaymentData,
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
  saveCardFailure,
  saveCardRequest,
  saveCardSuccess,
  saveToken,
} from "./actions";

function* fetchfetchUpdatePaymentWatcher() {
  yield takeEvery(saveCardRequest, fetchUpdatePaymentFlow);
}

export function* fetchUpdatePaymentFlow({ payload }: { payload: ISavePaymentData }) {
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

export function* paymentSaga() {
  yield fork(fetchfetchUpdatePaymentWatcher);
}
