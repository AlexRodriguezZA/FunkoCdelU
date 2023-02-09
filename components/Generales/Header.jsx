import logo from "../../assets/logo.png"
import style from "../styles/Header.module.css"
import Image from 'next/image'
const Header = () => {
  return (
    <header className={style.main_header_container}>
      <div className={style.img_container}>
       <Image  className={style.img_header_logo} src={logo} alt="Logo empresa" /> 
      </div>

      <form className={style.form_search} action="">
        <input className={style.input_search} placeholder='Buscar nro serie, categoria, nombre, etc...' type="text" />
      </form>    

    </header>
  )
}

export default Header