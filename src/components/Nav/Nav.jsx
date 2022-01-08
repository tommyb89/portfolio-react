import React from "react";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav class="nav">
      <ol class="nav__links">
        <li class="nav__item">
          <a class="nav__link" href="#top">
            Home.
          </a>
        </li>
        <li class="nav__item">
          <a class="nav__link" href="#work">
            Work.
          </a>
        </li>
        <li class="nav__item">
          <a class="nav__link" href="#experience">
            Experience.
          </a>
        </li>
        <li class="nav__item">
          <a class="nav__link" href="#contact">
            Contact.
          </a>
        </li>
      </ol>
      <button class="hamburger">
        <div class="hamburger__bar"></div>
      </button>
    </nav>
  );
};

export default Nav;
