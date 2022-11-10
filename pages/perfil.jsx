import React from 'react'
import { useSession } from 'next-auth/react'

const perfil = () => {
  const {data: session} = useSession()

  if (session) {
    return (
      <div>
        <p>Nombre: {session.user.name}</p>
        <p>Email: {session.user.email}</p>
      </div>
    )
    
  }else{
    return(
        <div>Ingrese con su cuenta</div>
 
    )
  }
  
}

export default perfil