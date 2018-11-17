import React from "react";
import renderer from "react-test-renderer";

import Title from "./Title";

describe("<Title />", () => {
  it("renders correctly", () => {
    const component = renderer
      .create(<Title text="My awesome title!" />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
