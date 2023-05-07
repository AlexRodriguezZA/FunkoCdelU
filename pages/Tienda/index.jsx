//Componentes
import Header from "../../components/Generales/Header";
import ListCardsProd from "../../components/Generales/ListCardsProd";
import style from "../../styles/tienda.module.css";
import Layout from "../../components/Generales/Layout";
//Funciones
import getAllProducts from "../../Utils/StoreProducts";
import getCategorias from "../../Utils/getCategorias";
import { useState } from "react";


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

  const handlerOrderNombre = (order) => {
    if (order === "all") {
      setProductos(productos);
      return;
    }
    if(order === "AZ") {
      const OrdenProductosAZ = [...productos].sort((a, b) => {
        return a.nombre.localeCompare(b.nombre);
      });
      setProductos(OrdenProductosAZ);

    }
    if (order === "ZA") {
      const OrdenProductosZA = [...productos].sort((a, b) => {
        return b.nombre.localeCompare(a.nombre);
      });
      setProductos(OrdenProductosZA);
    }

    //CHEKEAR ESTO
    if (order === "mayor_precio") {
      const OrdenProductosMayor_precio = [...productos].sort((a, b) => {
        return b.precio - a.precio;
      });
      setProductos(OrdenProductosMayor_precio);
    }
    if (order === "menor_precio") {
      const OrdenProductosMayor_precio = [...productos].sort((a, b) => {
        return b.precio - a.precio;
      });
      const menor_precio = OrdenProductosMayor_precio.reverse()
      setProductos(menor_precio);
    }
  };

  const handlerSearch = (search) => {
    if (!search) {
      setProductos(productos);


    } else {
      
      setTimeout(() => {
        const filteredData = productos.filter((item) => {
          const array_de_valores_funko = Object.values(item);
          // Eliminamos los valores que no necesitamos para la búsqueda -> categoría, stock, idprod, valoración
          delete array_de_valores_funko[0];
          delete array_de_valores_funko[1];
          delete array_de_valores_funko[2];
          delete array_de_valores_funko[6];
          delete array_de_valores_funko[7];
          return array_de_valores_funko.join("").toLowerCase().includes(search.toLowerCase());
        });
    
        setProductos(filteredData);
      }, 500); 
    }
  };
  return (
    <Layout>
      <div className={style.tienda_container}>
        <Header search={handlerSearch} />
        <div className={style.seccion_fitro}>

          <section className={style.filtro_orden}>
            <p className={style.texto}>Ordenar por: </p>
             <button className={style.Button_order} onClick={()=>handlerOrderNombre("AZ")}>A-Z</button>
             <button className={style.Button_order} onClick={()=>handlerOrderNombre("ZA")}>Z-A</button>
             <button className={style.Button_order} onClick={()=>handlerOrderNombre("mayor_precio")}>Mayor precio</button>
             <button className={style.Button_order} onClick={()=>handlerOrderNombre("menor_precio")}>Menor precio</button>
             <button className={style.Button_order} onClick={()=>handlerOrderNombre("all")}>All</button>

          </section>

          <section className={style.conteiner_input_cateogoria  }>
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
          <div style={{height: "50vh"}}>No hay resultados</div>
        ) : (
          <ListCardsProd productos={Productos} />
        )}
      </div>
    </Layout>
  );
};
export default tienda;

export async function getServerSideProps() {

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
  };
}
