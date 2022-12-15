//TODO: aca iria lo que es la tienda en sí

import CardFunko from "../../components/Generales/CardFunko"
import Seccion_comentarios from "../../components/Generales/Comentarios/Seccion_comentarios"
import FunkoSimilares from "../../components/Generales/FunkoSimilares"
const index = () => {
  return (
    <div>

    <CardFunko showAs="card-DetalleProducto"/>
    <Seccion_comentarios/>
    <FunkoSimilares/>

    </div>
  )
}

export default index