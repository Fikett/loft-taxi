import { handleActions } from "redux-actions";
import { combineReducers, Reducer } from "redux";
import { fetchAuthFailure, fetchAuthSuccess, setLoginData } from "./actions";
import { ILoginData } from "@modules-auth";

const authenticated = handleActions(
  {
    [fetchAuthSuccess]: () => true,
    [fetchAuthFailure]: () => false,
    // [fetchSeriesSuccess]: (_state, action) => action.payload,
  },
  false
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

export default combineReducers({
  authenticated,
  loginData,
});
