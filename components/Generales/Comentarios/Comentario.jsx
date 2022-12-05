import React from 'react'
import style from "../../styles/Comentario.module.css"

const Comentario = () => {
  return (
    <div className={style.comentario_container}>
      <section>
        <img src="" alt="Imagen usuario" />
      </section>
      <section className={style.comentario_card}>
        <div className={style.comentario_card_datos_user}>
          <h3>Nombre</h3>
          <h5>Fecha</h5>
        </div>

        <div>
          <p>Contenido</p>
        </div>
      </section>
    </div>
  )
}

export default Comentario