
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import RegistrationForm from "./RegistrationForm";

describe("RegistrationForm", () =>
{
    // beforeEach(() => { });

    // beforeEach(() => { });

    test("RegistrationForm renders", () =>
    {
        render(
            <RegistrationForm setCurentPage={() => { }} />
          );
    });

    test("Login btn exists", () =>
    {
        const mock = (<RegistrationForm setCurentPage={() => { }} />);
        const { getByTestId, getByText } = render(mock);

        expect(getByText("Войти")).toBeTruthy();
    });

    test("Register btn exists", () =>
    {
        const mock = (<RegistrationForm setCurentPage={() => { }} />);
        const { getByTestId, getByText } = render(mock);

        expect(getByText("Зарегестрироваться")).toBeTruthy();
    });
});
