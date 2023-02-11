import React from 'react'
import ListCardsProd from '../components/Generales/ListCardsProd'
import style from "../styles/favoritos.module.css"
import { useSession } from 'next-auth/react'

const Favoritos = () => {
  const {data: session} = useSession()

  if (session) {
    return (
      <div className={style.favoritos_container}>
        <div className={style.title_favoritos_container}>
          <h2 className={style.titulo_favoritos}>Tus favoritos</h2>
        </div>
        <section className={style.funko_container}>
            <ListCardsProd/>
        </section>
      </div>
    ) 
  }
  else{
    return(
    <div>
      Ingrese a su Cuenta
    </div>
    )
  }
  
}

export default Favoritos