import React from 'react'
import CardFunko from './CardFunko'

import style from "../styles/ListCardsProd.module.css"

const ListCardsProd = () => {
  return (
    <div className={style.CardsList_container}>

      <CardFunko showAs="card-Pricipal"/>
      <CardFunko showAs="card-Pricipal"/>
      <CardFunko showAs="card-Pricipal"/>
      <CardFunko showAs="card-Pricipal"/>
      <CardFunko showAs="card-Pricipal"/>
      <CardFunko showAs="card-Pricipal"/>

    </div>
  )
}

export default ListCardsProd