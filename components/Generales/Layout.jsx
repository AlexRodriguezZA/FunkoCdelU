import Footer from './Footer'
import Head from 'next/head'
import style from "../styles/Layout.module.css"
import Navbar2 from './Navbar2'
import WhatsAppButton from './WhatsAppButton'
const Layout = ({children}) => {
  return (
    <>
      <Head>
        <title>Funko C del U</title>
        <meta property="og:title" content="My page title" key="title" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,100;1,300&display=swap" rel="stylesheet"></link>
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