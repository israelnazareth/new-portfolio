import projectsData from "./projectsData.json";
import "./styles.css";

export default function Projects() {
  return (
    <div data-aos="fade-in" className="projects" id="projects">
      <h1 className="title">Projetos</h1>
      <div className="projects-container">
        {projectsData.map(({ img, title, description, pageURL, githubURL }) => (
          <div data-aos="fade-in" className="project" key={title}>
            <div className="project-content">
              <a href={pageURL} target="blank">
                <img src={img} alt={title} width="100%" height="auto" />
              </a>
              <h1 className="project-title">{title}</h1>
              <p className="project-description">{description}</p>
            </div>
            <div className="buttons-container">
              <button className="button-left">
                <a href={pageURL} target="blank">
                  Ver aplicação
                </a>
              </button>
              <button className="button-right">
                <a href={githubURL} target="blank">
                  Ver código
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
