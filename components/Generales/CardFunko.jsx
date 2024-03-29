//Componentes
import Link from "next/link";
import Image from "next/image";
import style from "../styles/CardFunko.module.css";
import Swal from "sweetalert2";

//Funciones
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import addToCartFunko from "../../Utils/Crud_Carrito/addToCartFunko";
import addFavoritos from "../../Utils/addFavoritos";
import deleteFavoritos from "../../Utils/deleteFavoritos";
import IsFavoriteUser from "../../Utils/IsFavoriteUser";
import DeleteFav from "../../Utils/DeleteFav";
//Assets

import imagenPrubea from "../../assets/no_image.webp";
import corazon from "../../assets/Icons/corazon.svg";
import corazon2 from "../../assets/Icons/corazon2.svg";

const CardFunko = ({ producto, isFavorite }) => {

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
  const [fav, setfav] = useState(true);
  const [text, settext] = useState();
  const [imageUrl, setImageUrl] = useState(`http://localhost:5000/public_funko_img/${producto.imagen}`);
  const [isUserFav, setisUserFav] = useState(false)

  const handle_event_mouseOver = () => {
    settext("Add to cart");
  };
  const handle_event_mouseOut = () => {
    settext("");
  };

 

  useEffect(() => {
    const favorito_del_usuario = async() =>{
      const resp = await IsFavoriteUser(session.user.email, producto.idprod)
      return resp
    }

    const checkFavorite = async () => {

      if (session) {
        const isFavUser = await favorito_del_usuario();
        
        if (isFavUser === true) {
            setisUserFav(true)
            setfav(false)

        }
        
      }
    };
    
    if (isFavorite === true) {
      setfav(false);
    }
    checkFavorite();
  }, [status]);

  const handleDeleteFav = async () => {
    //Evaluamos si está en la seccion de favoritos
    if (isFavorite) {
      const res = await deleteFavoritos(producto.idfav);
      console.log(res)
      setfav(true);

      if (res === "success") {
        window.location.replace(""); //Reiniciamos la página
    }
    }
    else{
      console.log(session)
      console.log("Esta en otra seccion que no la de favoritos")
      await DeleteFav(session.user.email,producto)
      window.location.replace(""); //Reiniciamos la página

    }
   
  };

  const handlePressFav = async () => {
    if (status === "authenticated") {
      const email = session.user.email;
      const res = await addFavoritos(email, producto.idprod);
      console.log(res)
      if (res === "success") {
        setfav(!fav); //cambiamos el icono
        Toast.fire({
          title: `Añadido a sus Favoritos.
                  Se agregó el Funko de "${producto.nombre}"`,
          icon: "success",
        });
        setTimeout(function() {
          window.location.replace(""); //Reiniciamos la página

        }, 1000);
      } else {
        Toast.fire({
          title: "Ya tiene este funko cargado en favoritos",
          icon: "warning",
        });
      }
    } else {
      Toast.fire({
        title: "Error al cargar el Funko, ingrese a su cuenta para realizar la operación.",
        icon: "error",
      });
    }
  };

  const handleAddToCart = async () => {
    if (status === "authenticated") {
      const email = session.user.email;
      const res = await addToCartFunko(
        1,
        producto.idprod,
        producto.precio,
        email
      );
      if (res === "success") {
        Toast.fire({
          title: `Añadido al carrito. 
                  Se agrego el Funko de "${producto.nombre}"`,
          icon: "success",
        });
      } 
      else if (res === "no_Cart"){
        Toast.fire({
          title: `Error al cargar el carrito, no puedo cargar mas del stock disponible, stock: ${producto.stock}`,
          icon: "error",
        });
      }
    } else {
      Toast.fire({
        title: "Error al cargar el Funko, ingrese a su cuenta para poder realizar la operación.",
        icon: "error",
      });
    }
  };
  return (
    <div className={style.Card_container}>
      <Link href={`/Tienda/${producto.idprod}`}>
        <div href="#" className={style.card_img_container}>
          
          {
            producto.imagen === null ? <Image className={style.img} src={imagenPrubea} alt="Imagen de funko"/>
            :   <Image src={imageUrl} width={250} height={200}   loading="lazy"  alt={`Imagen del funko ${producto.nombre}`} />
          }
         
        </div>
      </Link>

      <div className={style.Linea_divisora}></div>

      <section className={style.card_details_container}>
        <div className={style.card_details_container_primeraLinea}>
          <span className={style.numero_funko}>#{producto.numerofunko}</span>
          {producto.stock === 0 ? (
            <h1 className={style.title_funko_agotado}>{producto.nombre}</h1>
          ) : (
            <h1 className={style.title_funko}>{producto.nombre}</h1>
          )}

          
          {isUserFav === true ? (
            <button
              className={style.Button_corazon_fav}
              onClick={() => handleDeleteFav()}
            >
              {fav ? (
                <Image
                  className={style.corazon_fav}
                  width={28}
                  src={corazon2}
                  alt="Corazon de favoritos"
                />
              ) : (
                <Image
                  className={style.corazon_fav}
                  src={corazon}
                  alt="Corazon de favoritos"
                />
              )}
            </button>
          ) : (
            <button
              className={style.Button_corazon_fav}
              onClick={() => handlePressFav()}
            >
              {fav ? (
                <Image
                  className={style.corazon_fav}
                  width={28}
                  src={corazon2}
                  alt="Corazon de favoritos"
                />
              ) : (
                <Image
                  className={style.corazon_fav}
                  src={corazon}
                  alt="Corazon de favoritos"
                />
              )}
            </button>
          )}
        </div>

        <div className={style.card_details_container_segundaLinea}>
          <h2 className={style.categoria_funko}>
            {producto.categoriaByIdcat.nombrecat}
          </h2>
        </div>
        <div className={style.Button_Compra_container}>
          {producto.stock === 0 ? (
            <button className={style.button_addCarrito_sin_stock}>
              <p className={style.price_funko}>Sin stock!</p>
            </button>
          ) : (
            <button
              className={style.button_addCarrito}
              onMouseOut={handle_event_mouseOut}
              onMouseOver={handle_event_mouseOver}
              onClick={handleAddToCart}
            >
              {text ? (
                <p className={style.funko_text_add_to_cart}>{text}</p>
              ) : (
                <p className={style.price_funko}>${producto.precio}</p>
              )}
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default CardFunko;
