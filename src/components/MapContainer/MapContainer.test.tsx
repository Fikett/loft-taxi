import React from "react";
import { fireEvent, render } from "@testing-library/react";
import MapContainer from "./MapContainer";
import { Provider } from "react-redux";

describe("MapContainer", () => {
  // beforeEach(() => { });

  // beforeEach(() => { });

  test("MapContainer renders", () => {
    const mockStore = {
      getState: () => ({
        auth: { authenticated: true, loginData: { login: "", password: "" } },
        routes: { currentRoute: [] },
        payment: { paymentData: { cardName: "", cardNumber: "", cvc: "" } },
      }),
      subscribe: () => {},
      dispatch: () => {},
    };

    render(
      <Provider store={mockStore}>
        <MapContainer />
      </Provider>
    );
  });
});
