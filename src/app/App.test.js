import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";

import { store } from "../helpers/testsHelper";
import App from "./App";

describe("<App />", () => {
  it("renders App correctly", () => {
    const renderer = new ShallowRenderer();
    const component = renderer.render(<App store={store} />);
    expect(component).toMatchSnapshot();
  });
});
