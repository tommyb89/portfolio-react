import React from "react";
import "./Header.scss";
import Button from "./../Button/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// import { faYoutube } from "@fortawesome/free-brands-svg-icons";

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

      <Button name="See my work" path="/works" btnStyle="btn" />
    </header>
  );
};

export default Header;
