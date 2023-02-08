import React from 'react'
import { useSession } from 'next-auth/react'
import style from "../../styles/user.module.css"
import Link from 'next/link'
import Image from 'next/image'
const user = () => {
  const {data: session} = useSession()

  if (session) {
    return (
      <div className={style.page_perfil}>
        <div className={style.card_principal}>
          <div className={style.data_seccion}>
            <section className={style.seccion_1}>
              <div className={style.img_container}>
                <img className={style.img_perfil} src={session.user.image} alt="" />
              </div>
              <h2 className={style.name_user}>{session.user.name}</h2>
            </section>

            <section className={style.seccion_2}>
              <p className={style.data_user}>Direccion: <span className={style.data_user_info}>Rozados 239</span></p>
              <p className={style.data_user}>Ciudad: <span className={style.data_user_info}>Rosario del tala</span></p>
              <p className={style.data_user}>Correo: <span className={style.data_user_info}>{session.user.email}</span></p>  
              <p className={style.data_user}>Tel: <span className={style.data_user_info}>3445 417785</span></p>
            </section>
          </div>
          <div className={style.seccion_3}>
            <button className={style.button_editar}>Editar</button>
            <Link href="/Perfil/compras" className={style.button_compras}>Mis compras</Link>

          </div>
        </div>
        
           
      </div>
    )
    
  }else{
    return(
        <div>Ingrese con su cuenta</div>
 
    )
  }
  
}

export default user;