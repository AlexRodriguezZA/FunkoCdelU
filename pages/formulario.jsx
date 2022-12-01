import React from 'react'
import style from "../styles/formulario.module.css"
import Image from 'next/image'
import imagen_logo from "../assets/logo.png"
const formulario = () => {
  return (
    <div className={style.formulario_container}>

      <form action="" className={style.formulario}>

        <div className={style.imagen_container}>
            <Image src={imagen_logo} className={style.imagen} alt="Imagen del logo que está en el formulario de ingreso"/>
        </div>

        <section className={style.leyenda_formulario}>
          <h3>Ayudanos a facilitar el envio ingresando tus datos</h3>
        </section>

        <div className={style.conteiner_input_dni}>
          <label htmlFor="">DNI</label>
          <input className={style.input_dni} placeholder='Ingrese su DNI' type="number" name="" id="" />
        </div>
        
        <div className={style.conteiner_input_ciudad}>
          <label htmlFor="">Ciudad</label>
          <select name="" id="" className={style.input_ciudad}>
            <option value="">Concepcion del uruguay</option>
            <option value="">Rosario del tala</option>
    
          </select>
        </div>
        
        <div className={style.conteiner_input_domicilio}>
          <label htmlFor="">Domicilio: </label>
          <div className={style.container_domicilio}>
            <input className={style.input_domicilio} placeholder='Domicilio' type="text" name="" id="" />
            <input className={style.input_domicilio} placeholder='altura/ nro dpto' type="number" name="" id="" />
          </div>
          
        </div>

        <div className={style.contenedor_button}>
          <input className={style.button_submit} type="button" value="Enviar" />
        </div>
        
      </form>

    </div>
  )
}

export default formulario