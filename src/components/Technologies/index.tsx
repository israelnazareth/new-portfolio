import React from "react";
import useAnimationOnScroll from "../../hooks/useAnimationOnScroll";
import "./styles.css";
import { techs } from "./techs";

export default function Techs() {
  const { refs } = useAnimationOnScroll("fadeIn", techs.length);

  return (
    <div className="techs" id="techs">
      <h1 className="title">Tecnologias</h1>
      <div className="techs-container">
        {React.Children.toArray(
          techs.map(({ firstIcon, secondIcon, name }, index) => (
            <div className="techs-data" ref={refs[index]}>
              {firstIcon}
              {secondIcon}
              <h1 className="techs-name">{name}</h1>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
