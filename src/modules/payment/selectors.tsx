import { IFetchRegisterRequest, ILoginData, IPaymentData } from "@modules-auth";
import { createSelector } from "reselect";

export const selectPaymentData = createSelector<
  any,
  IPaymentData,
  IPaymentData
>(
  ({ payment }) => payment.paymentData,
  (paymentData) => paymentData
);
