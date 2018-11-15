import React, { PureComponent } from "react";

import UsersListItem from "./parts/usersListItem";

class UsersList extends PureComponent {
  componentWillMount = () => this.props.getUsersList();

  renderErrorMessage = () => (
    <div>
      <span>ERROR</span>
    </div>
  );

  render() {
    const { usersList, error } = this.props;
    if (error) this.renderErrorMessage();
    return (
      <div className="container">
        {usersList.map(item => (
          <UsersListItem key={item.id} />
        ))}
      </div>
    );
  }
}

export default UsersList;
