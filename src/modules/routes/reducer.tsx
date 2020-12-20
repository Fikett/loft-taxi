import { handleActions } from "redux-actions";
import { combineReducers, Reducer } from "redux";
import {
  calculateRouteFailure,
  calculateRouteRequest,
  calculateRouteSuccess,
  getAddressListFailure,
  getAddressListRequest,
  getAddressListSuccess,
} from "./actions";

const addressesList: Reducer<string[], any> = handleActions<string[], any>(
  {
    [getAddressListRequest.toString()]: (state, { payload }) => {
      return Array<string>();
    },
    [getAddressListFailure.toString()]: (state, { payload }) => {
      return Array<string>();
    },

    [getAddressListSuccess.toString()]: (state, { payload }) => {
      return payload;
    },
  },
  Array<string>()
);

const currentRoute: Reducer<[], any> = handleActions<[], any>(
  {
    [calculateRouteRequest.toString()]: (state, { payload }) => {
      return [];
    },
    [calculateRouteFailure.toString()]: (state, { payload }) => {
      return [];
    },

    [calculateRouteSuccess.toString()]: (state, { payload }) => {
      return payload;
    },
  },
  []
);

export default combineReducers({
  addressesList,
  currentRoute,
});
