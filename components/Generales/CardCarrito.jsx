import React from 'react'
import Image from 'next/image'
import imagenPrueba from '../../assets/imagenesPrueba/boba.png'
import style from "../styles/CardCarrito.module.css"

//Funciones
import DeleteLineaCarrito from '../../Utils/Crud_Carrito/DeleteLineaCarrito'

const CardCarrito = ({nombre,precio,categoria,cantidad,subtotal,IdLineaCarrito}) => {

  
  const handleDeleteLineaCarrito = async ()=>{
    window.location.replace(''); //Reiniciamos la página
    await DeleteLineaCarrito(IdLineaCarrito)
  }
  return (
    <div className={style.Card_carrito_container}>
      <section >
        <button className={style.button_remove} onClick={handleDeleteLineaCarrito}>x</button>
      </section>

      <section className={style.seccion_imagen}>
        <Image alt="Imagen funko" className={style.imagen} src={imagenPrueba} />
      </section>

      <section className={style.seccion_data}>
        <h3>{nombre}</h3>
        <p className={style.seccion_data_price}>${precio}</p>
        <p className={style.seccion_data_categoria}>{categoria}</p>
      </section>

      <section className={style.seccion_buttons}>
        <button className={style.button}>+</button>
        <span type="number" v className={style.total_producto}>{cantidad}</span>
        <button className={style.button}>-</button>
      </section>

      <section className={style.seccion_subtotal}>
        <p>${subtotal}</p>
      </section>
    </div>
  )
}

export default CardCarrito