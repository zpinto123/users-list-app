import React, { PureComponent } from "react";

const TextBox = ({ handleChange }) => (
  <label>
    Name:
    <input type="text" onChange={handleChange} />
  </label>
);

export default TextBox;
