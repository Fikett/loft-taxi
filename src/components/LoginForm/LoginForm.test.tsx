import React from "react";
import { fireEvent, render } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { Provider } from "react-redux";
import { authSaga, fetchAuthFlow, fetchAuthWatcher } from "modules/auth/sagas";
import api, { fetchAuth } from "modules/api";
import reducer from "modules/auth";
import configureStore from "redux-mock-store";
import { IFetchRegisterRequest, ILoginData } from "@modules-auth";
import { runSaga } from "redux-saga";

describe("authSaga", () => {
  it("fetchAuthFlow", async () => {
    const fakeResponse = { success: true, token: "aaa", error: "" };
    const requestAuthors = jest
      .spyOn(api, "fetchAuth")
      .mockImplementation(() => Promise.resolve(fakeResponse));

    const dispatched = [];
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchAuthFlow,
      { payload: { email: "", password: "" } }
    );

    expect(requestAuthors).toHaveBeenCalledTimes(1);

    expect(dispatched).toEqual([
      {
        payload: true,
        type: "fetchAuthSuccess",
      },
      {
        payload: "aaa",
        type: "saveToken",
      },
    ]);

    requestAuthors.mockClear();
  });
});

describe("authReducer", () => {
  const initial = {
    authenticated: false,
    token: "",
    loginData: {
      login: "",
      password: "",
    },
    registerData: {
      email: "",
      name: "",
      password: "",
      surname: "",
    },
    paymentData: {},
  };

  it("authenticated", () => {
    const action = {
      type: "fetchAuthSuccess",
    };

    expect(reducer(initial, action)).toEqual({
      ...initial,
      authenticated: true,
    });
  });

  it("token", () => {
    const action = {
      type: "saveToken",
      payload: "test",
    };

    expect(reducer(initial, action)).toEqual({
      ...initial,
      token: "test",
    });
  });

  it("loginData", () => {
    let a: ILoginData = {
      login: "a",
      password: "b",
    };

    const action = {
      type: "setLoginData",
      payload: a,
    };

    expect(reducer(initial, action)).toEqual({
      ...initial,
      loginData: {
        login: "a",
        password: "b",
      },
    });
  });

  it("registerData", () => {
    let a: IFetchRegisterRequest = {
      email: "a",
      password: "b",
      name: "c",
      surname: "d",
    };

    const action = {
      type: "setRegisterData",
      payload: a,
    };

    expect(reducer(initial, action)).toEqual({
      ...initial,
      registerData: {
        email: "a",
        name: "c",
        password: "b",
        surname: "d",
      },
    });
  });
});

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
