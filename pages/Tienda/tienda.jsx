import Header from "../../components/Generales/Header"
import ListCardsProd from "../../components/Generales/ListCardsProd";


import style from "../../styles/tienda.module.css"


const tienda = () => {
  return (
    <div className={style.tienda_container}>
      <Header/>

      <div className={style.seccion_fitro}>
        <section className={style.filtro_orden}>
          <p>Ordenar por: </p>
            <section>
              <button>Low price</button>
              <button>high price</button>
              <button>more recent</button> 
            </section>
            
        </section>
      </div>
      <ListCardsProd/>

    </div>
  )
}

export default tienda;