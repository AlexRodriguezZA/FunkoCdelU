//Componentes / assets
import style from "../styles/CardFunko.module.css";
import imagenPrubea from "../../assets/imagenesPrueba/boba2.jpg";
import star from "../../assets/Icons/star.svg"
import Image from "next/image";
import carrito from "../../assets/Icons/cart.svg";
import Swal from "sweetalert2";
import { Rating } from "react-simple-star-rating";

//Funciones
import addToCartFunko from "../../Utils/Crud_Carrito/addToCartFunko";
import addCalificacion from "../../Utils/Calificacion/addCalificacion";
import getDataUser from "../../Utils/getDataUser";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const CardFunkoDetalle = ({ FunkoDetalle }) => {
  const Toast = Swal.mixin({
    width: "32em",
    heightAuto: true,
    toast: false,
    position: "center",
    showConfirmButton: true,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  
  const { data: session, status } = useSession();

  const [Cantidad, setCantidad] = useState(1);
  const [imageUrl, setImageUrl] = useState(`http://localhost:5000/public_funko_img/${FunkoDetalle.imagen}`);
  const [DniUser, setDniUser] = useState(null)

  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  useEffect(() => {
    if (status === "authenticated") {
      const handleGetDni = async () => {
        const { dni } = await getDataUser(session.user.email);
        setDniUser(dni);
      };

      handleGetDni()
    }

  }, [status, session,FunkoDetalle]);

  const handleRating = async (numero) => {
    Toast.fire({
      title: `¿Desea dar ${numero} estrellas a ${FunkoDetalle.nombre}?`,
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: `Dar ${numero}`
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await addCalificacion(numero,DniUser,FunkoDetalle.idprod)
        console.log(res)
        //Evaluamos si existe un error, si es asi lo que debemos hacer es mandar el mensaje al usuario
        if (res?.errors){
          Toast.fire(
            `Primero debe comprar el funko! `,
            '',
            'error'
          )
        }
        else {
           Toast.fire(
           `Ha dado ${numero} estrellas a ${FunkoDetalle.nombre}!`,
            '',
            'success'
          )  
          refreshData()

        }
       

      }
    })
  }

  const handleChangeInput = (e) => {
    setCantidad(e.target.value);
  };
  const handleResetInput = () => {
    setCantidad(1);
  };

  const handleAddToCart = async () => {
    if (status === "authenticated") {
      const email = session.user.email;
      const res = await addToCartFunko(
        parseInt(Cantidad, 10),
        FunkoDetalle.idprod,
        FunkoDetalle.precio,
        email
      );
      handleResetInput();
      if (res === "success") {
        Toast.fire({
          title: `Añadido al carrito el Funko ${FunkoDetalle.nombre}`,
          icon: "success",
        });
      } else {
        Toast.fire({
          title: "Error al cargar el carrito",
          text: `No se pudo agregar al funko`,
          icon: "error",
        });
      }
    } else {
      Toast.fire({
        title: "Error al cargar el carrito",
        text: `Ingrese a su cuenta para realizar la operacion`,
        icon: "error",
      });
    }
  };

   
  return (
    <div className={style.card_detalle_container}>
      <section className={style.seccion_1_container}>
        <div className={style.Imagen_funko_container}>
          {
            FunkoDetalle.imagen === null ?  <Image alt="Imagen del funkopop" className={style.Image_funko} src={imageUrl}/>
            :  <Image alt="Imagen del funkopop" width={450} height={350} layout="responsive" loading="lazy" src={imageUrl}/>
          }
         
        </div>
      </section>

      <section className={style.seccion_2_container}>
        <div className={style.titulo_container}>
          {
            FunkoDetalle.stock === 0 ? 
            <h1 className={style.titulo_funko_sin_stock}>{FunkoDetalle.nombre}</h1>
            :
            <h1 className={style.titulo_funko}>{FunkoDetalle.nombre}</h1>


          }
        </div>

        <div className={style.detalle_funko_container}>
          <p className={style.detalle}>
            Precio c/u:{" "}
            <span className={style.detalle_dato}>${FunkoDetalle.precio}</span>
          </p>
          <p className={style.detalle}>
            Disponibles:{" "}
            <span className={style.detalle_dato}>{FunkoDetalle.stock}</span>
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
            <span  className={style.detalle_dato}>
              <Image alt="estrellita" width={18} src={star}/>
            </span>
          </p>
          <p className={style.detalle}>
            Nro:{" "}
            <span className={style.detalle_dato}>
              #{FunkoDetalle.numerofunko}
            </span>
          </p>

          <div className={style.detalle_valoracion}>
            <p className={style.parrafo_valorar}>Valorar:</p>

            <div className={style.estrellas_container}>
              {
                status === "authenticated" ? <Rating size={37}  onClick={handleRating} />
                : <Rating size={37} readonly={true}/>
              }
            </div>
          </div>
          <div className={style.detalle_cantidad}>
            <label className={style.detalle_cantidad_label} htmlFor="">
              Cantidad:
            </label>
            <input
              className={style.detalle_cantidad_input}
              min={1}
              max={FunkoDetalle.stock}
              type="number"
              value={Cantidad}
              onChange={handleChangeInput}
            />
          </div>
        </div>

        <div className={style.detalle_compra_fav}>
          {FunkoDetalle.stock === 0 ? (
            <button className={style.button_compra_sin_stock}>
              Sin stock!
            </button>
          ) : (
            <button className={style.button_compra} onClick={handleAddToCart}>
              <Image alt="Carrito" src={carrito} />
              Agregar al carrito
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default CardFunkoDetalle;
