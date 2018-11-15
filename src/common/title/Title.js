import React from "react";
import "./Title.css";

const Title = ({ text }) => (
  <div className="titleContainer">
    <label className="titleText">{text}</label>
  </div>
);

export default Title;
