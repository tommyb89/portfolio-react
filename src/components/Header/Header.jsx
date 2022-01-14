import React from "react";
import "./Header.scss";
import Button from "./../Button/Button";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__heading">
        <span className="">
          HELLO <br />
          I'M
        </span>
        <br />
        TOM
      </h1>
      <p className="header__subheading">a front-end developer</p>

      <div className="buttons-container">
        <Button name="PROJECTS" path="#works" btnStyle="btn" />
      </div>
    </header>
  );
};

export default Header;
