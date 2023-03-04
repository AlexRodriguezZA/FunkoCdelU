import React from 'react'
import Image from 'next/image'
import imagenPrueba from '../../assets/imagenesPrueba/boba.png'
import style from "../styles/CardCarrito.module.css"

const CardCarrito = () => {
  return (
    <div className={style.Card_carrito_container}>
      <section >
        <button className={style.button_remove}>x</button>
      </section>

      <section className={style.seccion_imagen}>
        <Image alt="Imagen funko" className={style.imagen} src={imagenPrueba} />
      </section>

      <section className={style.seccion_data}>
        <h3>Hulk</h3>
        <p className={style.seccion_data_price}>$3000</p>
        <p className={style.seccion_data_categoria}>Marvel</p>
      </section>

      <section className={style.seccion_buttons}>
        <button className={style.button}>+</button>
        <span className={style.total_producto}>4</span>
        <button className={style.button}>-</button>
      </section>

      <section className={style.seccion_subtotal}>
        <p>$12000</p>
      </section>
    </div>
  )
}

export default CardCarrito