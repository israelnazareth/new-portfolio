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
              <a href={pageURL} target="blank">
                <button className="button-left">Ver aplicação</button>
              </a>
              <a href={githubURL} target="blank">
                <button className="button-right">Ver código</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
