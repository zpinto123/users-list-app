import React from "react";
import PropTypes from 'prop-types';

import './TextBox.css';

const TextBox = ({ placeholder, handleChange, type }) => (
    <input className="textBox" type={type} onChange={handleChange} placeholder={placeholder}/>
);

TextBox.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func.isRequired
}

TextBox.defaultProps = {
  type: "text",
  placeholder: "",
}

export default TextBox;

