import React from 'react'
import google from "../../assets/imagenesPrueba/google.svg"
import logo from '../../assets/logo.png'
import Image from 'next/image'
import style from "../styles/LoginCard.module.css"
import {  signIn  } from 'next-auth/react'


const LoginCard = () => {
    return (
        <div className={style.loginContainer}>
        <div className={style.imageLogoContainer}>
            <Image src={logo} alt="" />
        </div>
        <p className={style.textoBienvenida}>Bienvenido!</p>
        <div className={style.lineaDivisora}></div>
        <section className={style.buttonContainer}>
            <button className={style.ButtonSingup} onClick={()=>signIn( "google", { callbackUrl: '/' })}>
                <p className={style.textoSignup}>Sign in with google</p>
                <Image className={style.google} src={google} alt="" />
            </button>

        </section>

    </div>
        )
    
  
}

export default LoginCard