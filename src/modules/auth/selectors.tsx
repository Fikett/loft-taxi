import { IFetchRegisterRequest, ILoginData } from "@modules-auth";
import { createSelector } from "reselect";

export const selectAuthenticated = createSelector<any, boolean, boolean>(
  ({ auth }) => auth.authenticated,
  (authenticated) => authenticated
);

export const selecttoken = createSelector<any, string, string>(
  ({ auth }) => auth.token,
  (token) => token
);

export const selectLoginData = createSelector<any, ILoginData, ILoginData>(
  ({ auth }) => auth.loginData,
  (loginData) => loginData
);

export const selectRegisterData = createSelector<
  any,
  IFetchRegisterRequest,
  IFetchRegisterRequest
>(
  ({ auth }) => auth.registerData,
  (registerData) => registerData
);

export const selectLoginError = createSelector<any, string, string>(
  ({ auth }) => auth.loginError,
  (loginError) => loginError
);

export const selectRegisterError = createSelector<any, string, string>(
  ({ auth }) => auth.registerError,
  (registerError) => registerError
);




