import React from "react";
import style from "../styles/Footer.module.css"
import Image from "next/image";
import { BsPinMapFill,BsTelephoneFill,BsEnvelopeFill } from "react-icons/bs";

function Footer() {

  //TODO: COLOCAR los iconos de las redes
  return (
    <div className={style.grid_footer} >
      <div className={style.item_0}>
        <h2 className={style.titulo_footer}>FUNKO C del U</h2>
      </div>
      <div className={style.item_1}>
        <section className={style.item_1_seccion_redes}>
          <h3 className={style.titulo_redes}>Redes sociales</h3>
          <section className={style.seccion_redes_icon}>
            {/*HACER ESTA SECCION DE LOS ICONOS */}
          </section>
          

        </section>
      </div>
      <div className={style.item_2}>
        <h3 className={style.titulo_contacto}>Contacto</h3>
        <section className={style.item_2_seccion_contacto}>
          <div>
            <BsPinMapFill/>
            <p>Mitre 1234 - Concepción del Uruguay</p>
          </div>
          <div >
            <BsTelephoneFill/>
            <p>+54 3445-346587</p>
          </div>
          <div >
            <BsEnvelopeFill/>
            <p>FunkoCdelU@gmail.com</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;