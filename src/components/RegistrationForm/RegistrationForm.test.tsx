import React from "react";
import { fireEvent, render } from "@testing-library/react";
import RegistrationForm from "./RegistrationForm";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

describe("RegistrationForm", () => {
  // beforeEach(() => { });

  // beforeEach(() => { });

  test("RegistrationForm renders", () => {
    const mockStore = {
      getState: () => ({
        auth: {
          authenticated: true,
          loginData: { login: "", password: "" },
          registerData: {
            email: "",
            name: "",
            password: "",
            surname: "",
          },
        },
      }),
      subscribe: () => {},
      dispatch: () => {},
    };

    render(
      <Provider store={mockStore}>
        <RegistrationForm />
      </Provider>,
      { wrapper: MemoryRouter }
    );
  });

  test("Login btn exists", () => {
    const mockStore = {
      getState: () => ({
        auth: {
          authenticated: true,
          loginData: { login: "", password: "" },
          registerData: {
            email: "",
            name: "",
            password: "",
            surname: "",
          },
        },
      }),
      subscribe: () => {},
      dispatch: () => {},
    };

    const { getByTestId, getByText } = render(
      <Provider store={mockStore}>
        <RegistrationForm />
      </Provider>,
      { wrapper: MemoryRouter }
    );

    expect(getByText("Войти")).toBeTruthy();
  });

  test("Register btn exists", () => {
    const mockStore = {
      getState: () => ({
        auth: {
          authenticated: true,
          loginData: { login: "", password: "" },
          registerData: {
            email: "",
            name: "",
            password: "",
            surname: "",
          },
        },
      }),
      subscribe: () => {},
      dispatch: () => {},
    };
    const { getByTestId, getByText } = render(
      <Provider store={mockStore}>
        <RegistrationForm />
      </Provider>,
      { wrapper: MemoryRouter }
    );

    expect(getByTestId("registerBtn")).toBeTruthy();
  });

  test("email input works", () => {
    const mockStore = {
      getState: () => ({
        auth: {
          authenticated: true,
          loginData: { login: "", password: "" },
          registerData: {
            email: "",
            name: "",
            password: "",
            surname: "",
          },
        },
      }),
      subscribe: () => {},
      dispatch: () => {},
    };
    const { getByTestId, getByText, getByPlaceholderText } = render(
      <Provider store={mockStore}>
        <RegistrationForm />
      </Provider>,
      { wrapper: MemoryRouter }
    );

    let input = getByPlaceholderText("Адрес электронной почты");

    expect(input).toBeTruthy();

    fireEvent.change(input, { target: { value: "23" } });
    expect(input.value).toBe("23");
  });

  test("name input works", () => {
    const mockStore = {
      getState: () => ({
        auth: {
          authenticated: true,
          loginData: { login: "", password: "" },
          registerData: {
            email: "",
            name: "",
            password: "",
            surname: "",
          },
        },
      }),
      subscribe: () => {},
      dispatch: () => {},
    };
    const { getByTestId, getByText, getByPlaceholderText } = render(
      <Provider store={mockStore}>
        <RegistrationForm />
      </Provider>,
      { wrapper: MemoryRouter }
    );

    let input = getByPlaceholderText("Имя");

    expect(input).toBeTruthy();

    fireEvent.change(input, { target: { value: "23" } });
    expect(input.value).toBe("23");
  });

  test("surname input works", () => {
    const mockStore = {
      getState: () => ({
        auth: {
          authenticated: true,
          loginData: { login: "", password: "" },
          registerData: {
            email: "",
            name: "",
            password: "",
            surname: "",
          },
        },
      }),
      subscribe: () => {},
      dispatch: () => {},
    };
    const { getByTestId, getByText, getByPlaceholderText } = render(
      <Provider store={mockStore}>
        <RegistrationForm />
      </Provider>,
      { wrapper: MemoryRouter }
    );

    let input = getByPlaceholderText("Фамилия");

    expect(input).toBeTruthy();

    fireEvent.change(input, { target: { value: "23" } });
    expect(input.value).toBe("23");
  });

  test("password input works", () => {
    const mockStore = {
      getState: () => ({
        auth: {
          authenticated: true,
          loginData: { login: "", password: "" },
          registerData: {
            email: "",
            name: "",
            password: "",
            surname: "",
          },
        },
      }),
      subscribe: () => {},
      dispatch: () => {},
    };
    const { getByTestId, getByText, getByPlaceholderText } = render(
      <Provider store={mockStore}>
        <RegistrationForm />
      </Provider>,
      { wrapper: MemoryRouter }
    );

    let input = getByPlaceholderText("Пароль");

    expect(input).toBeTruthy();

    fireEvent.change(input, { target: { value: "23" } });
    expect(input.value).toBe("23");
  });
});
