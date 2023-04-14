//Componentes
import Header from "../../components/Generales/Header";
import ListCardsProd from "../../components/Generales/ListCardsProd";
import style from "../../styles/tienda.module.css";
import Layout from "../../components/Generales/Layout";
//Funciones
import getAllProducts from "../../Utils/StoreProducts";
import getCategorias from "../../Utils/getCategorias";
import { useState } from "react";
import useDebounce from "../../hooks/useDebounce";
const tienda = ({ productos, categorias }) => {
  const [Productos, setProductos] = useState(productos);

  const handlerFilterCategorias = (categoria) => {
    if (categoria === "all") {
      setProductos(productos);
      return;
    }
    const filtrado = productos.filter(
      (producto) => producto.categoriaByIdcat.nombrecat === categoria
    );
    setProductos(filtrado);
  };

  const handlerOrderPrice = (order) => {
    if (order === "all") {
      setProductos(productos);
      return;
    }
    if(order === "LowPrice") {
      const OrdenProductosPreciosBajos = productos.sort((a, b) => {
        return a.precio - b.precio;
      });
      console.log("Precio bajos",OrdenProductosPreciosBajos)
      setProductos(OrdenProductosPreciosBajos);

    }
    if (order === "HighPrice") {
      const OrdenProductosPreciosAltos = productos
        .sort((a, b) => {
          return a.precio - b.precio;
        })
        .reverse();
      console.log("Precio altos")
      setProductos(OrdenProductosPreciosAltos);
    }
  };

  const handlerSearch = (search) => {
    if (!search) {
      setProductos(productos);


    } else {
      const filteredData = productos.filter((item) => {
        
        const array_de_valores_funko = Object.values(item)
        //ELiminamos los valores que no necesitamos para la busqueda -> categoria, stock, 
        //idprod, valoración
        delete(array_de_valores_funko[0])
        delete(array_de_valores_funko[1])
        delete(array_de_valores_funko[2])
        delete(array_de_valores_funko[6])
        delete(array_de_valores_funko[7])
        return array_de_valores_funko.join("").toLowerCase().includes(search.toLowerCase());
      });
      
      setProductos(filteredData);
    }
  };
  return (
    <Layout>
      <div className={style.tienda_container}>
        <Header search={handlerSearch} />
        <div className={style.seccion_fitro}>
          <section className={style.filtro_orden}>
            <p className={style.texto}>Ordenar por: </p>
              <select className={style.select_order} onChange={ (e) => handlerOrderPrice(e.target.value)}>
                <option value="all">All</option>
                <option value="LowPrice">Low price</option>
                <option value="HighPrice">High price</option>
              </select>
          </section>

          <section className={style.conteiner_input_cateogoria}>
            <p className={style.texto}> Categorias: </p>
            <select
              className={style.input_categoria}
              onChange={(e) => handlerFilterCategorias(e.target.value)}
            >
              <option value="all">All</option>
              {categorias.map((cat) => (
                <option key={cat.idcat} value={cat.nombrecat}>
                  {cat.nombrecat}
                </option>
              ))}
            </select>
          </section>
        </div>
        { Productos.length === 0 ? (
          <div>No hay resultados</div>
        ) : (
          <ListCardsProd productos={Productos} />
        )}
      </div>
    </Layout>
  );
};
export default tienda;

export async function getStaticProps() {
  const productos = await getAllProducts();
  const categorias = await getCategorias();
  if (!productos) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { productos, categorias },
    revalidate: 20,
  };
}
