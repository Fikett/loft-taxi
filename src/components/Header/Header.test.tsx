import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Link, MemoryRouter, Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Header from "./Header";

describe("Header", () => {
  // beforeEach(() => { });

  // beforeEach(() => { });

  test("Exit btn exists", () => {
    //const wrapper = shallow(<Header setCurentPage={() => { console.log()}}/>);

    const mockStore = configureStore();
    const store: any = mockStore({
      auth: { authenticated: true },
    });

    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <Header />
      </Provider>,
      { wrapper: MemoryRouter }
    );

    fireEvent.click(getByTestId("headerExitBtn"));

    expect(getByTestId("headerExitBtn")).toBeTruthy();
  });
});
