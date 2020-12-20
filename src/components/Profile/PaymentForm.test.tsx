import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import PaymentForm from "./PaymentForm";
import api from "modules/api";
import { fetchUpdatePaymentFlow } from "modules/payment/sagas";
import { runSaga } from "redux-saga";

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
    ]);

    requestAuthors.mockClear();
  });
});

describe("PaymentForm", () => {
  // beforeEach(() => { });

  // beforeEach(() => { });

  test("PaymentForm renders", () => {
    const mockStore = {
      getState: () => ({
        auth: {
          authenticated: true,
          loginData: { login: "", password: "" },
          paymentData: { cardNumber: "", date: "", cardName: "", cvc: "" },
        },
      }),
      subscribe: () => {},
      dispatch: () => {},
    };

    render(
      <Provider store={mockStore}>
        <PaymentForm />
      </Provider>
    );
  });

  test("apply btn exists", () => {
    const mockStore = {
      getState: () => ({
        auth: {
          authenticated: true,
          loginData: { login: "", password: "" },
          paymentData: { cardNumber: "", date: "", cardName: "", cvc: "" },
        },
      }),
      subscribe: () => {},
      dispatch: () => {},
    };
    const mock = (
      <Provider store={mockStore}>
        <PaymentForm />
      </Provider>
    );
    const { getByTestId, getByText } = render(mock);

    expect(getByText("Сохранить")).toBeTruthy();
  });

  test("cardNumber input works", () => {
    const mockStore = {
      getState: () => ({
        auth: {
          authenticated: true,
          loginData: { login: "", password: "" },
          paymentData: { cardNumber: "aaa", date: "", cardName: "", cvc: "" },
        },
      }),
      subscribe: () => {},
      dispatch: () => {},
    };
    const mock = (
      <Provider store={mockStore}>
        <PaymentForm />
      </Provider>
    );
    const {
      getByTestId,
      getByText,
      getByPlaceholderText,
      getByLabelText,
    } = render(mock);

    //let input = getByTestId("cardNumber");
    let input = getByPlaceholderText("0000 0000 0000 0000");

    expect(input).toBeTruthy();
    //fireEvent.submit(input)
    //fireEvent.change(input, { target: { value: "23" } });
    //expect(input.value).toBe("aaa");
  });
});
