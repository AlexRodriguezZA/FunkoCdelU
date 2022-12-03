import React from 'react'
import { useSession } from 'next-auth/react'
import style from "../styles/perfil.module.css"

const perfil = () => {
  const {data: session} = useSession()

  if (session) {
    return (
      <div>
        <p>Nombre: {session.user.name}</p>
        <p>Email: {session.user.email}</p>
        <img src={session.user.image} alt="" />
      </div>
    )
    
  }else{
    return(
        <div>Ingrese con su cuenta</div>
 
    )
  }
  
}

export default perfil