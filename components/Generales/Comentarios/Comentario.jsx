import React from 'react'
import style from "../../styles/Comentario.module.css"
import Image from 'next/image'

import perfil_comentario from "../../../assets/imagenesPrueba/perfil_comentario.jpg"

const Comentario = ({comentarioData}) => {
  return (
    <div className={style.comentario_container}>
      <section className={style.imagen_comentario_container}>
        <Image className={style.imagen_comentario} src={perfil_comentario} alt="Imagen usuario" />
      </section>
      <section className={style.comentario_card}>
        <div className={style.comentario_card_datos_user}>
          <h3 className={style.comentario_nombre_user}>{comentarioData.usuarioByDni.nombre}  {comentarioData.usuarioByDni.apellido}</h3>
          <h5 className={style.comentario_fecha}>{comentarioData.fecha}</h5>
        </div>

        <div className={style.comentario_contenido}>
          <p className={style.contenido}>{comentarioData.contenido}</p>
        </div>
      </section>
    </div>
  )
}

export default Comentario