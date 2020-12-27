import { IPaymentData } from "@modules-payment";
import { createSelector } from "reselect";

export const selectPaymentData = createSelector<
  any,
  IPaymentData,
  IPaymentData
>(
  ({ payment }) => payment.paymentData,
  (paymentData) => paymentData
);

export const selectPaymentError = createSelector<any, string, string>(
  ({ payment }) => payment.paymentError,
  (paymentError) => paymentError
);

export const selectPaymentSavedWindowShow = createSelector<
  any,
  boolean,
  boolean
>(
  ({ payment }) => payment.paymentSavedWindowShow,
  (paymentSavedWindowShow) => paymentSavedWindowShow
);
