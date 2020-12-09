import { ILoginData } from "@modules-auth";
import { createSelector } from "reselect";

export const selectAuthenticated = createSelector<any, boolean, boolean>(
  ({ auth }) => auth.authenticated,
  (authenticated) => authenticated
);

export const selectLoginData = createSelector<any, ILoginData, ILoginData>(
  ({ auth }) => auth.loginData,
  (loginData) => loginData
);

