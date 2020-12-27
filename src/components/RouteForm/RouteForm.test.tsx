import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import RouteForm from "./RouteForm";

describe("RouteForm", () => {
  // beforeEach(() => { });

  // beforeEach(() => { });

  test("RouteForm renders", () => {
    const mockStore = {
      getState: () => ({
        auth: { authenticated: true, loginData: { login: "", password: "" } },
        routes: {
          addressesList: [],
          currentRoute: [],
        },
        payment: {
          paymentData: { cardName: "", cardNumber: "", cvc: "" },
          paymentError: "",
        },
      }),
      subscribe: () => {},
      dispatch: () => {},
    };

    render(
      <Provider store={mockStore}>
        <RouteForm />
      </Provider>,
      { wrapper: MemoryRouter }
    );
  });

  test("Call taxi btn exists", () => {
    const mockStore = {
      getState: () => ({
        auth: { authenticated: true, loginData: { login: "", password: "" } },
        routes: {
          addressesList: [],
          currentRoute: [],
        },
        payment: {
          paymentData: { cardName: "", cardNumber: "", cvc: "" },
          paymentError: "",
        },
      }),
      subscribe: () => {},
      dispatch: () => {},
    };

    const { getByTestId, getByText } = render(
      <Provider store={mockStore}>
        <RouteForm />
      </Provider>,
      { wrapper: MemoryRouter }
    );

    expect(getByText("Вызвать такси")).toBeTruthy();
  });
});
