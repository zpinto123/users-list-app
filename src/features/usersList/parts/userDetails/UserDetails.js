import React from "react";
import PropTypes from "prop-types";

import avatar from "../../../../assets/images/avatar_user.png";

import "./UserDetails.css";

const UserDetails = ({ userInfo: { name, surname, email, employer } }) => (
  <div className="userDetailsContainer">
    <div className="userAvatarContainer">
      <img className="userAvatar" src={avatar} alt={name} />
    </div>
    <div className="userInfoContainer">
      <div className="userInfo">
        <label className="label">Name: </label>
        <label className="value">{name || "--"}</label>
      </div>
      <div className="userInfo">
        <label className="label">Surname: </label>
        <label className="value">{surname || "--"}</label>
      </div>
      <div className="userInfo">
        <label className="label">Email: </label>
        <label className="value">{email || "--"}</label>
      </div>
      <div className="userInfo">
        <label className="label">Employer: </label>
        <label className="value">{employer || "--"}</label>
      </div>
    </div>
  </div>
);

UserDetails.propTypes = {
  userInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    email: PropTypes.string,
    employer: PropTypes.string
  }),
};

export default UserDetails;
