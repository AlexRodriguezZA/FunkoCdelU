import logo from "../../assets/Logo_funko.png"
import style from "../styles/Header.module.css"
import Image from 'next/image'
const Header = ({search}) => {
  return (
    <header className={style.main_header_container}>
      <div className={style.img_container}>
        <Image className={style.img_header_logo} src={logo} alt="Logo empresa" />
      </div>

      <form className={style.form_search} action="">
        <input className={style.input_search} onChange={(e)=> search(e.target.value)} placeholder='Buscar nro Funko, nombre Funko, Precio...' type="text" />
      </form>

    </header>
  )
}

export default Header