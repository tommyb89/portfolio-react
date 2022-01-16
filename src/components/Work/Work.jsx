import React from "react";
import Card from "../Card/Card";
import "./Work.scss";
import projects from "../../assets/data/projects";

const Work = () => {
  return (
    <section className="portfolio" id="works">
      <h2 className="portfolio__heading">My projects</h2>
      <section className="portfolio__container">
        {projects.map((project, i) => (
          <Card
            key={"index " + i}
            name={project.name}
            heading={project.heading}
            description={project.description}
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
