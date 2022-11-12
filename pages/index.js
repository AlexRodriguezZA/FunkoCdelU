import React from 'react'
import style from "../styles/Home.module.css"
import Header from '../components/Generales/Header'
import ListCardsProd from '../components/Generales/ListCardsProd'

const Home = () => {
  return (
      <div className={style.home_container}>
        <Header/> 
      </div>
      
      
  )
}

export default Home