import React from 'react'
import style from "../styles/GridLayourCategorias.module.css"
import Image from 'next/image'
import marvel_image from "../../assets/Funko_Categorias/marvel.png"
import peliculas_image from "../../assets/Funko_Categorias/peliculas.png"
import DC_image from "../../assets/Funko_Categorias/DC.png"
import NBA_image from "../../assets/Funko_Categorias/NBA.png"

const GridLayourCategorias = () => {
  return (
    <div className={style.angry_grid}>
        <div className={style.item_0}>
            <h1>Algunas de nuestras categorías</h1>
        </div>
        <div className={style.item_1} >
          <h3 className={style.titulo}>Marvel</h3>
          <div className={style.image_container}>
            <Image src={marvel_image} className={style.img_marvel} alt="Imagen categoria"/>
          </div>
        </div>
        <div className={style.item_2} >
        <h3 className={style.titulo}>Clásicos</h3>

            <div className={style.image_container_peliculas}>
              <Image src={peliculas_image} className={style.img_peliculas} alt="Imagen categoria"/>
            </div>
        </div>
        <div className={style.item_3} >
          <h3 className={style.titulo}>Dc comics</h3>
          <div className={style.image_container_dc}>
              <Image src={DC_image} width={300} className={style.img_dc} alt="Imagen categoria"/>
            </div>
        </div>
        <div className={style.item_4}>
        <h3 className={style.titulo}>NBA</h3>
          <div className={style.image_container_deportes}>
              <Image src={NBA_image} className={style.img_deportes} alt="Imagen categoria"/>
            </div>
        </div>
    </div>
  )
}

export default GridLayourCategorias