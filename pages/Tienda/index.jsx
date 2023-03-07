//Componentes
import Header from "../../components/Generales/Header";
import ListCardsProd from "../../components/Generales/ListCardsProd";
import style from "../../styles/tienda.module.css";
import Layout from "../../components/Generales/Layout";
//Funciones
import getAllProducts from "../../Utils/StoreProducts";

const tienda = ({ productos }) => {
  return (
    <Layout>
      <div className={style.tienda_container}>
        <Header />
        <div className={style.seccion_fitro}>
          <section className={style.filtro_orden}>
            <p className={style.texto}>Ordenar por: </p>
            <section className={style.button_seccion}>
              <button className={style.button_orden}>Low price</button>
              <button className={style.button_orden}>High price</button>
              <button className={style.button_orden}>More recent</button>
            </section>
          </section>
          <section className={style.filtro_order_select}>
            <select className={style.select_order}>
              <option>Ordenar por</option>
              <option>Low price</option>
              <option>High price</option>
              <option>More recent</option>
            </select>
          </section>
        </div>
        <ListCardsProd productos={productos} />
      </div>
    </Layout>
  );
};
export default tienda;

export async function getStaticProps() {
  const productos = await getAllProducts();

  if (!productos) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { productos },
    revalidate: 20,
  };
}
