import React from "react";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link" href="#work">
            <span className="nav__tracking">01</span>
            <span className="nav__text">PROJECTS</span>
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#skills">
            <span className="nav__tracking">02</span>
            <span className="nav__text">EXPERIENCE</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
