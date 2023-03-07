//Componentes / assets
import style from "../styles/CardFunko.module.css";
import imagenPrubea from "../../assets/imagenesPrueba/boba.png";
import Image from "next/image";
import carrito from "../../assets/imagenesPrueba/cart.svg";
import Swal from "sweetalert2";

//Funciones
import addToCartFunko from "../../Utils/Crud_Carrito/addToCartFunko";
import { useSession } from "next-auth/react"
import { useState } from "react";

const CardFunkoDetalle = ({ FunkoDetalle }) => {

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
  
  const { data: session, status } = useSession()

  const [Cantidad, setCantidad] = useState(0)  

  const handleChangeInput = (e)=>{
    setCantidad(e.target.value)
  }
  const handleResetInput = ()=>{
    setCantidad(0)
  } 
  const handleAddToCart = async () => {
    if(status === "authenticated"){
    const email = session.user.email;
    const res = await addToCartFunko(parseInt(Cantidad,10), FunkoDetalle.idprod, FunkoDetalle.precio, email)
    handleResetInput()
    if(res === "success"){
      Toast.fire({
        title: "Añadido al carrito",
        text: `Se agrego el Funko ${FunkoDetalle.nombre}`,
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
    <div className={style.card_detalle_container}>
      <section className={style.seccion_1_container}>
        <div className={style.Imagen_funko_container}>
          <Image
            alt="Imagen del funkopop"
            className={style.Image_funko}
            src={imagenPrubea}
          />
        </div>
      </section>

      <section className={style.seccion_2_container}>
        <div className={style.titulo_container}>
          <h1 className={style.titulo_funko}>{FunkoDetalle.nombre}</h1>
        </div>

        <div className={style.detalle_funko_container}>
          <p className={style.detalle}>
            Precio c/u:{" "}
            <span className={style.detalle_dato}>${FunkoDetalle.precio}</span>
          </p>
          <p className={style.detalle}>
            Categoría:{" "}
            <span className={style.detalle_dato}>
              {FunkoDetalle.categoriaByIdcat.nombrecat}
            </span>
          </p>
          <p className={style.detalle}>
            Valoración:{" "}
            <span className={style.detalle_dato}>
              {FunkoDetalle.promediocalificacion}
            </span>
          </p>
          <p className={style.detalle}>
            Nro:{" "}
            <span className={style.detalle_dato}>
              #{FunkoDetalle.numerofunko}
            </span>
          </p>

          <div className={style.detalle_valoracion}>
            Valorar:
            <div className={style.estrellas_container}>
              <a className={style.estrella} href="">
                *
              </a>
              <a className={style.estrella} href="">
                *
              </a>
              <a className={style.estrella} href="">
                *
              </a>
              <a className={style.estrella} href="">
                *
              </a>
              <a className={style.estrella} href="">
                *
              </a>
            </div>
          </div>
          <div className={style.detalle_cantidad}>
            {/*TODO: El max del input le vamos a cambiar dependiendo el stock 
            disponible del cada producto para poder controlar la cantidad añadida
             */}
            <label className={style.detalle_cantidad_label} htmlFor="">
              Cantidad:
            </label>
            <input
              className={style.detalle_cantidad_input}
              min="1"
              max={FunkoDetalle.stock}
              type="number"
              value={Cantidad}
              onChange={handleChangeInput}             
            />
          </div>
        </div>

        <div className={style.detalle_compra_fav}>
          <button className={style.button_compra} onClick={handleAddToCart}>
            <Image alt="Carrito" src={carrito} />
            Agregar al carrito
          </button>
        </div>
      </section>
    </div>
  );
};

export default CardFunkoDetalle;
