import React, { useState } from "react";
import "./Header.scss";

const Header = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <header>
      <a className="logo" href="/">
        mysite
      </a>
      <button
        className={isActive ? "hamburger" : "hamburger is-active"}
        onClick={handleToggle}
      >
        <div className="hamburger__bar"></div>
      </button>
    </header>
  );
};

export default Header;
