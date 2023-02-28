import React from 'react'
import style from "../styles/Home.module.css"
import Header from '../components/Generales/Header'
import ListCardsProd from '../components/Generales/ListCardsProd'
import GridLayourCategorias from '../components/Generales/GridLayourCategorias'
import getAllProducts from '../Utils/StoreProducts'
import getEmailsUsers from "../Utils/getEmailsUsers"
import { getSession } from 'next-auth/react'



const Home = ({productos}) => {
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

export async function getServerSideProps(context) { 
  const productos = await getAllProducts()
  const emails = await getEmailsUsers()
  const session = await getSession(context)
  
  if (session){
    const emailEncontrado = emails.find( (e)=> e.email === session.user.email)  
    //Una ves evaluado si el usuario inicío sesión verificamos si está cargado en la BBDD
    if(emailEncontrado){
      console.log("Logead@")
    }
    else{
      console.log(session.user.email,"No esta en la BBDD")
        return {
          redirect: {
            destination: '/formulario',
            permanent: true,
          },
        }
      }

    }
  return {
    props: {productos,emails}, 
  }
} 
