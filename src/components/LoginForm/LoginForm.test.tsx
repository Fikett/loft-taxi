
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("LoginForm", () =>
{
    // beforeEach(() => { });

    // beforeEach(() => { });

    test("LoginForm renders", () =>
    {
        render(
            <LoginForm setCurentPage={() => { }} />
          );
    });
  
    
    test("Login btn exists", () =>
    {
        const mock = (<LoginForm setCurentPage={() => { }} />);
        const { getByTestId, getByText } = render(mock);

        expect(getByTestId("loginBtn")).toBeTruthy();
    });

    test("Register btn exists", () =>
    {
        const mock = (<LoginForm setCurentPage={() => { }} />);
        const { getByTestId, getByText } = render(mock);

        expect(getByText("Зарегистрируйтесь")).toBeTruthy();
    });
});
