import {
  ISavePaymentData,
  IFetchGetPaymentRequest,
  IFetchGetPaymentResponse,
  IPaymentData,
  IFetchUpdatePaymentResponse,
} from "@modules-payment";
import api from "modules/api";
import moment from "moment";
import { takeEvery } from "redux-saga/effects";
import { fork, call, put } from "redux-saga/effects";
import {
  getPaymentRequest,
  saveCardFailure,
  saveCardRequest,
  saveCardSuccess,
  setPaymentData,
  setPaymentError,
} from "./actions";

function* fetchfetchUpdatePaymentWatcher() {
  yield takeEvery(saveCardRequest, fetchUpdatePaymentFlow);
}

export function* fetchUpdatePaymentFlow({
  payload,
}: {
  payload: ISavePaymentData;
}) {
  try {
    const response: IFetchUpdatePaymentResponse = yield call(
      api.fetchUpdatePayment,
      payload
    );

    if (response.success) {
      yield put(saveCardSuccess(true));
    } else {
      yield put(saveCardFailure(false));

      yield put(setPaymentError(response.error));
    }
  } catch (error) {
    console.log("error", error);
  }
}

function* fetchGetPaymentWatcher() {
  yield takeEvery(getPaymentRequest, fetchGetPaymentFlow);
}

export function* fetchGetPaymentFlow({
  payload,
}: {
  payload: IFetchGetPaymentRequest;
}) {
  try {
    const response: IFetchGetPaymentResponse = yield call(
      api.fetchGetPayment,
      payload
    );

    if (response.id) {
      let req: IPaymentData = {
        cardName: response.cardName || "",
        cardNumber: response.cardNumber || "",
        cvc: response.cardNumber || "",
        date: moment(response.expiryDate || "").toDate(),
      };

      yield put(setPaymentData(req));
    }
  } catch (error) {
    console.log("error", error);
  }
}

export function* paymentSaga() {
  yield fork(fetchfetchUpdatePaymentWatcher);
  yield fork(fetchGetPaymentWatcher);
}
