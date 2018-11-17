import React from "react";
import renderer from "react-test-renderer";

import UserDetails from "./UserDetails";
describe("<UserDetails />", () => {
  it("renders correctly", () => {
    const props = {
      userInfo: {
        displayName: "José Pinto",
        name: "José Pinto",
        surname: "Pinto",
        email: "super@super.com",
        employer: "JpanOTECH"
      }
    };

    const component = renderer.create(<UserDetails {...props} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
