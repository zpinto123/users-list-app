import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";

import { store } from "../../helpers/testsHelper";
import UsersList from "./UsersList";

describe("<UsersList />", () => {
  const list = [
    {
      id: "8sKid80",
      name: "José Pinto",
      surname: "Pinto",
      email: "super@super.com",
      employer: "Google"
    },
    {
      id: "8sKids80",
      name: "John Sila",
      surname: "Sila",
      email: "supera@supera.com",
      employer: "Microsoft"
    }
  ];
  const error = false;

  it("renders UsersList correctly", () => {
    const mockGetUsersList = jest.fn();
    const renderer = new ShallowRenderer();
    const component = renderer.render(
      <UsersList
        store={store}
        getUsersList={mockGetUsersList}
        usersList={list}
        error={error}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
