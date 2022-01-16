import React from "react";
import "./Card.scss";
const Card = (props) => {
  const { name, description, stack, live, code, img } = props;

  console.log(stack);
  return (
    <article className="project">
      <img src={img} alt="" className="project__img" />
      <h2 className="project__title">{name}</h2>
      <p className="project__intro">{description}</p>
      {stack.map((x, i) => (
        <span key={"index" + i}>{x}</span>
      ))}
      <a href={code}>github</a>
      <a href={live}>live site</a>
    </article>
  );
};

export default Card;
