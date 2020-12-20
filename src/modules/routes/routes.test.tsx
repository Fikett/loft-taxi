import React from "react";
import api from "modules/api";
import { runSaga } from "redux-saga";
import reducer from "modules/routes";
import { fetchAddressListFlow, fetchCalculateRouteFlow } from "./sagas";

describe("routesSaga", () => {
  it("fetchAddressListFlow", async () => {
    const fakeResponse = { addresses: [] };
    const requestAuthors = jest
      .spyOn(api, "fetchAddressList")
      .mockImplementation(() => Promise.resolve(fakeResponse));

    const dispatched = [];
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchAddressListFlow,
      {
        payload: {},
      }
    );

    expect(requestAuthors).toHaveBeenCalledTimes(1);

    expect(dispatched).toEqual([
      {
        payload: [],
        type: "getAddressListSuccess",
      },
    ]);

    requestAuthors.mockClear();
  });

  it("fetchCalculateRouteFlow", async () => {
    const fakeResponse = [];
    const requestAuthors = jest
      .spyOn(api, "fetchCalculateRoute")
      .mockImplementation(() => Promise.resolve(fakeResponse));

    const dispatched = [];
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchCalculateRouteFlow,
      {
        payload: {
          address1: "",
          address2: "",
        },
      }
    );

    expect(requestAuthors).toHaveBeenCalledTimes(1);

    expect(dispatched).toEqual([
      {
        payload: [],
        type: "calculateRouteSuccess",
      },
    ]);

    requestAuthors.mockClear();
  });
});

describe("routesReducer", () => {
  const initial = {
    addressesList: [],
    currentRoute: [],
  };

  it("addressesList", () => {
    const action = {
      payload: ["test"],
      type: "getAddressListSuccess",
    };

    expect(reducer(initial, action)).toEqual({
      ...initial,
      addressesList: ["test"],
    });
  });

  it("currentRoute", () => {
    const action = {
      type: "calculateRouteSuccess",
      payload: ["a"],
    };

    expect(reducer(initial, action)).toEqual({
      ...initial,
      currentRoute: ["a"],
    });
  });
});
