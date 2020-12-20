import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Link, MemoryRouter, Router } from "react-router-dom";
import { Provider } from "react-redux";
import HomePage from "./HomePage";
import configureStore from "redux-mock-store";

jest.mock("../../pages/Map", () => ({
  __esModule: true,
  default: () => <div>Map</div>,
}));

jest.mock("../../pages/Profile", () => ({
  Profile: () => <div>Profile</div>,
}));
//jest.mock("./HomePage", () => ({ Home: () => <div>Home</div> }));

describe("HomePage", () => {
  it("renders correctly", () => {
    const mockStore = configureStore();
    const store: any = mockStore({
      auth: { authenticated: true },
    });

    // const mockStore = {
    //   getState: () => {},
    //   subscribe: () => {},
    //   dispatch: () => {},
    // };
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
      { wrapper: MemoryRouter }
    );

    // const { container } = render(
    //   <MemoryRouter  history={history}>
    //     <Provider store={store}>
    //       <HomePage />
    //     </Provider>
    //   </MemoryRouter >
    // );
    //expect(aaa.container.innerHTML).toMatch("Home");
  });

  describe("when clicked on navigation buttons", () => {
    it("opens the corresponding page", () => {
      const mockStore = {
        getState: () => ({
          auth: { authenticated: true, loginData: { login: "", password: "" } },
        }),
        subscribe: () => {},
        dispatch: () => {},
      };
      const history = createMemoryHistory();
      const { container, getByText } = render(
        <Router history={history}>
          <Provider store={mockStore}>
            <HomePage />
          </Provider>
        </Router>
      );

      //expect(container.innerHTML).toMatch("Home content");
      fireEvent.click(getByText("Map"));
      expect(container.innerHTML).toMatch("Map");
      //fireEvent.click(getByText("Profile"));
      //expect(container.innerHTML).toMatch("Profile content");
    });
  });

  // describe("when clicked on navigation buttons", () => {
  //   it("opens the corresponding page", () => {
  //     const mockStore = configureStore();
  //     const store: any = mockStore({
  //       auth: { authenticated: true },
  //     });

  //     const history = createMemoryHistory();
  //     const { container, getByText } = render(
  //       <Provider store={store}>
  //         <HomePage />
  //       </Provider>,
  //       { wrapper: MemoryRouter }
  //     );
  //     expect(container.innerHTML).toMatch("Home");
  //     fireEvent.click(getByText("Map"));
  //     expect(container.innerHTML).toMatch("Map");

  //     fireEvent.click(getByText("Profile"));
  //     expect(container.innerHTML).toMatch("Profile");
  //   });
  // });
});
