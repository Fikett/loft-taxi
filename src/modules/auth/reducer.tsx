import { handleActions } from "redux-actions";
import { combineReducers, Reducer } from "redux";
import {
  fetchAuthFailure,
  fetchAuthSuccess,
  saveToken,
  setLoginData,
  setPaymentData,
} from "./actions";
import { ILoginData, IPaymentData } from "@modules-auth";

const authenticated = handleActions(
  {
    [fetchAuthSuccess]: () => true,
    [fetchAuthFailure]: () => false,
    // [fetchSeriesSuccess]: (_state, action) => action.payload,
  },
  false
);

const token: Reducer<string, any> = handleActions<string, any>(
  {
    [saveToken.toString()]: (state, { payload }) => {
      return  payload ;
    },
  },
  ""
);



const loginDataInitialState: ILoginData = {
  login: "",
  password: "",
};

const loginData: Reducer<ILoginData, any> = handleActions<ILoginData, any>(
  {
    [setLoginData.toString()]: (state, { payload }) => {
      return { ...state, ...payload };
    },
  },
  loginDataInitialState
);

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
  authenticated,
  loginData,
  paymentData,
  token
});
