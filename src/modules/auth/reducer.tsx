import { handleActions } from "redux-actions";
import { combineReducers, Reducer } from "redux";
import {
  fetchAuthFailure,
  fetchAuthSuccess,
  fetchRegisterFailure,
  fetchRegisterRequest,
  fetchRegisterSuccess,
  saveToken,
  setLoginData,
  setPaymentData,
  setRegisterData,
} from "./actions";
import { IFetchRegisterRequest, ILoginData, IPaymentData } from "@modules-auth";

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
      return payload;
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

const registerDataInitialState: IFetchRegisterRequest = {
  email: "",
  name: "",
  password: "",
  surname: "",
};

const registerData: Reducer<IFetchRegisterRequest, any> = handleActions<
  IFetchRegisterRequest,
  any
>(
  {
    [fetchRegisterRequest.toString()]: (state, { payload }) => {
      return registerDataInitialState;
    },
    [fetchRegisterFailure.toString()]: (state, { payload }) => {
      return registerDataInitialState;
    },

    [fetchRegisterSuccess.toString()]: (state, { payload }) => {
      return payload;
    },
    [setRegisterData.toString()]: (state, { payload }) => {
      return { ...state, ...payload };
    },
  },
  registerDataInitialState
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
  token,
  registerData
});
