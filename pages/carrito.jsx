//Componentes
import CardCarrito from "../components/Generales/CardCarrito";
import style from "../styles/carrito.module.css";
import Layout from "../components/Generales/Layout";


//Funciones y Hooks
import { getSession } from "next-auth/react";
import getIDCarrito from "../Utils/Crud_Carrito/getIDCarrito"
import getLineaCarrito from "../Utils/Crud_Carrito/getLineaCarrito";

const Carrito = ({LineaCarrito}) => {
  return (
    <Layout>
      <div className={style.carrito_page}>
        <div className={style.carrito_box}>
          <div className={style.header_carrito}>
            <h2>Tú carrito</h2>
            <button className={style.button_allremove}>All remove</button>
          </div>
          <div className={style.linea_divisora}></div>
          <section className={style.cards_carrito_container}>
            {
              LineaCarrito.length === 0 ? <div>NO hay productos en el carrito</div> 
              : LineaCarrito.map((linea)=>
                <CardCarrito
                key={linea.idprod} 
                nombre={linea.productoByIdprod.nombre}
                precio={linea.productoByIdprod.precio}
                categoria={linea.productoByIdprod.categoriaByIdcat.nombrecat}
                cantidad={linea.cantidaddecadaprod}
                subtotal={linea.precio}/>
              ) 

            }
          </section>
          <div className={style.linea_divisora}></div>

          <section className={style.seccion_carrito_total}>
            <p className={style.total_label}>
              Total: $<span className={style.total}>200000</span>
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
    const idCarrito = await getIDCarrito(session.user.email)
    const LineaCarrito = await getLineaCarrito(idCarrito)
    return {
      props: { LineaCarrito },
    };
  }
}
