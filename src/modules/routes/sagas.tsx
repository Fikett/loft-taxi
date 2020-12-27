import {
  IFetchAddressListResponse,
  IFetchCalculateRouteRequest,
} from "@modules-routes";
import api from "modules/api";
import { takeEvery } from "redux-saga/effects";
import { fork, call, put } from "redux-saga/effects";
import {
  calculateRouteFailure,
  calculateRouteRequest,
  calculateRouteSuccess,
  getAddressListFailure,
  getAddressListRequest,
  getAddressListSuccess,
} from "./actions";

function* fetchAddressListWatcher() {
  yield takeEvery(getAddressListRequest, fetchAddressListFlow);
}

export function* fetchAddressListFlow({ payload }: { payload }) {
  try {
    const response: IFetchAddressListResponse = yield call(
      api.fetchAddressList
    );

    yield put(getAddressListSuccess(response.addresses));
  } catch (error) {
    console.log("error", error);
    yield put(getAddressListFailure());
  }
}

function* fetchCalculateRouteWatcher() {
  yield takeEvery(calculateRouteRequest, fetchCalculateRouteFlow);
}

export function* fetchCalculateRouteFlow({
  payload,
}: {
  payload: IFetchCalculateRouteRequest;
}) {
  try {
    const response = yield call(api.fetchCalculateRoute, payload);

    yield put(calculateRouteSuccess(response));
  } catch (error) {
    console.log("error", error);
    yield put(calculateRouteFailure());
  }
}

export function* routesSaga() {
  yield fork(fetchAddressListWatcher);
  yield fork(fetchCalculateRouteWatcher);
}
