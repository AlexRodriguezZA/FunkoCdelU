import React from "react";
import style from "../styles/Footer.module.css"

import { BsPinMapFill, BsTelephoneFill, BsEnvelopeFill } from "react-icons/bs";

function Footer() {

  return (
    <div className={style.grid_footer} >
      <div className={style.item_0}>
        <h2 className={style.titulo_footer}>FUNKO C del U</h2>
      </div>
      <div className={style.item_1}>
        <section className={style.item_1_seccion_redes}>
          <h3 className={style.titulo_redes}>Redes sociales</h3>
          <section className={style.seccion_redes_icon}>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>

          </section>


        </section>
      </div>
      <div className={style.item_2}>
        <h3 className={style.titulo_contacto}>Contacto</h3>
        <section className={style.item_2_seccion_contacto}>
          <div className={style.item_2_icon}>
            <BsPinMapFill />
            <p>Mitre 1234 - Concepción del Uruguay</p>
          </div>
          <div className={style.item_2_icon}>
            <BsTelephoneFill />
            <p>+54 3445-346587</p>
          </div>
          <div className={style.item_2_icon}>
            <BsEnvelopeFill />
            <p>funkocdelu@gmail.com</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;