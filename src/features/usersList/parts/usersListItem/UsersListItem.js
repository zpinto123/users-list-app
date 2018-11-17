import React, { Fragment } from "react";
import PropTypes from "prop-types";

import UserDetails from "../userDetails";

import "./UsersListItem.css";

const UsersListItem = ({ userInfo, isSelected, handleClick }) => (
  <Fragment>
    <div
      className={`row ${isSelected ? "selected" : ""}`}
      onClick={handleClick}
    >
      <label className="userDisplayName">{userInfo.displayName}</label>
    </div>
    {isSelected && <UserDetails userInfo={userInfo} />}
  </Fragment>
);

UsersListItem.propTypes = {
  userInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    email: PropTypes.string,
    employer: PropTypes.string
  }),
  handleClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool
};

UsersListItem.defaultProps = {
  isSelected: false
};

export default UsersListItem;
