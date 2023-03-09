
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from 'next-auth/react'


function Navbar() {

  //TODO: Hacer andar el navbar
  const {data: session} = useSession()

  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <Link href="/" className="nav__brand">
        Funko C del U
      </Link>
      
      <ul className={active}>
        <li className="nav__item">
          <Link href="/nosotros" className="nav__link">
            Nosotros
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/favoritos" className="nav__link">
            Favoritos
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/Tienda" className="nav__link">
          Tienda
          </Link>
        </li>
        <div className="dropdown">
          <li className="dropbtn">Cuenta</li>
            <div className="dropdown_content">
              {
                !session && <Link href="/loginPage" className="link">Ingresar</Link>
              }
              {
                session &&  <Link href="/perfil" className="link">Perfil</Link>
              }
              {
                session && <Link href="#" className="link" onClick={ ()=> signOut(undefined, { callbackUrl: '/' })}>Cerrar sesion</Link>
              }
            
            </div>
            
        </div> 
          
        <li className="nav__item">
          <Link href="/carrito" className="nav__link">
            <Image src={cart} alt="" />
          </Link>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;