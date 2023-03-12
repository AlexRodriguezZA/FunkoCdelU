import React from "react";
import Image from "next/image";
import Funko from "../../assets/Funko_Categorias/funko3.png";
import style from "../styles/MainBanner.module.css";
import Link from "next/link";
function MainBanner() {
  return (
    <div className={style.banner_container}>
      <div className={style.textos_container}>
        <h1 className={style.Title}>Funko C del U</h1>
        <p className={style.parrafo}>
          La mejor calidad en Funkos del pais desde 2018
        </p>
        <Link href="/Tienda" className={style.button_tienda}>
            tienda
        </Link>

      </div>
      <div className={style.img_container}>
        <Image className={style.img} src={Funko} alt="Main banner" />
      </div>
    </div>
  );
}

export default MainBanner;
