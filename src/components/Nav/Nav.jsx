import React from "react";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav" id="overlay">
      <ol className="nav__list">
        <li className="nav__item">
          <a className="nav__link" href="#top">
            Home.
          </a>
          <span>lorem</span>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#work">
            Work.
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#experience">
            About.
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#contact">
            Contact.
          </a>
        </li>
      </ol>
    </nav>
  );
};

export default Nav;
