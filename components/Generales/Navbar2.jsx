//Componentes
import Link from "next/link";
import Image from "next/image";
import cart from "../../assets/Icons/cart.svg"

//Funciones
import { useSession, signOut } from 'next-auth/react'
import React, { useState } from "react";
import { useEffect } from "react";
import getCantidadCarrito from "../../Utils/Crud_Carrito/getCantidadCarrito";

function Navbar2() {

  const { data: session, status } = useSession()
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  


  
  return (
    <nav className="nav">
      <Link href="/" className="nav__brand">
        Inicio
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
              session && <Link href="/Perfil" className="link">Perfil</Link>
            }
            {
              session && <Link href="#" className="link" onClick={() => signOut({callbackUrl: 'http://localhost:3000/' })}>Cerrar sesión</Link>
            }

          </div>

        </div>
        <li className="nav__item">
            <Link className="nav__link" href="/carrito">
              <Image src={cart} alt="Carrito" />
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

export default Navbar2;