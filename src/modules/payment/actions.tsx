import {
  IfetchAuthFailurePayload,
  IFetchAuthRequestPayload,
  IfetchAuthSuccessPayload,
  ILoginData,
  IPaymentData,
  ISavePaymentData,
} from "@modules-auth";
import { createAction } from "redux-actions";

export const setPaymentData = createAction<IPaymentData>("setPaymentData");

export const saveCardRequest = createAction<ISavePaymentData>(
  "saveCardRequest"
);
export const saveCardSuccess = createAction("saveCardSuccess");
export const saveCardFailure = createAction("saveCardFailure");
