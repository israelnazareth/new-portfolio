import "./styles.css";

type MobileNavigatorProps = {
  closeMenu: () => void;
};

export default function MobileNavigator(props: MobileNavigatorProps) {
  return (
    <ul className="mobile-links">
      <li onClick={() => props.closeMenu()} className="projects-link">
        <a className="navlink-projects" href="#projects">
          Projetos
        </a>
      </li>
      <li onClick={() => props.closeMenu()} className="certificates-link">
        <a className="navlink-certificates" href="#certificates">
          Certificados
        </a>
      </li>
      <li onClick={() => props.closeMenu()} className="techs-link">
        <a className="navlink-techs" href="#techs">
          Tecnologias
        </a>
      </li>
      <li onClick={() => props.closeMenu()} className="contact-link">
        <a href="#contact" className="navlink-contact">
          Contato
        </a>
      </li>
    </ul>
  );
}
