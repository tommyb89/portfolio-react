import React from "react";
import Skills from "../components/Skills/Skills";
import Work from "../components/Work/Work";
import "./Main.scss";

const Main = () => {
  return (
    <main className="main" id="main">
      <Work />
      <Skills />
    </main>
  );
};

export default Main;
