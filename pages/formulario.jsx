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
          <h3>Ayudanos a facilitar el envio con tus datos</h3>
        </section>
        <div className={style.contenedores_inputs}>
          <label htmlFor="">Dni</label>
          <input className={style.inputs} placeholder='Ingrese su dni' type="number" name="" id="" />
        </div>
        
        <div className={style.contenedores_inputs}>
          <label htmlFor="">Ciudad</label>
          <select name="" id="" className={style.input}>
            <option value="">Concepcion del uruguay</option>
            <option value="">Rosario del tala</option>
    
          </select>
        </div>
        
        <div className={style.contenedores_inputs}>
          <label htmlFor="">Domicilio: </label>
          <div>
            <input placeholder='Domicilio' type="text" name="" id="" />
            <input placeholder='altura/ nro dpto' type="text" name="" id="" />
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