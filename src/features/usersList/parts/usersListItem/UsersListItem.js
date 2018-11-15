import React, { Fragment } from "react";
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

const UserDetails = ({ userInfo: { id, displayName } }) => (
  <div className="userDetailsContainer">
    <label className="userIdText">{`id: ${id}`}</label>
    <label className="userNameText">{`name: ${displayName}`}</label>
  </div>
);

export default UsersListItem;
