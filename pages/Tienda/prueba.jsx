import CardFunkoDetalle from "../../components/Generales/CardFunkoDetalle"
import Seccion_comentarios from "../../components/Generales/Comentarios/Seccion_comentarios"
import FunkoSimilares from "../../components/Generales/FunkoSimilares"
import style from "../../styles/Funko_detalle_page.module.css"
const index = () => {
  return (
    <div className={style.Funko_detalle_page}>

    <CardFunkoDetalle/>
    <Seccion_comentarios/>
    {/*<FunkoSimilares/>*/}

    </div>
  )
}

export default index


