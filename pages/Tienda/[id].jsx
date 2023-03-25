//Componentes
import CardFunkoDetalle from "../../components/Generales/CardFunkoDetalle";
import Seccion_comentarios from "../../components/Generales/Comentarios/Seccion_comentarios";
import style from "../../styles/Funko_detalle_page.module.css";
import Layout from "../../components/Generales/Layout";

//Funciones
import getDetalleFunko from "../../Utils/getFunkoDetalle";
import getAllProducts from "../../Utils/StoreProducts";


const index = ({ FunkoDetalle }) => {


  return (
    <Layout>
      <div className={style.Funko_detalle_page}>
        <CardFunkoDetalle FunkoDetalle={FunkoDetalle} />
        <Seccion_comentarios ComentariosFunko={FunkoDetalle} />
      </div>
    </Layout>
  );
};

export default index;

//obetenemos todos los id y usamos como path
export async function getStaticPaths() {
  try {
    const productos = await getAllProducts();
    const paths = productos.map(({ idprod }) => ({
      params: { id: `${idprod}` },
    }));
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log("aaa", error);
  }
}

//obetenemos el datos en si del producto y todos sus detalles

export async function getStaticProps({ params }) {
  try {
    const FunkoDetalle = await getDetalleFunko(params.id);
    return {
      props: {
        FunkoDetalle,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
