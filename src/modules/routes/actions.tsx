import { createAction } from "redux-actions";

export const getAddressListRequest = createAction("getAddressListRequest");

export const getAddressListSuccess = createAction("getAddressListSuccess");

export const getAddressListFailure = createAction("getAddressListFailure");

export const calculateRouteRequest = createAction("calculateRouteRequest");
export const calculateRouteSuccess = createAction("calculateRouteSuccess");
export const calculateRouteFailure = createAction("calculateRouteFailure");
