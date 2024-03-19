import * as IconFA from "react-icons/fa";
import * as IconSI from "react-icons/si";
import "./styles.css";

export default function Techs() {
  return (
    <div className="techs" id="techs">
      <h1 className="title">Tecnologias</h1>
      <div data-aos="fade-in" className="techs-container">
        <div className="techs-data">
          <IconFA.FaReact />
          <IconSI.SiRedux />
          <h1 className="techs-name">React e Redux</h1>
        </div>
        <div className="techs-data">
          <IconFA.FaHtml5 />
          <IconFA.FaCss3Alt />
          <h1 className="techs-name">HTML5 e CSS3</h1>
        </div>
        <div className="techs-data">
          <IconSI.SiJavascript className="logoJs" />
          <IconSI.SiTypescript />
          <h1 className="techs-name">Javascript e Typescript</h1>
        </div>
        <div className="techs-data">
          <IconFA.FaGitAlt />
          <IconFA.FaGithub />
          <h1 className="techs-name">Git e GitHub</h1>
        </div>
        <div className="techs-data">
          <IconFA.FaNpm />
          <IconFA.FaNodeJs />
          <h1 className="techs-name">Npm e Node.js</h1>
        </div>
        <div className="techs-data">
          <IconSI.SiMysql />
          <IconSI.SiMongodb />
          <h1 className="techs-name">MySQL e MongoDB</h1>
        </div>
      </div>
    </div>
  );
}
