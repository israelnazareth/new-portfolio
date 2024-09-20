import * as IconFA from "react-icons/fa";
import * as IconSI from "react-icons/si";
import "./styles.css";

export default function Techs() {
  return (
    <div className="techs" id="techs">
      <h1 className="title">Tecnologias</h1>
      <div className="techs-container">
        <div className="techs-data" data-aos="fade-in">
          <IconFA.FaReact color="#5ED3F3" />
          <IconSI.SiRedux color="#7A4FBE" />
          <h1 className="techs-name">React e Redux</h1>
        </div>
        <div className="techs-data" data-aos="fade-in">
          <IconSI.SiJavascript className="logoJs" color="#F7E028" />
          <IconSI.SiTypescript color="#167ECF" />
          <h1 className="techs-name">Javascript e Typescript</h1>
        </div>
        <div className="techs-data" data-aos="fade-in">
          <IconFA.FaHtml5 color="#F26A2F" />
          <IconFA.FaCss3Alt color="#3F9DD7" />
          <h1 className="techs-name">HTML5 e CSS3</h1>
        </div>
        <div className="techs-data" data-aos="fade-in">
          <IconFA.FaGitAlt color="#F15539" />
          <IconFA.FaGithub />
          <h1 className="techs-name">Git e GitHub</h1>
        </div>
        <div className="techs-data" data-aos="fade-in">
          <IconFA.FaNpm color="#CC3F3D" />
          <IconFA.FaNodeJs color="#689F63" />
          <h1 className="techs-name">Npm e Node.js</h1>
        </div>
        <div className="techs-data" data-aos="fade-in">
          <IconSI.SiMysql color="#05718A" />
          <IconSI.SiMongodb color="#54AD47" />
          <h1 className="techs-name">MySQL e MongoDB</h1>
        </div>
      </div>
    </div>
  );
}
