import imagenPrubea from '../../assets/imagenesPrueba/boba.png'
import corazon from '../../assets/imagenesPrueba/corazon.svg'
import carrito from '../../assets/imagenesPrueba/cart.svg'
import Image from 'next/image'
import style from "../styles/CardFunko.module.css"

const CardFunko = ({showAs}) => {


  if (showAs === 'card-Pricipal') {
    return(
        <div className={style.Card_container}>

          <a href='#' className={style.card_img_container}>
            <Image className={style.img} src={imagenPrubea} alt="" />
          </a>
          
          <div className={style.Linea_divisora}>s</div>

          <section className={style.card_details_container}>
            <div className={style.card_details_container_primeraLinea}>
              <span className={style.numero_funko}>#234</span>
              <h1 className={style.title_funko}>Dr strange</h1>
              <button className={style.Button_corazon_fav}>
                <Image className={style.corazon_fav} src={corazon} alt="" /> 
              </button>
            </div>
            <div className={style.card_details_container_segundaLinea}>
              <h2 className={style.categoria_funko}>Star Wars</h2>
            </div>
            <div className={style.Button_Compra_container}>
              <button className={style.button_addCarrito}>
              <Image className={style.cart} src={carrito} alt="Carrito" />
              <p className={style.price_funko}>$15.000</p>
              </button>
            </div>
            </section>
         
        </div>
    )
    }
  if (showAs='card-DetalleProducto') {

  }

    
  
}

export default CardFunko