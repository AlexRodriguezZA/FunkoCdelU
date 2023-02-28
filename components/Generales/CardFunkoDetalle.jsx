import React from 'react'
import style from "../styles/CardFunko.module.css"
import imagenPrubea from '../../assets/imagenesPrueba/boba.png'
import Image from 'next/image'
import carrito from '../../assets/imagenesPrueba/cart.svg'

const CardFunkoDetalle = ({FunkoDetalle}) => {
  return (
    <div className={style.card_detalle_container}>
    <section className={style.seccion_1_container}>
      <div className={style.Imagen_funko_container}>
        <Image  alt='Imagen del funkopop' className={style.Image_funko} src={imagenPrubea}/>
      </div>
    </section>

    <section className={style.seccion_2_container}>
        <div className={style.titulo_container}>
          <h1 className={style.titulo_funko}>{FunkoDetalle.nombre}</h1>
        </div>

        <div className={style.detalle_funko_container}>
          <p className={style.detalle}>Precio c/u:  <span className={style.detalle_dato}>${FunkoDetalle.precio}</span></p>
          <p className={style.detalle}>Categoría:  <span className={style.detalle_dato}>{FunkoDetalle.categoriaByIdcat.nombrecat}</span></p>
          <p className={style.detalle}>Valoración:  <span className={style.detalle_dato}>{FunkoDetalle.promediocalificacion}</span></p>
          <p className={style.detalle}>Nro: <span className={style.detalle_dato}>#{FunkoDetalle.numerofunko}</span></p>
          
          <div className={style.detalle_valoracion}>
          Valorar: 
          <div className={style.estrellas_container}>
            <a className={style.estrella} href="">*</a>
            <a className={style.estrella} href="">*</a>
            <a className={style.estrella} href="">*</a>
            <a className={style.estrella} href="">*</a>
            <a className={style.estrella} href="">*</a>
          </div>
          </div>
          <div className={style.detalle_cantidad}>
            {/*TODO: El max del input le vamos a cambiar dependiendo el stock 
            disponible del cada producto para poder controlar la cantidad añadida
             */}
            <label className={style.detalle_cantidad_label} htmlFor="">Cantidad:</label>
            <input className={style.detalle_cantidad_input} min="0" max={FunkoDetalle.stock} type="number" name="" id="" placeholder='0'/>
          </div>
        </div>

        <div className={style.detalle_compra_fav}>
          <button className={style.button_compra}>
            <Image alt='Carrito' src={carrito}/>
            Agregar al carrito
            </button>
        </div>
    </section>
  </div>
  )
}

export default CardFunkoDetalle