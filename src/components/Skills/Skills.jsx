import React from "react";
import "./Skills.scss";

const Experience = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="skills__heading">Experience</h2>
      <div className="skills__list">
        <span className="skills__item">React</span>
        <span className="skills__item">JavaScript</span>
        <span className="skills__item">CSS3/SASS</span>
        <span className="skills__item">HTML5</span>
        <span className="skills__item">Figma</span>
        <span className="skills__item">TypeScript</span>
        <span className="skills__item">TDD</span>
        <span className="skills__item">NPM</span>
        <span className="skills__item">Node.js</span>
        <span className="skills__item">Express</span>
        <span className="skills__item">Jest</span>
        <span className="skills__item">Cypress</span>
      </div>
    </section>
  );
};

export default Experience;
