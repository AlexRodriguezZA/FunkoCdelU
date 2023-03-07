//Componentes
import Link from 'next/link'
import Image from 'next/image'
import style from "../styles/CardFunko.module.css"
import Swal from "sweetalert2";

//Funciones
import { useSession } from "next-auth/react"
import { useState } from 'react';
import addToCartFunko from '../../Utils/Crud_Carrito/addToCartFunko';

//Assets
import imagenPrubea from '../../assets/imagenesPrueba/boba.png'
import corazon from '../../assets/imagenesPrueba/corazon.svg'
import corazon2 from '../../assets/imagenesPrueba/corazon2.svg'
import carrito from '../../assets/imagenesPrueba/cart.svg'



const CardFunko = ({ producto }) => {

  const { data: session, status } = useSession()
  const Toast = Swal.mixin({
    width:'32em',
    heightAuto: true,
    toast: false,
    text: "50px",
    position: 'center',
    showConfirmButton: true,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const [fav, setfav] = useState(false)
  const handlePressFav = () => {
    setfav(!fav);
  }

  const handleAddToCart = async () => {
    if(status === "authenticated"){
    const email = session.user.email;
    const res = await addToCartFunko(1, producto.idprod, producto.precio, email)
    if(res === "success"){
      Toast.fire({
        title: "Añadido al carrito",
        text: `Se agrego el Funko ${producto.nombre}`,
        icon: "success",
    });
    }
    else{
      Toast.fire({
        title: "Error al cargar el carrito",
        text: `No se pudo agregar al funko`,
        icon: "error",
    });
    }}
    else{
      Toast.fire({
        title: "Error al cargar el carrito",
        text: `Ingrese a su cuenta para realizar la operacion`,
        icon: "error",
    });
    }
    
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
          <button className={style.Button_corazon_fav} onClick={() => handlePressFav()}>
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
          <button className={style.button_addCarrito} onClick={handleAddToCart}>
            <Image className={style.cart} src={carrito} alt="Carrito" />
            <p className={style.price_funko}>${producto.precio}</p>
          </button>
        </div>
      </section>

    </div>
  )
}

export default CardFunko;

