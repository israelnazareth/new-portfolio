import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import MobileNavigator from "./MobileNavigator";

import "./styles.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closedIcon = (
    <FiMenu className="menu-icon" onClick={() => setIsOpen(true)} />
  );
  const openedIcon = (
    <MdClose className="menu-icon" onClick={() => setIsOpen(false)} />
  );

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="navbar home" id="home">
      <div className="navbar-content">
        <a href="/" className="name">
          Israel Nazareth
        </a>
        <div className="navlinks">
          <a className="navlink-projects" href="#projects">
            Projetos
          </a>
          <a className="navlink-certificates" href="#certificates">
            Certificados
          </a>
          <a className="navlink-techs" href="#techs">
            Tecnologias
          </a>
        </div>
        <a href="#contact" aria-label="Entre em contato">
          <button className="contact-button">Contato</button>
        </a>
        {isOpen && <MobileNavigator closeMenu={closeMenu} />}
        {isOpen ? openedIcon : closedIcon}
      </div>
    </div>
  );
}
