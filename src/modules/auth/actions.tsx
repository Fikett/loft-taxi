import {
  IfetchAuthFailurePayload,
  IFetchAuthRequestPayload,
  IfetchAuthSuccessPayload,
  IFetchRegisterRequest,
  ILoginData,
  IRegisterStatus,
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

export const fetchRegisterRequest = createAction<
  IFetchRegisterRequest & { history: any }
>("fetchRegisterRequest");
export const fetchRegisterSuccess = createAction<IRegisterStatus>(
  "fetchRegisterSuccess"
);
export const fetchRegisterFailure = createAction("fetchRegisterFailure");

export const setRegisterData = createAction<IFetchRegisterRequest>(
  "setRegisterData"
);

export const setRegisterError = createAction<string>("setRegisterError");
export const clearRegisterError = createAction("clearRegisterError");

export const setLoginData = createAction<ILoginData>("setLoginData");
export const resetLoginData = createAction("resetLoginData");



export const setLoginError = createAction<string>("setLoginError");
export const clearLoginError = createAction("clearLoginError");
