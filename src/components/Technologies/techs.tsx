import * as IconFA from "react-icons/fa";
import * as IconSI from "react-icons/si";

type Techs = Array<{
  firstIcon: JSX.Element;
  secondIcon: JSX.Element;
  name: string;
}>;

export const techs: Techs = [
  {
    firstIcon: <IconFA.FaReact color="#5ED3F3" />,
    secondIcon: <IconSI.SiRedux color="#7A4FBE" />,
    name: "React e Redux",
  },
  {
    firstIcon: <IconSI.SiJavascript className="logoJs" color="#F7E028" />,
    secondIcon: <IconSI.SiTypescript color="#167ECF" />,
    name: "Javascript e Typescript",
  },
  {
    firstIcon: <IconFA.FaHtml5 color="#F26A2F" />,
    secondIcon: <IconFA.FaCss3Alt color="#3F9DD7" />,
    name: "HTML5 e CSS3",
  },
  {
    firstIcon: <IconFA.FaGitAlt color="#F15539" />,
    secondIcon: <IconFA.FaGithub />,
    name: "Git e GitHub",
  },
  {
    firstIcon: <IconFA.FaNpm color="#CC3F3D" />,
    secondIcon: <IconFA.FaNodeJs color="#689F63" />,
    name: "Npm e Node.js",
  },
  {
    firstIcon: <IconSI.SiMysql color="#05718A" />,
    secondIcon: <IconSI.SiMongodb color="#54AD47" />,
    name: "MySQL e MongoDB",
  },
];
