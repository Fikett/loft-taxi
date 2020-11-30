import React from "react";
import { fireEvent, render } from "@testing-library/react";
import RegistrationForm from "./RegistrationForm";

describe("RegistrationForm", () => {
  // beforeEach(() => { });

  // beforeEach(() => { });

  test("RegistrationForm renders", () => {
    render(<RegistrationForm setCurentPage={() => {}} />);
  });

  test("Login btn exists", () => {
    const mock = <RegistrationForm setCurentPage={() => {}} />;
    const { getByTestId, getByText } = render(mock);

    expect(getByText("Войти")).toBeTruthy();
  });

  test("Register btn exists", () => {
    const mock = <RegistrationForm setCurentPage={() => {}} />;
    const { getByTestId, getByText } = render(mock);

    expect(getByText("Зарегестрироваться")).toBeTruthy();
  });

  test("email input works", () => {
    const mock = <RegistrationForm setCurentPage={() => {}} />;
    const { getByTestId, getByText, getByPlaceholderText } = render(mock);

    let input = getByPlaceholderText("Адрес электронной почты");

    expect(input).toBeTruthy();

    fireEvent.change(input, { target: { value: "23" } });
    expect(input.value).toBe("23");
  });

  test("name input works", () => {
    const mock = <RegistrationForm setCurentPage={() => {}} />;
    const { getByTestId, getByText, getByPlaceholderText } = render(mock);

    let input = getByPlaceholderText("Имя");

    expect(input).toBeTruthy();

    fireEvent.change(input, { target: { value: "23" } });
    expect(input.value).toBe("23");
  });

  test("surname input works", () => {
    const mock = <RegistrationForm setCurentPage={() => {}} />;
    const { getByTestId, getByText, getByPlaceholderText } = render(mock);

    let input = getByPlaceholderText("Фамилия");

    expect(input).toBeTruthy();

    fireEvent.change(input, { target: { value: "23" } });
    expect(input.value).toBe("23");

  });

  test("password input works", () => {
    const mock = <RegistrationForm setCurentPage={() => {}} />;
    const { getByTestId, getByText, getByPlaceholderText } = render(mock);

    let input = getByPlaceholderText("Пароль");

    expect(input).toBeTruthy();

    fireEvent.change(input, { target: { value: "23" } });
    expect(input.value).toBe("23");
  });
});
