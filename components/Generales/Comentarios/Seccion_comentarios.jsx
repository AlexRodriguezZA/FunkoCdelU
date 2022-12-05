import React from 'react'
import Comentario from './Comentario'

import style from "../../styles/Seccion_comentarios.module.css"

const Seccion_comentarios = () => {
  return (
    <div className={style.Seccion_comentario_container}>

      <h2 className={style.Seccion_comentario_titulo}>Comentarios</h2>
      <section className={style.comentario_container}>
        <div className={style.input_comentario_container}>
          <img src="" alt="Imagen de la usuario" />
          <textarea className={style.input_comentario} placeholder="Ingrese un comentario..." name="" id="" cols="80" rows="6"></textarea>
        </div>
        <div className={style.buttons_container}>
          <button className={style.button_enviar}>Enviar</button>
          <button className={style.button_cancelar}>Cancelar</button>
        </div>
      </section>
      
      <section className={style.seccion_comentarios_totales}>
        <Comentario/>
        <Comentario/>
        <Comentario/>
        <Comentario/>

      </section>



    </div>
  )
}

export default Seccion_comentarios