//Componentes
import style from "../styles/Home.module.css";
import MainBanner from "../components/Generales/MainBanner";
import ListCardsProd from "../components/Generales/ListCardsProd";
import GridLayourCategorias from "../components/Generales/GridLayourCategorias";
import Layout from "../components/Generales/Layout";

//Funciones
import getAllProducts from "../Utils/StoreProducts";
import getEmailsUsers from "../Utils/getEmailsUsers";
import { getSession } from "next-auth/react";

const Home = ({ productos }) => {
  const sixProducts = productos.slice(0, 6);
  return (
    <Layout>
      <div className={style.home_container}>
        <MainBanner/>
        <div className={style.title_container}>
          <h1 className={style.title_list_card}>
            Algunos de nuestros <span className={style.span}>Funkos</span>
          </h1>
        </div>
        <ListCardsProd productos={sixProducts} />
        <GridLayourCategorias />
      </div>
    </Layout>
  );
};

export default Home;

export async function getServerSideProps(context) {
  const productos = await getAllProducts();
  const emails = await getEmailsUsers();
  const session = await getSession(context);

  if (session) {
    const emailEncontrado = emails.find(
      (e) => e.email.toLowerCase() === session.user.email
    );

    //Nos permite que el usuario admin pueda entrar el panel 
    if (session.user.email === "funkocdelu@gmail.com"){
    	console.log("UserAdmin")
      return {
        redirect: {
          destination: "/Dashboard",
          permanent: true,
        },
      };
    }
    //Una vez evaluado si el usuario inicío sesión verificamos si está cargado en la BBDD
    if (emailEncontrado) {
      console.log("Logead@");
    } else {
      console.log(session.user.email, "No esta en la BBDD");
      return {
        redirect: {
          destination: "/formulario",
          permanent: true,
        },
      };
    }
  }
  return {
    props: { productos, emails },
  };
}
