
import React from "react";

import { fireEvent, render } from "@testing-library/react";
import Header from "./Header";
import { shallow } from "enzyme";

describe("Header", () =>
{
  // beforeEach(() => { });

  // beforeEach(() => { });

  test("Login btn exists", () =>
  {
    //const wrapper = shallow(<Header setCurentPage={() => { console.log()}}/>);
    const mock = (<Header setCurentPage={() => { }} />);
    const { getByTestId, getByText } = render(mock);

    fireEvent.click(getByTestId("headerLoginBtn"));

    expect(getByTestId("headerLoginBtn")).toBeTruthy();
  });
});
