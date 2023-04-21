//Componentes
import CardCarrito from "../components/Generales/CardCarrito";
import style from "../styles/carrito.module.css";
import Layout from "../components/Generales/Layout";
import Image from "next/image";
import carrito_vacio from "../assets/imagenesPrueba/Carritovacio.png";
import LoadingSpinner from "../components/Generales/Loading_Spinner";
//Funciones y Hooks
import { getSession } from "next-auth/react";
import getIDCarrito from "../Utils/Crud_Carrito/getIDCarrito";
import getLineaCarrito from "../Utils/Crud_Carrito/getLineaCarrito";
import CreadorDeLinkDePago from "../Utils/MercadoPago/CreadorDeLinkDePago";
import DeleteAllFunkosCart from "../Utils/Crud_Carrito/DeleteAllFunkosCart";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Carrito = ({ LineaCarrito, idCarrito, LinkMercadoPago }) => {
  const [TotalCart, setTotalCart] = useState(0);
  
  const [isRefreshing, setIsRefreshing] = useState(false);
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
    setIsRefreshing(true)
  }

  const calcularTotal = () => {
    const suma = LineaCarrito.reduce((a, b) => {
      return a + b.precio;
    }, 0);
    setTotalCart(suma);
  };

  useEffect(() => {
    calcularTotal();
    setIsRefreshing(false)
  }, [LineaCarrito]);

  const handleRealizarPago = () => {
    if (LinkMercadoPago === "Error") {
      alert("error");
    } else {
      router.push(LinkMercadoPago);
    }
  };

  const handleDeleteAllCart = async () => {
    refreshData();
    await DeleteAllFunkosCart(idCarrito);
  };
  return (
    <Layout>
      <div className={style.carrito_page}>
        
        <div className={style.carrito_box}>
          <div className={style.header_carrito}>
            <h2>Tú carrito</h2>
            {
              isRefreshing && <LoadingSpinner/>
            }
            {LineaCarrito.length != 0 && (
              <button
                className={style.button_allremove}
                onClick={handleDeleteAllCart}
                type="reset"
              >
                All remove
              </button>
            )}
          </div>
          <div className={style.linea_divisora}></div>
          <section className={style.cards_carrito_container}>
            {LineaCarrito.length === 0 ? (
              <div className={style.carrito_vacio}>
                <p className={style.carrito_vacio_texto}>
                  Tu carrito está vacío!
                </p>
                <Image width={200} height="auto" priority src={carrito_vacio} />
              </div>
            ) : (
              LineaCarrito.map((linea) => (
                <CardCarrito
                  key={linea.idprod}
                  imagen={linea.productoByIdprod.imagen}
                  nombre={linea.productoByIdprod.nombre}
                  precio={linea.productoByIdprod.precio}
                  categoria={linea.productoByIdprod.categoriaByIdcat.nombrecat}
                  cantidad={linea.cantidaddecadaprod}
                  subtotal={linea.precio}
                  stock={linea.productoByIdprod.stock}
                  IdLineaCarrito={linea.idlineapedido}
                />
              ))
            )}
          </section>
          <div className={style.linea_divisora}></div>

          <section className={style.seccion_carrito_total}>
            <p className={style.total_label}>
              Total: $<span className={style.total}>{TotalCart}</span>
            </p>
            <button className={style.button_pagar} onClick={handleRealizarPago}>
              Pagar
            </button>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Carrito;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/loginPage",
        permanent: false,
      },
    };
  } else {
    if (session.user.email === "funkocdelu@gmail.com"){
      return {
        redirect: {
          destination: "/Dashboard",
          permanent: true,
        },
      };
    }
    const idCarrito = await getIDCarrito(session.user.email);
    const LineaCarrito = await getLineaCarrito(idCarrito);
    const LinkMercadoPago = await CreadorDeLinkDePago(session.user.email,LineaCarrito);

    return {
      props: { LineaCarrito, idCarrito, LinkMercadoPago },
    };
  }
}

//TODO:
//Acordarme de crear el objeto para pasarlo
//CUando me de el link redireccionar con userouter()
