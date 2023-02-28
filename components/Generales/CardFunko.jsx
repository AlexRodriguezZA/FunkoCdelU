import imagenPrubea from '../../assets/imagenesPrueba/boba.png'
import corazon from '../../assets/imagenesPrueba/corazon.svg'
import corazon2 from '../../assets/imagenesPrueba/corazon2.svg'
import carrito from '../../assets/imagenesPrueba/cart.svg'
import Link from 'next/link'
import Image from 'next/image'
import style from "../styles/CardFunko.module.css"

import { useState } from 'react';

const CardFunko = ({producto}) => {

  const [fav, setfav] = useState(false)
  
  
  const handlePressFav = () => {
    console.log(fav)
    setfav(!fav);
    console.log(fav)
  }
  return (
    <div className={style.Card_container}>

        <Link href={`/Tienda/${producto.idprod}`}>
          <div href='#' className={style.card_img_container}>
              <Image className={style.img} src={imagenPrubea} alt="Imagen de funko" />
          </div>
        </Link>
          
          
          <div className={style.Linea_divisora}></div>

          <section className={style.card_details_container}>
            <div className={style.card_details_container_primeraLinea}>
              <span className={style.numero_funko}>#{producto.numerofunko}</span>
              <h1 className={style.title_funko}>{producto.nombre}</h1>
              <button className={style.Button_corazon_fav} onClick={()=> handlePressFav()}>
                {
                  fav ? <Image className={style.corazon_fav} src={corazon2} alt="Corazon de favoritos" /> 
                  : <Image className={style.corazon_fav} src={corazon} alt="Corazon de favoritos" />  
                }
              </button>
            </div>
            <div className={style.card_details_container_segundaLinea}>
              <h2 className={style.categoria_funko}>{producto.categoriaByIdcat.nombrecat}</h2>
            </div>
            <div className={style.Button_Compra_container}>
              <button className={style.button_addCarrito}>
              <Image className={style.cart} src={carrito} alt="Carrito" />
              <p className={style.price_funko}>${producto.precio}</p>
              </button>
            </div>
            </section>
         
        </div>
  )
}

export default CardFunko;