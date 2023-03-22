import styles from "../styles/TablaCompras.module.css";
import Modal from "../Generales/Modal";
import { useState } from "react";

function TablaCompras({ data }) {
  const [open, setOpen] = useState(false);
  const [idVenta, setIdventa] = useState();

  let lineasVentas = []

  const deleteLineaventas = (array)=>{
    for (let i = 0; i < array.length; i++) {
      delete(array[i])  
    }
  }
  const handleOpenModal = (id_venta_usuario) => {
    setOpen(true);
    setIdventa(id_venta_usuario);
  };

  const handlecloseModal = () => {
    setOpen(false);
    setIdventa(null)
    deleteLineaventas(lineasVentas)
  };

  
  return (
    <>
      <Modal openModal={open} CloseModal={handlecloseModal}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Nombre</th>
              <th className={styles.th}>Cant.</th>
              <th className={styles.th}>Precio</th>
              <th className={styles.th}>Subto.</th>
            </tr>
          </thead>
          <tbody>
            {
              idVenta &&
              data.map( compra => {
                if (compra.idventa === idVenta) {
                  compra.lineaventasByIdventa.nodes.map( linea => lineasVentas.push(linea))
                  
                }               
              })
            }

            {
              lineasVentas && lineasVentas.map( (linea) => 
               <tr key={linea.idlinea}>
                <td className={styles.td}>{linea.productoByIdprod.nombre}</td>
                <td className={styles.td}>{linea.cantproduc}</td>
                <td className={styles.td}>${linea.productoByIdprod.precio}</td>
                <td className={styles.td}>${linea.totalprod}</td>

               </tr>
               
            )
            }
          
              
          </tbody>
        </table>
      </Modal>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Monto</th>
            <th className={styles.th}>Fecha</th>
            <th className={styles.th}>Hora</th>
            <th className={styles.th}>Detalle</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((compra) => (
              <tr key={compra.idventa}>
                <td className={styles.td}>${compra.total}</td>
                <td className={styles.td}>{compra.fecha}</td>
                <td className={styles.td}>{compra.hora}</td>
                <td className={styles.td}>
                  <button
                    className={styles.button_detalle}
                    onClick={() => handleOpenModal(compra.idventa)}
                  >
                    Ver
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default TablaCompras;
