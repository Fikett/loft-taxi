import React from "react";
import api from "modules/api";
import {
  fetchGetPaymentFlow,
  fetchUpdatePaymentFlow,
} from "modules/payment/sagas";
import { runSaga } from "redux-saga";
import moment from "moment";
import reducer from "modules/payment";

describe("paymentSaga", () => {
  it("fetchUpdatePaymentFlow", async () => {
    const fakeResponse = { success: true, error: "" };
    const requestAuthors = jest
      .spyOn(api, "fetchUpdatePayment")
      .mockImplementation(() => Promise.resolve(fakeResponse));

    const dispatched = [];
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchUpdatePaymentFlow,
      {
        payload: {
          cardNumber: "",
          expiryDate: "",
          cardName: "",
          cvc: "",
          token: "",
        },
      }
    );

    expect(requestAuthors).toHaveBeenCalledTimes(1);

    expect(dispatched).toEqual([
      {
        payload: true,
        type: "saveCardSuccess",
      },
      {
        payload: true,
        type: "setPaymentSavedWindowShow",
      },
    ]);

    requestAuthors.mockClear();
  });

  it("fetchGetPaymentFlow", async () => {
    const fakeResponse = {
      cardName: "",
      cardNumber: "",
      cvc: "",
      expiryDate: moment().toDate(),
      id: "a",
    };
    const requestAuthors = jest
      .spyOn(api, "fetchGetPayment")
      .mockImplementation(() => Promise.resolve(fakeResponse));

    const dispatched = [];
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchGetPaymentFlow,
      {
        payload: {
          token: "",
        },
      }
    );

    expect(requestAuthors).toHaveBeenCalledTimes(1);

    expect(dispatched).toEqual([
      {
        payload: {
          cardName: "",
          cardNumber: "",
          cvc: "",
          date: fakeResponse.expiryDate,
        },
        type: "setPaymentData",
      },
    ]);

    requestAuthors.mockClear();
  });
});

describe("paymentReducer", () => {
  const initial = {
    paymentData: {
      cardName: "",
      cardNumber: "",
      cvc: "",
      date: undefined,
    },
    paymentError: "",
    paymentSavedWindowShow: false,
  };

  it("paymentData", () => {
    const action = {
      payload: { cardName: "", cardNumber: "", cvc: "", date: "" },
      type: "setPaymentData",
    };

    expect(reducer(initial, action)).toEqual({
      ...initial,
      paymentData: {
        cardName: "",
        cardNumber: "",
        cvc: "",
        date: "",
      },
    });
  });

  it("paymentError", () => {
    const action = {
      type: "setPaymentError",
      payload: "test",
    };

    expect(reducer(initial, action)).toEqual({
      ...initial,
      paymentError: "test",
    });
  });

  it("paymentSavedWindowShow", () => {
    const action = {
      type: "setPaymentSavedWindowShow",
      payload: true,
    };

    expect(reducer(initial, action)).toEqual({
      ...initial,
      paymentSavedWindowShow: true,
    });
  });
});
