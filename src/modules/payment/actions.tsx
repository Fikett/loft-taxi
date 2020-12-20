import {
  IPaymentData,
  ISavePaymentData,
  IFetchGetPaymentRequest,
} from "@modules-payment";
import { createAction } from "redux-actions";

export const setPaymentData = createAction<IPaymentData>("setPaymentData");

export const saveCardRequest = createAction<ISavePaymentData>(
  "saveCardRequest"
);
export const saveCardSuccess = createAction("saveCardSuccess");
export const saveCardFailure = createAction("saveCardFailure");

export const getPaymentRequest = createAction<IFetchGetPaymentRequest>(
  "getPaymentRequest"
);
export const getPaymentSuccess = createAction("getPaymentSuccess");
export const getPaymentFailure = createAction("getPaymentFailure");

export const setPaymentError = createAction<string>("setPaymentError");
export const clearPaymentError = createAction("clearPaymentError");
