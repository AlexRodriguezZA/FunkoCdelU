import React from 'react'
import style from "../styles/Home.module.css"
import Header from '../components/Generales/Header'
import ListCardsProd from '../components/Generales/ListCardsProd'

const Home = () => {
  return (
      <div className={style.home_container}>
        <Header/> 
        <div className={style.title_container}>
          <h1 className={style.title_list_card}>Algunos de nuestros <span className={style.span}>Funkos</span></h1>
        </div>
        <ListCardsProd/>
      </div>
      
      
  )
}

export default Home