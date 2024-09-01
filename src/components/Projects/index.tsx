import projectsData from "./projectsData.json";
import "./styles.css";

export default function Projects() {
  const redirectTo = (url: string) => window.open(url, "_blank");

  return (
    <div data-aos="fade-in" className="projects" id="projects">
      <h1 className="title">Projetos</h1>
      <div className="projects-container">
        {projectsData.map(
          ({ img, title, description, deployUrl, githubURL }) => (
            <div data-aos="fade-in" className="project" key={title}>
              <div className="project-content">
                <a href={deployUrl} target="blank">
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
        )}
      </div>
    </div>
  );
}
