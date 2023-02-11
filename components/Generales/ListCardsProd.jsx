import React from 'react'
import CardFunko from './CardFunko'
import style from "../styles/ListCardsProd.module.css"

const ListCardsProd = ({productos}) => {

  return (
    <div className={style.CardsList_container}>
      {productos.map( (producto) => 
      <CardFunko 
        producto={producto}/>)}

    </div>
  )
}

export default ListCardsProd