
import React, { useState } from "react";
import style from "../styles/Navbar.module.css"
import cart from "../../assets/imagenesPrueba/cart.svg"
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from 'next-auth/react'


function Navbar() {

  const {data: session} = useSession()

  const [active, setActive] = useState(style.nav__menu);
  const [icon, setIcon] = useState(style.nav__toggler);
  const navToggle = () => {
    if (active === style.nav__menu) {
      setActive(style.nav__menu);
    } else setActive(style.nav__menu);

    // Icon Toggler
    if (icon === style.nav__toggler) {
      setIcon(style.nav__toggler);
    } else setIcon(style.nav__toggler);
  };
  return (
    <nav className={style.nav}>
      <Link href="/" className={style.nav__brand}>
        Funko C del U
      </Link>
      
      <ul className={active}>
        <li className={style.nav__item}>
          <Link href="/nosotros" className={style.nav__link}>
            Nosotros
          </Link>
        </li>
        <li className={style.nav__item}>
          <Link href="/favoritos" className={style.nav__link}>
            Favoritos
          </Link>
        </li>
        <li className={style.nav__item}>
          <Link href="/Productos/productos" className={style.nav__link}>
          Productos
          </Link>
        </li>
        <div class={style.dropdown}>
          <li class={style.dropbtn}>Cuenta</li>
            <div class={style.dropdown_content}>
              {
                !session && <Link href="/loginPage" className={style.link}>Ingresar</Link>
              }
              {
                session &&  <Link href="/perfil" className={style.link}>Perfil</Link>
              }
              {
                session && <Link href="#" className={style.link} onClick={ ()=> signOut(undefined, { callbackUrl: '/' })}>Cerrar sesion</Link>
              }
            
            </div>
            
        </div> 
          
        <li className={style.nav__item}>
          <Link href="/carrito" className={style.nav__link}>
            <Image src={cart} alt="" />
          </Link>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className={style.line1}></div>
        <div className={style.line2}></div>
        <div className={style.line3}></div>
      </div>
    </nav>
  );
}

export default Navbar;