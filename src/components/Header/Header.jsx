import React from "react";
import "./Header.scss";
import Nav from "../Nav/Nav";
import Profile from "../Profile/Profile";

const Header = () => {
  return (
    <header className="header">
      <div className="header__hero">
        <h1 className="header__heading">
          <span className="header__heading--small">Hello, I'm </span>Tomasz
          Bielasik
        </h1>
        <div className="header__description">
          <p className="header__subheading">
            I'm a London based <strong>junior software developer. </strong>I
            have recently completed a 12-week intensive full-stack course with
            <a className="header__link" href="https://nology.io/">
              _nology.
            </a>
            <br />
            <u>I love... </u>
            <br />- coding in <strong> React </strong>
            <br />- creating awesome <strong>UX/UI </strong>design
            <br />- reading about programming and improving my skills
          </p>
        </div>

        <Nav />
        <div className="header__profile">
          <Profile />
        </div>
      </div>
    </header>
  );
};

export default Header;
