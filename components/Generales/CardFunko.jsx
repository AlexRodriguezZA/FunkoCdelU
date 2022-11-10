import imagenPrubea from '../../assets/imagenesPrueba/boba.png'
import corazon from '../../assets/imagenesPrueba/corazon.svg'
import carrito from '../../assets/imagenesPrueba/cart.svg'
import '../Styles/CardFunko.css'


const CardFunko = ({showAs}) => {


  if (showAs === 'card-Pricipal') {
    return(
        <div className="Card-container">
          <a href='#' className='card-img-container'>
            <img className='img' src={imagenPrubea} alt="" />
          </a>
          <div className='Linea-divisora'> </div>
          <section className='card-details-container'>
            <div className='card-details-container-primeraLinea'>
              <span className='numero-funko'>#234</span>
              <h1 className='title-funko'>Dr strange</h1>
              <button className='Button-corazon-fav'>
                <img className='corazon-fav' src={corazon} alt="" /> 
              </button>
            </div>
            <div className='card-details-container-segundaLinea'>
              <h2 className='categoria-funko'>Star Wars</h2>
            </div>
            <div className='Button-Compra-container'>
              <button className='button-addCarrito'>
              <img className='cart' src={carrito} alt="Carrito" />
              <p className='price-funko'>$15.000</p>
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