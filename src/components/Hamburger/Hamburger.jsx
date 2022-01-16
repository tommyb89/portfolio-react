import React from "react";
import "./Hamburger.scss";

const Hamburger = (props) => {
  const { onChange } = props;
  return (
    <label htmlFor="check" onChange={onChange}>
      <input type="checkbox" id="check" className="hamburger" />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
};

export default Hamburger;
