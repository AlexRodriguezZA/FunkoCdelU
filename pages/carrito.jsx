import React from 'react'
import CardCarrito from '../components/Generales/CardCarrito'
import style from "../styles/carrito.module.css"

const Carrito = () => {
  return (
    <div className={style.carrito_page}>

      <div className={style.carrito_box}>
        <div className={style.header_carrito}>
          <h2>Tú carrito</h2>
          <button className={style.button_allremove}>All remove</button>
        </div>
        <div className={style.linea_divisora}></div>
        <section className={style.cards_carrito_container}>
          <CardCarrito/>
          <CardCarrito/>
          <CardCarrito/>
          <CardCarrito/>
          </section>
        <div className={style.linea_divisora}></div>

        <section className={style.seccion_carrito_total}>
          <p className={style.total_label}>Total: $<span className={style.total}>200000</span></p>
          <button className={style.button_pagar}>Pagar</button>
        </section>
      </div>

    </div>
  )
}

export default Carrito