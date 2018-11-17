import React from "react";
import PropTypes from 'prop-types';

import "./Title.css";

const Title = ({ text }) => (
  <div className="titleContainer">
    <label className="titleText">{text}</label>
  </div>
);

Title.propTypes = {
  text: PropTypes.string.isRequired
}

export default Title;
