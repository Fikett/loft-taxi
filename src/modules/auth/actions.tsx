import {
  IfetchAuthFailurePayload,
  IFetchAuthRequestPayload,
  IfetchAuthSuccessPayload,
  ILoginData,
  IPaymentData,
  ISavePaymentData,
} from "@modules-auth";
import { createAction } from "redux-actions";

export const saveToken = createAction<string>("saveToken");

export const fetchAuthRequest = createAction<IFetchAuthRequestPayload>(
  "fetchAuthRequest"
);
export const fetchAuthSuccess = createAction<IfetchAuthSuccessPayload>(
  "fetchAuthSuccess"
);
export const fetchAuthFailure = createAction<IfetchAuthFailurePayload>(
  "fetchAuthFailure"
);

export const setLoginData = createAction<ILoginData>("setLoginData");
export const setPaymentData = createAction<IPaymentData>("setPaymentData");

export const saveCardRequest = createAction<ISavePaymentData>(
  "saveCardRequest"
);
export const saveCardSuccess = createAction<IfetchAuthSuccessPayload>(
  "saveCardSuccess"
);
export const saveCardFailure = createAction<IfetchAuthFailurePayload>(
  "saveCardFailure"
);
