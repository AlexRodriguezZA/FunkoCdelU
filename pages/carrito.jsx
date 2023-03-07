//Componentes
import CardCarrito from "../components/Generales/CardCarrito";
import style from "../styles/carrito.module.css";
import Layout from "../components/Generales/Layout";

//Funciones y Hooks
import { getSession } from "next-auth/react";
import getIDCarrito from "../Utils/Crud_Carrito/getIDCarrito";
import getLineaCarrito from "../Utils/Crud_Carrito/getLineaCarrito";
import DeleteAllFunkosCart from "../Utils/Crud_Carrito/DeleteAllFunkosCart";
import { useState,useEffect } from "react";

const Carrito = ({ LineaCarrito, idCarrito }) => {
 
  const [TotalCart, setTotalCart] = useState(0)  

  const calcularTotal = ()=>{
    const suma = LineaCarrito.reduce((a,b)=>{
      return a + b.precio;
    },0)
    setTotalCart(suma)
  }

  useEffect(() => {
    calcularTotal()
  }, [])
  
  const handleDeleteAllCart = async () => {
    window.location.replace(''); //Reiniciamos la página
    await DeleteAllFunkosCart(idCarrito);
  };
  return (
    <Layout>
      <div className={style.carrito_page}>
        <div className={style.carrito_box}>
          <div className={style.header_carrito}>
            <h2>Tú carrito</h2>
            { 
              LineaCarrito.length != 0 &&  
            <button
              className={style.button_allremove}
              onClick={handleDeleteAllCart}
              type="reset">
              All remove
            </button>
            }
            
          </div>
          <div className={style.linea_divisora}></div>
          <section className={style.cards_carrito_container}>
            {LineaCarrito.length === 0 ? (
              <div>No hay productos en el carrito</div>
            ) : (
              LineaCarrito.map((linea) => (
                <CardCarrito
                  key={linea.idprod}
                  nombre={linea.productoByIdprod.nombre}
                  precio={linea.productoByIdprod.precio}
                  categoria={linea.productoByIdprod.categoriaByIdcat.nombrecat}
                  cantidad={linea.cantidaddecadaprod}
                  subtotal={linea.precio}
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
            <button className={style.button_pagar}>Pagar</button>
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
    const idCarrito = await getIDCarrito(session.user.email);
    const LineaCarrito = await getLineaCarrito(idCarrito);
    return {
      props: { LineaCarrito, idCarrito },
    };
  }
}
