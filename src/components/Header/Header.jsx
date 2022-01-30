import React from "react";
import "./Header.scss";
import Profile from "../Profile/Profile";
import { FaRegArrowAltCircleDown as Arrow } from "react-icons/fa";

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
            have recenlty completed a 12-week intensive full-stack course with
            <a className="header__link" href="https://nology.io/">
              _nology.
            </a>
            I have a passion for
            <strong> UX/UI design</strong> and creating useful apps for the web.
          </p>
        </div>
        <div className="header__profile">
          <Profile />
        </div>

        <div className="header__scroll-to">
          scroll
          <Arrow className="header__scroll-to--arrow" />
        </div>
      </div>
    </header>
  );
};

export default Header;
