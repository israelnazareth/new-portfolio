import React, { useEffect, useState } from "react";
import useAnimationOnScroll from "@/hooks/useAnimationOnScroll";
import "./styles.css";
import { getProjectsDataFromSheet } from "@/services";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const { refs } = useAnimationOnScroll("fadeIn", projects.length);

  const redirectTo = (url: string) => window.open(url, "_blank");

  const getDataProjects = async () => {
    const data = await getProjectsDataFromSheet();
    setProjects(data);
    setLoading(false);
  };

  useEffect(() => {
    getDataProjects();
  }, []);

  return (
    <div className="projects" id="projects">
      <h1 className="title">Projetos</h1>
      {loading && (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <div className="projects-container">
            {[...Array(4)].map((_, index) => (
              <div className="project" key={index} ref={refs[index]}>
                <div className="project-content">
                  <Skeleton height={200} />
                  <Skeleton height={40} width={200} style={{ marginTop: '1rem' }} />
                  <Skeleton count={3} style={{ marginTop: '1rem' }} />
                </div>
                <div className="buttons-container">
                  <Skeleton containerClassName="skeleton-button" height={40} />
                  <Skeleton containerClassName="skeleton-button" height={40} />
                </div>
              </div>
            ))}
          </div>
        </SkeletonTheme>
      )}
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
