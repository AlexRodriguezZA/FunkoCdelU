import React from 'react'
import Image from 'next/image'
import imagenPrubea from '../../assets/imagenesPrueba/boba.png'
import style from "../styles/CardCarrito.module.css"
const CardCarrito = () => {
  return (
    <div className={style.card_carrito_container}>
        <section className={style.seccion_carrito}>
          <Image width={90} height={90} src={imagenPrubea} alt="Imagen del funko"/>
        </section>
        
        <section>
          <div>
            <h2>Dr strange</h2>
            <div>
              <p>c/u: $<span>15.000</span> </p>
              <p>#456</p>
            </div>

            <div>
              <label htmlFor="">Cantidad</label>
              <input type="number" />
            </div>
          </div>

        </section>
        
        <section>
          <button className={style.button_eliminar}>Eliminar</button>
          <p>sub: $15.000</p>
        </section>
    </div>
  )
}

export default CardCarrito