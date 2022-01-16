import React, { useState } from "react";
import Hamburger from "../Hamburger/Hamburger";

import "./Nav.scss";

const Nav = () => {
  const [isActive, setActive] = useState(true);

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

        <Hamburger onChange={handleToggle} />
      </div>

      <ul className={isActive ? "nav__list" : "nav__list show"}>
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
    </nav>
  );
};

export default Nav;
