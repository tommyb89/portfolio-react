import React from "react";
import Card from "../Card/Card";
import "./Work.scss";
import projects from "../../assets/data/projects";

const Work = () => {
  return (
    <section className="portfolio" id="work">
      <h2 className="portfolio__heading">PROJECTS</h2>
      <section className="portfolio__container">
        {projects.map((project, i) => (
          <Card
            className="portfolio__card"
            key={"index " + i}
            heading={project.name}
            description={project.text}
            img={project.imgSrc}
            code={project.code}
            live={project.liveSite}
            stack={project.stack}
          />
        ))}
      </section>
    </section>
  );
};

export default Work;
