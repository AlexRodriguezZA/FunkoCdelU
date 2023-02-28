import Header from "../../components/Generales/Header"
import ListCardsProd from "../../components/Generales/ListCardsProd";
import getAllProducts from "../../Utils/StoreProducts";

import style from "../../styles/tienda.module.css"


const tienda = ({productos}) => {
  return (
    <div className={style.tienda_container}>
      <Header/>
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
      <ListCardsProd productos={productos}/>

    </div>
  )
}
export default tienda;

export async function getServerSideProps() {
  const productos = await getAllProducts()
 
  return {
    props: {productos}, 
  }
} 

