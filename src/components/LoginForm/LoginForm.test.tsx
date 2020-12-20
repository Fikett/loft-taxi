import React from "react";
import { fireEvent, render } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { Provider } from "react-redux";

describe("LoginForm", () => {
  // beforeEach(() => { });

  // beforeEach(() => { });

  test("LoginForm renders", () => {
    const mockStore = {
      getState: () => ({
        auth: { authenticated: true, loginData: { login: "", password: "" } },
      }),
      subscribe: () => {},
      dispatch: () => {},
    };

    render(
      <Provider store={mockStore}>
        <LoginForm />
      </Provider>
    );
  });

  test("Login btn exists", () => {
    const mockStore = {
      getState: () => ({
        auth: { authenticated: true, loginData: { login: "", password: "" } },
      }),
      subscribe: () => {},
      dispatch: () => {},
    };
    const mock = (
      <Provider store={mockStore}>
        <LoginForm />
      </Provider>
    );
    const { getByTestId, getByText } = render(mock);

    expect(getByTestId("loginBtn")).toBeTruthy();
  });

  test("Register btn exists", () => {
    const mockStore = {
      getState: () => ({
        auth: { authenticated: true, loginData: { login: "", password: "" } },
      }),
      subscribe: () => {},
      dispatch: () => {},
    };
    const mock = (
      <Provider store={mockStore}>
        <LoginForm />
      </Provider>
    );
    const { getByTestId, getByText } = render(mock);

    expect(getByText("Зарегистрируйтесь")).toBeTruthy();
  });

  test("name input works", () => {
    const mockStore = {
      getState: () => ({
        auth: { authenticated: true, loginData: { login: "2", password: "" } },
      }),
      subscribe: () => {},
      dispatch: () => {},
    };
    const mock = (
      <Provider store={mockStore}>
        <LoginForm />
      </Provider>
    );
    const { getByTestId, getByText, getByPlaceholderText } = render(mock);

    let input = getByPlaceholderText("Имя пользователя");

    expect(input).toBeTruthy();

    //fireEvent.change(input, { target: { value: "23" } });
    expect(input.value).toBe("2");
  });

  test("password input works", () => {
    const mockStore = {
      getState: () => ({
        auth: { authenticated: true, loginData: { login: "", password: "33" } },
      }),
      subscribe: () => {},
      dispatch: () => {},
    };
    const mock = (
      <Provider store={mockStore}>
        <LoginForm />
      </Provider>
    );
    const { getByTestId, getByText, getByPlaceholderText } = render(mock);

    let input = getByPlaceholderText("Пароль");

    expect(input).toBeTruthy();

    //fireEvent.change(input, { target: { value: "23" } });
    expect(input.value).toBe("33");
  });
});
