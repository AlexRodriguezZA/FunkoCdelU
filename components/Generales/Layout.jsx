import React from 'react'
import Navbar from "../Generales/Navbar"
import Head from 'next/head'
import style from "../styles/Layout.module.css"

const Layout = ({children}) => {
  return (
    <>
      <Head>
        <title>Funko C del U</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Navbar/>
      
      <div className={style.LayoutContent}>
        {children}
      </div>
      
    </>
  )
}

export default Layout