import React from 'react'

import style from "../../styles/Seccion_comentarios.module.css"

const Seccion_comentarios = () => {
  return (
    <div className={style.Seccion_comentario_container}>

      <h2 className={style.Seccion_comentario_titulo}>Comentarios</h2>
      <section>
        <div>
          <img src="" alt="" />
          <input type="text" name="" id="" />
        </div>
        <div>
          <button>Enviar</button>
          <button>Cancelar</button>
        </div>
      </section>
      
      <section>
        {/*Targeta de comentarios */}
      </section>



    </div>
  )
}

export default Seccion_comentarios