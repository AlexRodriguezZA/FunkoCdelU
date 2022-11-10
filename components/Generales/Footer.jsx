import React from "react";
import "../Styles/Footer.css"
import { BsFacebook,BsInstagram,BsPinMapFill,BsTelephoneFill } from "react-icons/bs";

function Footer() {
  return (
    <div className="main-footer">
     <section className="logo-container">
      <h4 className="titulo-funko">Funko c del u</h4>
     </section>
     <section className="enlaces-rapidos-container">
      <h4 className="Titulo-seccion">Enlaces rapidos</h4>
      <a href="">Productos</a>
      <a href="">Nosotros</a>
      <a href="">Carrito</a>
     </section>
     <section className="redes-container">
     <h4 className="Titulo-seccion">Redes</h4>

      <a href=""> <BsFacebook/> Facebook</a>
      <a href=""><BsInstagram/> Instagram</a>
     </section>
     <section className="contacto-container">
     <h4 className="Titulo-seccion">Contacto</h4>

      <p href="">FunkoCdelU@gmail.com</p>
      <p href=""><BsTelephoneFill/> 3442-457689</p>
      <p href=""><BsPinMapFill/> Mitre 1234</p>
     </section>
    </div>
  );
}

export default Footer;