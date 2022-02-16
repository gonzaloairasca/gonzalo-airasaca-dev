import React from "react";

function Contacto() {
  return (
    // <div className="contenedorContacto">
    //   <h1>¿Querés hacer una consulta? Adelante!</h1>
    //   <form className="formContacto" action="submit">
    //     <label htmlFor="">Nombre</label>
    //     <input type="text" placeholder="Poné aqui tu nombre" />
    //     <label htmlFor="">Email:</label>
    //     <input type="email" placeholder="Poné aquí tu email" />
    //     <label htmlFor="">Mensaje:</label>
    //     <textarea name="mensaje" id="" cols="30" rows="10" />
    //   </form>
    // </div>
    <div className="contain">
      <div className="wrapper">
        <div className="form">
          <h2 className="form-headline">Dejanos tu consulta</h2>
          <form id="submit-form" action="">
            <p>
              <input
                id="name"
                className="form-input"
                type="text"
                placeholder="Your Name*"
              />
              <small className="name-error"></small>
            </p>
            <p>
              <input
                id="email"
                className="form-input"
                type="email"
                placeholder="Your Email*"
              />
              <small className="name-error"></small>
            </p>
            <p className="full-width">
              <textarea
                minlength="20"
                id="message"
                cols="30"
                rows="7"
                placeholder="Your Message*"
                required
              ></textarea>
              <small></small>
            </p>
            <p className="full-width"></p>
            <p className="full-width">
              <input type="submit" className="submit-btn" value="Submit" />
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
