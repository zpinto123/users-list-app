import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import messages from "./messages";

import { Title, TextBox } from "../../common";
import UsersListItem from "./parts/usersListItem";

import "./UsersList.css";

class UsersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedUserId: null,
      searchUser: ""
    };
  }

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

  handleUserSearch = ({ target: { value } }) =>
    this.setState({ searchUser: value.toLowerCase(), selectedUserId: null });

  render() {
    const { usersList, error } = this.props;
    const { selectedUserId, searchUser } = this.state;

    return (
      <div className="container">
        <Title text="Users list" />
        {error ? (
          this.renderErrorMessage()
        ) : (
          <div className="usersList">
            <div>
              <div className="searchContainer">
                <TextBox
                  placeholder="Search by surname"
                  handleChange={this.handleUserSearch}
                />
              </div>
              {usersList &&
                usersList
                  .filter(({ surname }) =>
                    surname.toLowerCase().includes(searchUser)
                  )
                  .map(user => (
                    <UsersListItem
                      key={user.id}
                      userInfo={user}
                      isSelected={selectedUserId === user.id}
                      handleClick={this.handleClick(user.id)}
                    />
                  ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

UsersList.propTypes = {
  usersList: PropTypes.array.isRequired,
  error: PropTypes.bool.isRequired
};

export default UsersList;
