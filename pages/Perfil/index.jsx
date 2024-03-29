//Componentes
import Modal from "../../components/Generales/Modal";
import style from "../../styles/user.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png";
import Layout from "../../components/Generales/Layout";
import Swal from "sweetalert2";

//Funciones
import getAllCiudades from "../../Utils/getCiudades";
import getDataUser from "../../Utils/getDataUser";
import updateUser from "../../Utils/updateUser";
import { useState } from "react";
import { getSession } from "next-auth/react";

const user = ({ dataUser, ciudades, img_user }) => {
  const [open, setOpen] = useState(false);

  //Estado del formulario que contiene el modal de la actualización de los datos del usuario
  const [Nombre, setNombre] = useState(dataUser.nombre);
  const [Apellido, setApellido] = useState(dataUser.apellido);
  const [Direccion, setDireccion] = useState(dataUser.direccion);
  const [Telefono, setTelefono] = useState(dataUser.telefono);

  const [AlturaDireccion, setAlturaDireccion] = useState(
    dataUser.alturadireccion
  );
  const [codigoPostal, setcodigoPostal] = useState(
    dataUser.ciudadByCodigopostal.codigopostal
  );



  const handleDeleteCuenta = async () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Estas seguro de eliminar tú cuenta en Funko C del U?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Eliminar cuenta",
        cancelButtonText: "Cancelar",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };

  const handleSubmit = () => {
    updateUser(
      dataUser.email,
      Nombre,
      Apellido,
      Direccion,
      codigoPostal,
      AlturaDireccion,
      Telefono
    );
  };
  return (
    <Layout title_page={`Funko C del U - ${dataUser.nombre} ${dataUser.apellido} `}>
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
              <label className={style.label_input} htmlFor="">
                Tel.:
              </label>
              <input
                type="text"
                value={Telefono}
                onChange={(e) => setTelefono(e.target.value)}
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
                <Image
                  className={style.img_perfil}
                  src={img_user}
                  width={100}
                  height={100}
                  alt={`Imagen del usuario ${dataUser.nombre} ${dataUser.apellido}`}
                />
              </div>
              <h2 className={style.name_user}>
                {dataUser.nombre} {dataUser.apellido}
              </h2>
            </section>

            <section className={style.seccion_2}>
              <p className={style.data_user}>
                Dirección:{" "}
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
                Tel.:{" "}
                <span className={style.data_user_info}>
                  {dataUser.telefono}
                </span>
              </p>
              <p className={style.data_user}>
                Correo:{" "}
                <span className={style.data_user_info}>{dataUser.email}</span>
              </p>
            </section>
          </div>
          <div className={style.seccion_3}>
            <button className={style.button_eliminar} onClick={handleDeleteCuenta}>Eliminar</button>
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
  const img_user = session.user.image;
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  } else {
    if (session.user.email === "funkocdelu@gmail.com") {
      return {
        redirect: {
          destination: "/Dashboard",
          permanent: true,
        },
      };
    }
    const dataUser = await getDataUser(session.user.email);
    const ciudades = await getAllCiudades();

    return {
      props: { dataUser, ciudades, img_user },
    };
  }
}
