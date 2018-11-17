import React from "react";

import TextBox from "./TextBox";

import renderer from "react-test-renderer";
describe("<TextBox />", () => {
  it("renders correctly", () => {
    const mockCallback = jest.fn();
    const component = renderer
      .create(<TextBox handleChange={mockCallback} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
