import React from 'react'
import Logo from "../assets/logo.png"
import Image from 'next/image'
import imgFunko from "../assets/funkoimagenesSlider/funko1.png"
import style from "../styles/nosotros.module.css"
import Link from 'next/link'

const Nosotros = () => {
  return (
    <div className={style.nosotros_container}>
        <section className={style.seccionUno_container}>
            <div className={style.Img_Logo_container}>
                <Image  className={style.logo_empresa} src={Logo} alt="Logo-Empresa-funkocdelu" />
            </div>
            <article className={style.texto_nosotros}>
                <p className={style.texto}>
                    Empresa Creada para cumplir las necesidades del coleccionismo, empezamos nuestra historias en eventos de anime vendiendo distintos artículos relacionados al mundo del manga y del anime, posteriormente incursionamos en el mundo de los Funko Pop en el cual encontramos un nicho de crecimiento, convirtiéndonos en una de los ecommerce de Funko Pop con mas clientes de Argentina.
                </p>
                
            </article>
            <Link href="/Tienda" className={style.button_tienda}>Ir la tienda</Link>  
        </section>

        <section className={style.seccionDos_container}>
            <div className={style.img_container_img_pricipal}>
                <Image className={style.imgFunko}  src={imgFunko} alt="" />
            </div>
        </section>
    </div>
  )
}

export default Nosotros