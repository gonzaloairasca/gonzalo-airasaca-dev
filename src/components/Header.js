import React from "react";
import images from "../images";

function Header() {
  return (
    <header className="header">
      <div className="divHeaderIzq">
        <img className="imgHeader" src={images.imgLogo} alt="" />
        <h3 className="nombreHeader">GONZALO AIRASCA DEV</h3>
      </div>
      <nav className="navHeader">
        <ul className="ulHeader">
          <li>¿Como te puedo ayudar?</li>
          <li>Talleres</li>
          <li>Sobre mí</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
