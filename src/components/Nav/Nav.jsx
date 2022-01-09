import React, { useState } from "react";

import "./Nav.scss";

const Nav = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
    console.log("I got clicked");
  };

  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <a className="logo" href="/">
          mysite
        </a>

        <label htmlFor="check" onChange={handleToggle}>
          <input type="checkbox" id="check" className="hamburger" />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      {isActive && (
        <ul className="nav__list">
          <li className="nav__item">
            <a className="nav__link" href="#top">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#work">
              Work
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#experience">
              About
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
