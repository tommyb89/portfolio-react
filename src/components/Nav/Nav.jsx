import React from "react";
import "./Nav.scss";

const Nav = () => {
  const hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
  });

  return (
    <nav className="nav">
      <ol className="nav__links">
        <li className="nav__item">
          <a className="nav__link" href="#top">
            Home.
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#work">
            Work.
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#experience">
            Experience.
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#contact">
            Contact.
          </a>
        </li>
      </ol>
      <button className="hamburger">
        <div className="hamburger__bar"></div>
      </button>
    </nav>
  );
};

export default Nav;
