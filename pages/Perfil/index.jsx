import { useSession } from "next-auth/react";
import { useState } from "react";
import { getSession } from "next-auth/react";

//Componentes
import Modal from "../../components/Generales/Modal";
import style from "../../styles/user.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png";
import Layout from "../../components/Generales/Layout";

//Funciones
import getAllCiudades from "../../Utils/getCiudades";
import getDataUser from "../../Utils/getDataUser";
import updateUser from "../../Utils/updateUser";

const user = ({ dataUser, ciudades }) => {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  //Estado del formulario que contiene el modal de la actualizacion de los datos del usuario
  const [Nombre, setNombre] = useState(dataUser.nombre);
  const [Apellido, setApellido] = useState(dataUser.apellido);
  const [Direccion, setDireccion] = useState(dataUser.direccion);
  const [AlturaDireccion, setAlturaDireccion] = useState(dataUser.alturadireccion);
  const [codigoPostal, setcodigoPostal] = useState(dataUser.ciudadByCodigopostal.codigopostal);

  const handleSubmit = () => {
    updateUser(
      dataUser.email,
      Nombre,
      Apellido,
      Direccion,
      codigoPostal,
      AlturaDireccion
    );
  };
  return (
    <Layout>
      <div className={style.page_perfil}>
        {/*//////////////////////////////////////////////////////////////////////////////////////////// */}
        <Modal openModal={open} CloseModal={() => setOpen(false)}>
          <div className={style.imagen_container}>
            <Image width={270} alt="logo empresa" src={logo} />
          </div>
          <h3 className={style.leyenda}>Actualice sus datos</h3>
          <form
            className={style.modal_formulario_container}
            onSubmit={handleSubmit}
          >
            <div className={style.input_container}>
              <label className={style.label_input} htmlFor="">
                Nombre:
              </label>
              <input
                type="text"
                value={Nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className={style.input_container}>
              <label className={style.label_input} htmlFor="">
                Apellido:
              </label>
              <input
                type="text"
                value={Apellido}
                onChange={(e) => setApellido(e.target.value)}
              />
            </div>
            <div className={style.input_container}>
              <label className={style.label_input} htmlFor="">
                Dirección:
              </label>
              <input
                type="text"
                value={Direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
            </div>
            <div className={style.input_container}>
              <label className={style.label_input} htmlFor="">
                Altura:
              </label>
              <input
                type="number"
                value={AlturaDireccion}
                onChange={(e) => setAlturaDireccion(e.target.value)}
              />
            </div>
            <div className={style.input_container}>
              <select
                className={style.input_ciudad}
                value={codigoPostal}
                onChange={(e) => setcodigoPostal(e.target.value)}
              >
                <option aria-disabled>Ingrese su ciudad</option>
                {ciudades.map((ciudad) => (
                  <option key={ciudad.codigopostal} value={ciudad.codigopostal}>
                    {ciudad.ciudad}
                  </option>
                ))}
              </select>
            </div>

            <div className={style.input_container}>
              <button type="submit" className={style.button_actualizar}>
                Actualizar
              </button>
            </div>
          </form>
        </Modal>

        {/*//////////////////////////////////////////////////////////////////////////////////////////// */}
        <div className={style.card_principal}>
          <div className={style.data_seccion}>
            <section className={style.seccion_1}>
              <div className={style.img_container}>
                <img className={style.img_perfil} alt="Imagen perfil" />
              </div>
              <h2 className={style.name_user}>
                {dataUser.nombre} {dataUser.apellido}
              </h2>
            </section>

            <section className={style.seccion_2}>
              <p className={style.data_user}>
                Direccion:{" "}
                <span className={style.data_user_info}>
                  {dataUser.direccion} {dataUser.alturadireccion}
                </span>
              </p>
              <p className={style.data_user}>
                Dni:{" "}
                <span className={style.data_user_info}>{dataUser.dni}</span>
              </p>
              <p className={style.data_user}>
                Ciudad:{" "}
                <span className={style.data_user_info}>
                  {dataUser.ciudadByCodigopostal.ciudad}
                </span>
              </p>
              <p className={style.data_user}>
                Correo:{" "}
                <span className={style.data_user_info}>{dataUser.email}</span>
              </p>
            </section>
          </div>
          <div className={style.seccion_3}>
            <button
              className={style.button_editar}
              onClick={() => setOpen(true)}
            >
              Editar
            </button>
            <Link href="/Perfil/compras" className={style.button_compras}>
              Mis compras
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default user;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  } else {
    const dataUser = await getDataUser(session.user.email);
    const ciudades = await getAllCiudades();

    return {
      props: { dataUser, ciudades },
    };
  }
}
