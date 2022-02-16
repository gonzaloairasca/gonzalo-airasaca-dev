import React from "react";
import images from "../images";

function Portfolio() {
  return (
    <div className="contenedorPortfolio">
      <h2>Proyectos</h2>
      <div className="portfolio">
        <div className="cardPortfolio  effect1">
          <h3 className="tituloCard">Base de datos</h3>
        </div>
        <div className="cardPortfolio effect1">
          <h3 className="tituloCard">Repositorio de canciones</h3>
        </div>
        <div className="cardPortfolio effect1">
          <h3 className="tituloCard">Dúo Vaivén</h3>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
