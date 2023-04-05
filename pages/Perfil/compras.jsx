//Componentes
import Link from "next/link";
import style from "../../styles/compras.module.css";
import Layout from "../../components/Generales/Layout";
import TablaCompras from "../../components/Generales/TablaCompras";
//Funciones
import getComprasUser from "../../Utils/getComprasUser";
import { getSession } from "next-auth/react";

const compras = ({ compras_user }) => {

  return (
    <Layout>
      <div className={style.compras_container}>
        <section className={style.seccion_button}>
          <Link href="/Perfil" className={style.button_volver}>
            Volver
          </Link>
        </section>
        <div className={style.table_container}>
            <TablaCompras data={compras_user}/>
        </div>
      </div>
    </Layout>
  );
};

export default compras;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/loginPage",
        permanent: false,
      },
    };
  } else {
    if (session.user.email === "funkocdelu@gmail.com"){
      return {
        redirect: {
          destination: "/Dashboard",
          permanent: true,
        },
      };
    }
    const compras_user = await getComprasUser(session.user.email);
    //console.log(compras_user)
    return {
      props: { compras_user },
    };
  }
}
