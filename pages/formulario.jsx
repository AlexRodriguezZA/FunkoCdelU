//Componentes
import style from "../styles/formulario.module.css"
import Image from 'next/image'
import imagen_logo from "../assets/logo.png"
import Error_formulario from '../components/Generales/Error_formulario'

//Funciones
import getAllCiudades from '../Utils/getCiudades'
import setUsers from "../Utils/setUsers"
import { useState } from 'react';
import { useSession } from 'next-auth/react'


const formulario = ({ ciudades }) => {

  const { data: session } = useSession()


  const [Nombre, setNombre] = useState("")
  const [Apellido, setApellido] = useState("")
  const [Dni, setDni] = useState(0)
  const [Domicilio, setDomicilio] = useState("")
  const [altura, setAltura] = useState(0)
  const [codigoPostal, setcodigoPostal] = useState(0)

  const [Error, setError] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    if (codigoPostal <= 0 || altura <= 0 || Dni <= 0) {
      setError(true)

    }
    else {
      setError(false)
      setUsers(Dni, Nombre, Apellido, session.user.email, Domicilio, codigoPostal, altura)
      handleResetForm()
    }
  }

  const handleResetForm = () => {
    //Resetear los formularios
    setNombre('')
    setApellido('')
    setDni(0)
    setDomicilio('')
    setAltura(0)
    setcodigoPostal(0)

  }

  return (
    <div className={style.formulario_container}>
      {
        Error && <Error_formulario />
      }
      <form action="" className={style.formulario} onSubmit={handleSubmit}>

        <div className={style.imagen_container}>
          <Image src={imagen_logo} className={style.imagen} alt="Imagen del logo que está en el formulario de ingreso" />
        </div>

        <section className={style.leyenda_formulario}>
          <h3>Ayudanos a facilitar el envio ingresando tus datos</h3>
        </section>

        <div className={style.conteiner_input_dni}>
          <label htmlFor="dni">DNI:</label>
          <input className={style.input_dni}
            required
            placeholder='Ingrese su DNI'
            type="number"
            id="dni"
            value={Dni}
            onChange={(e) => setDni(e.target.value)} />
        </div>

        <div className={style.conteiner_input_domicilio}>
          <label htmlFor="nombre/apellido">Nombre/apellido: </label>
          <div className={style.container_domicilio}>
            <input className={style.input_domicilio}
              placeholder='Nombre'
              type="text"
              required
              id='nombre'
              value={Nombre}
              onChange={(e) => setNombre(e.target.value)} />
            <input className={style.input_domicilio}
              required
              placeholder='Apellido'
              type="text"
              id="apellido"
              value={Apellido}
              onChange={(e) => setApellido(e.target.value)} />
          </div>
        </div>


        <div className={style.conteiner_input_ciudad}>
          <label htmlFor="">Ciudad:</label>
          <select className={style.input_ciudad} onChange={(e) => setcodigoPostal(e.target.value)} >
            <option aria-disabled>Ingrese su ciudad</option>
            {ciudades.map((ciudad) => <option key={ciudad.codigopostal}
              value={ciudad.codigopostal}>{ciudad.ciudad}</option>)}
          </select>
        </div>


        <div className={style.conteiner_input_domicilio}>
          <label htmlFor="">Domicilio/altura: </label>
          <div className={style.container_domicilio}>
            <input className={style.input_domicilio}
              placeholder='Domicilio'
              type="text"
              required
              id="domicilio"
              value={Domicilio}
              onChange={(e) => setDomicilio(e.target.value)} />
            <input className={style.input_domicilio}
              placeholder='altura/ nro dpto'
              type="number"
              name=""
              required
              id="altura"
              value={altura}
              onChange={(e) => setAltura(e.target.value)} />
          </div>
        </div>

        <div className={style.contenedor_button}>
          <button className={style.button_submit} type="submit">Enviar</button>
        </div>

      </form>

    </div>
  )
}

export default formulario

export async function getServerSideProps() {
  const ciudades = await getAllCiudades()
  return {
    props: { ciudades },
  }
} 
