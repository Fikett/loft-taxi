import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import HomePage from "./HomePage";
import configureStore from 'redux-mock-store';


jest.mock("../../pages/Map", () => ({ Map: () => <div>Map</div> }));
jest.mock("../../pages/Profile", () => ({
  Profile: () => <div>Profile</div>,
}));
jest.mock("./HomePage", () => ({ Home: () => <div>Home</div> }));

describe("HomePage", () => {
  it("renders correctly", () => {

    const mockStore = configureStore();
    const store: any = mockStore({
      actionsPanel: {
        actionPanelState: []
      },
      
    });




    // const mockStore = {
    //   getState: () => {},
    //   subscribe: () => {},
    //   dispatch: () => {},
    // };
    const history = createMemoryHistory();
    const { container } = render(
      <Router history={history}>
        <Provider store={store}>
          <HomePage />
        </Provider>
      </Router>
    );
    expect(container.innerHTML).toMatch("Home");
  });

  describe("when clicked on navigation buttons", () => {
    it("opens the corresponding page", () => {
      const mockStore = {
        getState: () => ({
          auth: { authenticated: true },
        }),
        subscribe: () => {},
        dispatch: () => {},
      };
  
      const history = createMemoryHistory();
      const { container, getByText } = render(
        //<Router history={history}>
      
            <HomePage />
        
        //</Router>
      );
      expect(container.innerHTML).toMatch("Home");
      fireEvent.click(getByText("Map"));
      expect(container.innerHTML).toMatch("Map");

      fireEvent.click(getByText("Profile"));
      expect(container.innerHTML).toMatch("Profile");
    });
  });
});
