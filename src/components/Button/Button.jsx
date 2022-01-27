import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

const Button = (props) => {
  const { name, path, btnStyle } = props;

  return (
    <Link to={path} className={btnStyle}>
      {name}
    </Link>
  );
};

export default Button;
