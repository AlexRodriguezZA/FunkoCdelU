import style from "../../styles/user.module.css"
import Link from 'next/link'
import Image from 'next/image'
import logo from "../../assets/logo.png"
import 'react-responsive-modal/styles.css';
import { useSession } from 'next-auth/react'
import { Modal } from 'react-responsive-modal';
import { useState } from 'react';
import getDataUser from '../../Utils/getDataUser';
import { getSession } from 'next-auth/react'
import getAllCiudades from '../../Utils/getCiudades'



const user = ({dataUser,ciudades}) => {
  const {data: session} = useSession()
  const [open, setOpen] = useState(false);
  console.log(dataUser)
  const onOpenModal = () => {setOpen(true)};
  const onCloseModal = () => setOpen(false);


  if (session) {
    return (
      <div className={style.page_perfil}>
        {/*//////////////////////////////////////////////////////////////////////////////////////////// */}

        <Modal open={open} onClose={onCloseModal}  center>
          <div>
            <Image width={270} alt="logo empresa" src={logo}/>
          </div>
          <h3 className={style.leyenda}>Actualice sus datos</h3>
        <form className={style.modal_formulario_container}>
          <div className={style.input_container}>
            <label className={style.label_input} htmlFor="">Nombre:</label>
            <input type="text" name="" id="" />
          </div>
          <div className={style.input_container}>
            <label className={style.label_input} htmlFor="">Apellido:</label>
            <input type="text" name="" id="" />
          </div>
          <div className={style.input_container}>
            <label className={style.label_input} htmlFor="">Dirección:</label>
            <input type="text" name="" id="" />
          </div>
          <div className={style.input_container}>
            <label className={style.label_input} htmlFor="">Altura:</label>
            <input type="number" name="" id="" />
          </div>
          <div className={style.input_container}>
            <select className={style.input_ciudad} name="" id="">
            <option aria-disabled>Ingrese su ciudad</option>
            {ciudades.map( (ciudad) => <option  key={ciudad.codigopostal} 
                                                value={ciudad.codigopostal}>{ciudad.ciudad}</option>)}
            </select>
          </div>
          
          <div className={style.input_container}>
            <button type="submit" className={style.button_actualizar}>Actualizar</button>
          </div>
        </form>
        </Modal>

        {/*//////////////////////////////////////////////////////////////////////////////////////////// */}
        <div className={style.card_principal}>
          <div className={style.data_seccion}>
            <section className={style.seccion_1}>
              <div className={style.img_container}>
                <img className={style.img_perfil} src={session.user.image} alt="" />
              </div>
              <h2 className={style.name_user}>{dataUser.nombre} {dataUser.apellido}</h2>
            </section>

            <section className={style.seccion_2}>
              <p className={style.data_user}>Direccion: <span className={style.data_user_info}>{dataUser.direccion}</span></p>
              <p className={style.data_user}>Altura: <span className={style.data_user_info}>{dataUser.alturadireccion}</span></p>
              <p className={style.data_user}>Ciudad: <span className={style.data_user_info}>{dataUser.ciudadByCodigopostal.ciudad}</span></p>
              <p className={style.data_user}>Correo: <span className={style.data_user_info}>{dataUser.email}</span></p>  
            </section>
          </div>
          <div className={style.seccion_3}>
            <button className={style.button_editar} onClick={onOpenModal}>Editar</button>
            <Link href="/Perfil/compras" className={style.button_compras}>Mis compras</Link>
          </div>
        </div>
        
           
      </div>
    )
    
  }else{
    return(
        <div>Ingrese con su cuenta</div>
 
    )
  }
  
}

export default user;

export async function getServerSideProps(context) {
  const session = await getSession(context)
  const dataUser = await getDataUser(session.user.email)
  const ciudades = await getAllCiudades()


  return {
    props: {dataUser,ciudades}, 
  }
} 


