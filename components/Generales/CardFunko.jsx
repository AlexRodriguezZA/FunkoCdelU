//Componentes
import Link from 'next/link'
import Image from 'next/image'
import style from "../styles/CardFunko.module.css"
import Swal from "sweetalert2";

//Funciones
import { useSession } from "next-auth/react"
import { useState,useEffect } from 'react';
import addToCartFunko from '../../Utils/Crud_Carrito/addToCartFunko';
import addFavoritos from '../../Utils/addFavoritos';
import deleteFavoritos from '../../Utils/deleteFavoritos';
//Assets
import imagenPrubea from '../../assets/imagenesPrueba/boba.png'
import corazon from '../../assets/Icons/corazon.svg'
import corazon2 from '../../assets/Icons/corazon2.svg'
import carrito from "../../assets/Icons/cart.svg"



const CardFunko = ({ producto,isFavorite }) => {
 const Toast = Swal.mixin({
    width:'32em',
    heightAuto: true,
    toast: false,
    position: 'center',
    showConfirmButton: true,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  const { data: session, status } = useSession()
  

  const [fav, setfav] = useState(true)

  useEffect(() => {
    if(isFavorite === true){
      setfav(false)
    }
  }, [])
  
  const handleDeleteFav = async ()=>{
    const res = await deleteFavoritos(producto.idfav)
    if(res === "success"){
      setfav(true)
      window.location.replace(''); //Reiniciamos la página
      
    }
  }
  
  const handlePressFav = async () => {
    if(status === "authenticated"){
        const email = session.user.email;
        const res = await addFavoritos(email,producto.idprod)
        if(res === "success"){
          setfav(!fav); //cambiamos el icono
          Toast.fire({
            title: "Añadido a sus Favoritos",
            text: `Se agregó el Funko ${producto.nombre}`,
            icon: "success",
        });
        }
        else{
          Toast.fire({
            title: "Ya tiene este funko cargado en favoritos",
            icon: "warning",
        });
        }}
      else{
        Toast.fire({
            title: "Error al cargar el Funko",
            text: `Ingrese a su cuenta para realizar la operacion`,
            icon: "error",
        });
        }

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

          {
            isFavorite === true ?
            <button className={style.Button_corazon_fav} onClick={() => handleDeleteFav()}>
            {
              fav ? <Image className={style.corazon_fav} width={28}  src={corazon2} alt="Corazon de favoritos" />
                : <Image className={style.corazon_fav} src={corazon} alt="Corazon de favoritos" />
            }
            </button> 
            :
            <button className={style.Button_corazon_fav} onClick={() => handlePressFav()}>
            {
              fav ? <Image className={style.corazon_fav} width={28} src={corazon2} alt="Corazon de favoritos" />
                : <Image className={style.corazon_fav} src={corazon} alt="Corazon de favoritos" />
            }
          </button>
           
          }
          
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

