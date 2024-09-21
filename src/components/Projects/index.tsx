import React from "react";
import useAnimationOnScroll from "../../hooks/useAnimationOnScroll";
import { projects } from "./projects";
import "./styles.css";

export default function Projects() {
  const { refs } = useAnimationOnScroll("fadeIn", projects.length);

  const redirectTo = (url: string) => window.open(url, "_blank");

  return (
    <div className="projects" id="projects">
      <h1 className="title">Projetos</h1>
      <div className="projects-container">
        {React.Children.toArray(
          projects.map(
            ({ img, title, description, deployUrl, githubURL }, index) => (
              <div className="project" key={title} ref={refs[index]}>
                <div className="project-content">
                  <a href={deployUrl || githubURL} target="blank">
                    <img src={img} alt={title} width="100%" height="auto" />
                  </a>
                  <h1 className="project-title">{title}</h1>
                  <p className="project-description">{description}</p>
                </div>
                <div className="buttons-container">
                  <button
                    onClick={() => redirectTo(deployUrl)}
                    disabled={!deployUrl}
                    title={!deployUrl ? "Deploy em desenvolvimento" : ""}
                  >
                    Ver aplicação
                  </button>
                  <button onClick={() => redirectTo(githubURL)}>
                    Ver código
                  </button>
                </div>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
}
