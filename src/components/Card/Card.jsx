import React from "react";
import "./Card.scss";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";

const Card = (props) => {
  const { heading, description, stack, live, code } = props;

  return (
    <article className="project">
      <h4 className="project__heading">{heading}</h4>
      <p className="project__intro">{description}</p>

      <div className="project__links">
        <a className="project__link" href={code}>
          Code <FaCode className="project__icon" />
        </a>
        <a className="project__link" href={live}>
          Live Site <FaExternalLinkAlt className="project__icon" />
        </a>
      </div>

      <div className="project__wrapper">
        {stack.map((x, i) => (
          <div className="project__stack" key={"index" + i}>
            {x}
          </div>
        ))}
      </div>
    </article>
  );
};

export default Card;
