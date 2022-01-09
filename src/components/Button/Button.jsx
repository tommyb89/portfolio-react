import React from "react";
import "./Button.scss";

const Button = (props) => {
  const { name, path, btnStyle } = props;

  return (
    <a href={path} className={btnStyle}>
      {name}
    </a>
  );
};

export default Button;
