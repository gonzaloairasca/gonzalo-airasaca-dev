import React from "react";
import { BsWhatsapp, BsInstagram, BsFacebook } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <ul className="redes">
        <li>
          <BsFacebook />
        </li>
        <li>
          <BsInstagram />
        </li>
        <li>
          <BsWhatsapp />
        </li>
      </ul>
      <p>Todos los derechos reservados a Gonzalo Airasca Dev 2022</p>
    </footer>
  );
}

export default Footer;
