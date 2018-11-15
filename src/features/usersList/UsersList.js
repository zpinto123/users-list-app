import React, { PureComponent } from "react";
import messages from "./messages";

import { Title } from "../../common";
import UsersListItem from "./parts/usersListItem";

import "./UsersList.css";

class UsersList extends PureComponent {
  state = {
    selectedUserId: null
  };

  componentWillMount = () => this.props.getUsersList();

  renderErrorMessage = () => (
    <div>
      <span>{messages.errors.userListFetchFail()}</span>
    </div>
  );

  handleClick = id => () => {
    const { selectedUserId } = this.state;
    this.setState({ selectedUserId: selectedUserId === id ? null : id });
  };

  render() {
    const { usersList, error } = this.props;
    const { selectedUserId } = this.state;

    return (
      <div className="container">
        <Title text="Users list" />
        {!error ? 
        <div className="usersList">
          {usersList &&
            usersList.map(user => (
              <UsersListItem
                key={user.id}
                userInfo={user}
                isSelected={selectedUserId === user.id}
                handleClick={this.handleClick(user.id)}
              />
            ))}
        </div>
        : this.renderErrorMessage()}
      </div>
    );
  }
}

export default UsersList;
