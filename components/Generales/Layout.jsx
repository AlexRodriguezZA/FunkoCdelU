import Footer from './Footer'
import Head from 'next/head'
import style from "../styles/Layout.module.css"
import Navbar2 from './Navbar2'
import WhatsAppButton from './WhatsAppButton'
const Layout = ({children, title_page}) => {
  return (
    <>
      <Head>
        <title>{title_page}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta property="og:title" content="Funko C del U" key="title" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Language" content="es" />
        <meta charset="UTF-8" />
        <meta name="description" content="Ecommerce creador con la finalidad de vender funkopops" />
        <meta name="keywords" content="funko, Funkopops, colecionables, Tienda de Funkos, Figuras coleccionables, Figuras de acción" />
        <meta name="author" content="Alex Rodriguez" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,100;1,300&display=swap"
        />
      </Head>
      <Navbar2/>
      
      <div className={style.LayoutContent}>
        {children}
      </div>
      <WhatsAppButton/>
      <Footer/>
    </>
  )
}

export default Layout