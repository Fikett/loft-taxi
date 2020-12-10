import { ILoginData, IPaymentData } from "@modules-auth";
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

export const selectPaymentData = createSelector<any, IPaymentData, IPaymentData>(
  ({ auth }) => auth.paymentData,
  (paymentData) => paymentData
);

