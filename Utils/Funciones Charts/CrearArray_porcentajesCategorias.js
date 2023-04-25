import Linea_ventas from "./Linea_ventas";
import getCategorias from "../getCategorias";

async function CrearArray_porcentajesCategorias() {
  const categorias = await getCategorias();
  const linea_ventas = await Linea_ventas();

  const nombre_categorias = categorias.map((cat) => cat.nombrecat);

  const array_nombre_porcentaje = nombre_categorias.map((cat) => {
    let contador = 0;
    linea_ventas.forEach((lineaventa) => {
      if (lineaventa.productoByIdprod.categoriaByIdcat.nombrecat === cat) {
        contador = contador + 1;
      }
    });
    const porcentaje = (contador / linea_ventas.length) * 100;
    const porcentaje_entero = parseInt(porcentaje.toFixed(0));


    return { nombre: cat, porcentaje: porcentaje_entero };
  });

  return array_nombre_porcentaje;
}

export default CrearArray_porcentajesCategorias;
