import CardFunko from "./CardFunko";
import style from "../styles/ListCardsProd.module.css";

const ListCardsProd = ({ productos, isFavorite }) => {
  return (
    <div className={style.CardsList_container}>
      {productos.map((producto) => (
        <CardFunko key={producto.idprod} producto={producto} isFavorite={isFavorite}/>
      ))}
    </div>
  );
};

export default ListCardsProd;
