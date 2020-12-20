import { handleActions } from "redux-actions";
import { combineReducers, Reducer } from "redux";
import { clearPaymentError, saveCardRequest, setPaymentData, setPaymentError } from "./actions";
import { IPaymentData } from "@modules-payment";

const paymentDataInitialState: IPaymentData = {
  cardName: "",
  cardNumber: "",
  cvc: "",
  date: undefined,
};
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


const paymentError: Reducer<string, any> = handleActions<string, any>(
  {
    [setPaymentError.toString()]: (state, { payload }) => {
      return payload;
    },
    [clearPaymentError.toString()]: (state, { payload }) => {
      return "";
    },
    [saveCardRequest.toString()]: (state, { payload }) => {
      return "";
    },
  },
  ""
);

export default combineReducers({
  paymentData,
  paymentError
});
