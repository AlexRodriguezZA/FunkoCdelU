import React from 'react'
import style from "../styles/Home.module.css"
import Header from '../components/Generales/Header'
import ListCardsProd from '../components/Generales/ListCardsProd'
import GridLayourCategorias from '../components/Generales/GridLayourCategorias'
import getAllProducts from '../Services/StoreProducts'

const Home = ({productos}) => {

  //Solo pasamos 6 funkos para el home
  const sixProducts = productos.slice(0,6)
  return (
      <div className={style.home_container}>
        <Header/> 
        <div className={style.title_container}>
          <h1 className={style.title_list_card}>Algunos de nuestros <span className={style.span}>Funkos</span></h1>
        </div>
        <ListCardsProd productos={sixProducts}/>
        <GridLayourCategorias/>
      </div>
      
      
  )
}

export default Home

export async function getServerSideProps() {
  const productos = await getAllProducts()
  return {
    props: {productos}, 
  }
} 
