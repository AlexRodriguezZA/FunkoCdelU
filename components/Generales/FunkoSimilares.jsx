import React from 'react'
import CardFunko from './CardFunko'
import style from "../styles/FunkoSimilares.module.css"


const FunkoSimilares = ({FunkosSimilar}) => {
  return (
    <div className={style.funko_similares_main}>
      <section className={style.titulo_container}>
       <h2 className={style.titulo}>Funkos similares</h2> 
      </section>

      <section className={style.seccion_funkos_similares}>
    
      </section>
    </div>
  )
}

export default FunkoSimilares

