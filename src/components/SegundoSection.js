import React from "react";
import { TiMessages } from "react-icons/ti";
import { GiThink } from "react-icons/gi";
import { BsFileEarmarkCode } from "react-icons/bs";
import { FaFlagCheckered } from "react-icons/fa";

function SegundoSection() {
  return (
    <section className="segundoSection">
      <h1 className="tituloSegundoSection">¿Cómo puedo ayudarte?</h1>
      <div className="contenedorAyuda">
        <div className="contenedorIzqSegundoSection">
          <div className="itemsComoTeAyudamos">
            <TiMessages className="icono" />
            <h3 className="espacio">Nos comunicamos</h3>
            <p className="">
              Conversamos sobre el tipo de web que estas buscando y cuales son
              tus necesidades.
            </p>
          </div>
          <div className="itemsComoTeAyudamos">
            <GiThink className="icono" />
            <h3 className="espacio">Evaluación</h3>
            <p className="">
              Pensamos y decidimos cuál de nuestras soluciones es la mas
              conveniente para vos.
            </p>
          </div>
        </div>
        <div className="contenedorDerechaSegundoSection">
          <div className="itemsComoTeAyudamos">
            <BsFileEarmarkCode className="icono" />
            <h3 className="espacio">Diseño y Desarrollo</h3>
            <p className="">
              Llevamos a cabo la idea y la transformamos en un sitio web.
            </p>
          </div>
          <div className="itemsComoTeAyudamos">
            <FaFlagCheckered className="icono" />
            <h3 className="espacio">Finalizacion y publicación</h3>
            <p className="">
              Después de algunas revisiones, publicamos el sitio web y ¡Listo!
              ¡Ya estas online!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SegundoSection;
