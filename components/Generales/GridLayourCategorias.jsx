import React from 'react'
import style from "../styles/GridLayourCategorias.module.css"
import Image from 'next/image'
import marvel_image from "../../assets/Funko_Categorias/marvel.png"
import peliculas_image from "../../assets/Funko_Categorias/peliculas.png"


//TODO:ACOMODAR LAS IMAGENES Y PONES OTRAS
const GridLayourCategorias = () => {
  return (
    <div className={style.angry_grid}>
        <div className={style.item_0}>
            <h1>Algunas de nuestras categorías</h1>
        </div>
        <div className={style.item_1} >
          <h3 className={style.titulo}>Marvel</h3>
          <div className={style.image_container}>
            <Image src={marvel_image} className={style.img_marvel}/>
          </div>
        </div>
        <div className={style.item_2} >
        <h3 className={style.titulo}>Películas</h3>

            <div className={style.image_container_peliculas}>
              <Image src={peliculas_image} className={style.img_peliculas}/>
            </div>
        </div>
        <div className={style.item_3} >
          <h3 className={style.titulo}>Dc comics</h3>
          <div className={style.image_container_dc}>
              <Image src={peliculas_image} className={style.img_dc}/>
            </div>
        </div>
        <div className={style.item_4}>
        <h3 className={style.titulo}>Deportes</h3>
          <div className={style.image_container_deportes}>
              <Image src={peliculas_image} className={style.img_deportes}/>
            </div>
        </div>
    </div>
  )
}

export default GridLayourCategorias