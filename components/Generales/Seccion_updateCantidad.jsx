import React from "react";
import style from "../styles/CardCarrito.module.css";
import Loading_Spinner_mini from "./Loading_Spinner_mini";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import add_and_Rest_OneFunko from "../../Utils/Crud_Carrito/addOneFunko";
const Seccion_updateCantidad = ({ cantidad, IdLineaCarrito, stock }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
    setIsRefreshing(true);
  };
  useEffect(() => {
    setIsRefreshing(false);
  }, [cantidad]);

  const HandleAddOneFunko = async (IdLineaCarrito) => {
    await add_and_Rest_OneFunko(IdLineaCarrito, "suma");
    refreshData();
  };

  const HandleRestOneFunko = async (IdLineaCarrito) => {
    await add_and_Rest_OneFunko(IdLineaCarrito, "restar");
    refreshData();
  };
  return (
    <>
      {cantidad === stock ? (
        <button className={style.button}> + </button>
      ) : (
        <button
          className={style.button}
          onClick={() => HandleAddOneFunko(IdLineaCarrito)}
        >
          +
        </button>
      )}

      {isRefreshing ? (
        <Loading_Spinner_mini />
      ) : (
        <span type="number" className={style.total_producto}>
          {cantidad}
        </span>
      )}
      
      {cantidad === stock ? <span style={{color: "red", fontSize: "10px"}}>Máx.</span> : null}

      {cantidad === 1 ? (
        <button className={style.button}>-</button>
      ) : (
        <button
          className={style.button}
          onClick={() => {
            HandleRestOneFunko(IdLineaCarrito);
          }}
        >
          -
        </button>
      )}
    </>
  );
};

export default Seccion_updateCantidad;
