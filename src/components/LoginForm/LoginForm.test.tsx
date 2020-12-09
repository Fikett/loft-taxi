import React from "react";
import { fireEvent, render } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("LoginForm", () => {
  // beforeEach(() => { });

  // beforeEach(() => { });

  test("LoginForm renders", () => {
    render(<LoginForm setCurentPage={() => {}} />);
  });

  test("Login btn exists", () => {
    const mock = <LoginForm setCurentPage={() => {}} />;
    const { getByTestId, getByText } = render(mock);

    expect(getByTestId("loginBtn")).toBeTruthy();
  });

  test("Register btn exists", () => {
    const mock = <LoginForm setCurentPage={() => {}} />;
    const { getByTestId, getByText } = render(mock);

    expect(getByText("Зарегистрируйтесь")).toBeTruthy();
  });

  test("name input works", () => {
    const mock = <LoginForm setCurentPage={() => {}} />;
    const { getByTestId, getByText, getByPlaceholderText } = render(mock);

    let input = getByPlaceholderText("Имя пользователя");

    expect(input).toBeTruthy();

    fireEvent.change(input, { target: { value: "23" } });
    expect(input.value).toBe("23");
  });

  test("password input works", () => {
    const mock = <LoginForm setCurentPage={() => {}} />;
    const { getByTestId, getByText, getByPlaceholderText } = render(mock);

    let input = getByPlaceholderText("Пароль");

    expect(input).toBeTruthy();

    fireEvent.change(input, { target: { value: "23" } });
    expect(input.value).toBe("23");
  });
});
