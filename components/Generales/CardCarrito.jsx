import React from 'react'
import Image from 'next/image'
import imagenPrueba from '../../assets/imagenesPrueba/boba2.jpg'
import Link from 'next/link'
import style from "../styles/CardCarrito.module.css"
import Loading_Spinner_mini from './Loading_Spinner_mini'
import Seccion_updateCantidad from './Seccion_updateCantidad'
//Funciones
import DeleteLineaCarrito from '../../Utils/Crud_Carrito/DeleteLineaCarrito'
import { useRouter } from 'next/router';
import { useEffect,useState } from 'react'

const CardCarrito = ({nombre,idprod,precio,categoria,stock,cantidad,subtotal,imagen,IdLineaCarrito}) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [imageUrl, setImageUrl] = useState(`http://localhost:5000/public_funko_img/${imagen}`);
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
    setIsRefreshing(true)

  }

 
  useEffect(() => {
    setIsRefreshing(false)
  }, []);

  const handleDeleteLineaCarrito = async ()=>{
    await DeleteLineaCarrito(IdLineaCarrito)
    refreshData();

  }
  return (
    <div className={style.Card_carrito_container}>
      <section style={{display: "flex"}}>  
      <div>
      {
          isRefreshing ? <Loading_Spinner_mini/> : <button className={style.button_remove} onClick={handleDeleteLineaCarrito}>x</button>
      } 

      </div>
      </section>
      <Link href={`/Tienda/${idprod}`}>
        <section className={style.seccion_imagen}>
          <Image alt="Imagen funko" width={70} height={60}  src={imageUrl} />
        </section>
      </Link>
      

      <section className={style.seccion_data}>
        <h3>{nombre}</h3>
        <p className={style.seccion_data_price}>${precio}</p>
        <p className={style.seccion_data_categoria}>{categoria}</p>
      </section>

      <section className={style.seccion_buttons}>
       <Seccion_updateCantidad cantidad={cantidad} stock={stock} IdLineaCarrito={IdLineaCarrito}/>
      </section>

      <section className={style.seccion_subtotal}>
        <p>${subtotal}</p>
      </section>
    </div>
  )
}

export default CardCarrito