import { handleActions } from "redux-actions";
import { combineReducers, Reducer } from "redux";
import { setPaymentData } from "./actions";
import { IPaymentData } from "@modules-auth";

const paymentDataInitialState: IPaymentData = {};
const paymentData: Reducer<IPaymentData, any> = handleActions<
  IPaymentData,
  any
>(
  {
    [setPaymentData.toString()]: (state, { payload }) => {
      return { ...state, ...payload };
    },
  },
  paymentDataInitialState
);

export default combineReducers({
  paymentData,
});
