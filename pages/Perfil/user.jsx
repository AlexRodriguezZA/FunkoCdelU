import React from 'react'
import { useSession } from 'next-auth/react'
import style from "../../styles/user.module.css"
import Image from 'next/image'
const user = () => {
  const {data: session} = useSession()

  if (session) {
    return (
      <div className={style.page_perfil}>
        {/*NAv interno */}
        <div className={style.card_principal}>
          <div className={style.data_seccion}>
            <section className={style.seccion_1}>
              <div className={style.img_container}>
                <img className={style.img_perfil} src={session.user.image} alt="" />
              </div>
              <h2 className={style.name_user}>{session.user.name}</h2>
            </section>

            <section className={style.seccion_2}>
              <p>Direccion: <span>Rozados 239</span></p>
              <p>Ciudad: <span>Rosario del tala</span></p>
              <p>Correo: <span>{session.user.email}</span></p>  
              <p>Tel: <span>3445 417785</span></p>
            </section>
          </div>
          <div className={style.seccion_3}>
            <button className={style.button_editar}>Editar</button>
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