import React from "react";
import renderer from "react-test-renderer";

import UsersListItem from "./UsersListItem";

describe("<UsersListItem />", () => {
  it("renders correctly", () => {
    const props = {
      userInfo: {
        displayName: "José Pinto",
        name: "José Pinto",
        surname: "Pinto",
        email: "super@super.com",
        employer: "JpanOTECH"
      },
      handleClick: jest.fn()
    };

    const component = renderer.create(<UsersListItem {...props} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
