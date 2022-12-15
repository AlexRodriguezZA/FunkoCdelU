import React from 'react'
import CardFunko from './CardFunko'
import style from "../styles/FunkoSimilares.module.css"
const FunkoSimilares = () => {
  return (
    <div className={style.funko_similares_main}>
      <section className={style.titulo_container}>
       <h2 className={style.titulo}>Funkos similares</h2> 
      </section>

      <section className={style.seccion_funkos_similares}>
      <CardFunko showAs="card-Pricipal"/>
      <CardFunko showAs="card-Pricipal"/>
      <CardFunko showAs="card-Pricipal"/>
      </section>
    </div>
  )
}

export default FunkoSimilares