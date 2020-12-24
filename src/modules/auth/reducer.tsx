import { handleActions } from "redux-actions";
import { combineReducers, Reducer } from "redux";
import {
  clearLoginError,
  clearRegisterError,
  fetchAuthFailure,
  fetchAuthRequest,
  fetchAuthSuccess,
  fetchRegisterFailure,
  fetchRegisterRequest,
  fetchRegisterSuccess,
  saveToken,
  setLoginData,
  setLoginError,
  setRegisterData,
  setRegisterError,
} from "./actions";
import {
  IFetchRegisterRequest,
  ILoginData,
  IRegisterStatus,
} from "@modules-auth";

const authenticated = handleActions(
  {
    [fetchAuthSuccess]: () => true,
    [fetchAuthFailure]: () => false,
  },
  false
);

const token: Reducer<string, any> = handleActions<string, any>(
  {
    [saveToken.toString()]: (state, { payload }) => {
      return payload;
    },
    [fetchAuthFailure.toString()]: (state, { payload }) => {
      return "";
    },
  },
  ""
);

const loginDataInitialState: ILoginData = {
  email: "",
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

const loginError: Reducer<string, any> = handleActions<string, any>(
  {
    [setLoginError.toString()]: (state, { payload }) => {
      return payload;
    },
    [clearLoginError.toString()]: (state, { payload }) => {
      return "";
    },
    [fetchAuthRequest.toString()]: (state, { payload }) => {
      return "";
    },
  },
  ""
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

const registerError: Reducer<string, any> = handleActions<string, any>(
  {
    [setRegisterError.toString()]: (state, { payload }) => {
      return payload;
    },
    [clearRegisterError.toString()]: (state, { payload }) => {
      return "";
    },
    [fetchRegisterRequest.toString()]: (state, { payload }) => {
      return "";
    },
  },
  ""
);

const registrationStatusInitialState: IRegisterStatus = {
  success: false,
  token: "string",
};

export default combineReducers({
  authenticated,
  loginData,
  token,
  registerData,
  loginError,
  registerError,
});
