import React from 'react'
import ListCardsProd from '../components/Generales/ListCardsProd'
import style from "../styles/favoritos.module.css"
const Favoritos = () => {
  return (
    <div className={style.favoritos_container}>
      <div className={style.title_favoritos_container}>
        <h2 className={style.titulo_favoritos}>Tus favoritos</h2>
      </div>
      <section>
          <ListCardsProd/>
      </section>
    </div>
  )
}

export default Favoritos