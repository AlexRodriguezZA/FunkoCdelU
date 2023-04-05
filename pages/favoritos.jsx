//Componentes
import ListCardsProd from "../components/Generales/ListCardsProd";
import style from "../styles/favoritos.module.css";
import Layout from "../components/Generales/Layout";

//Funciones
import { useState, useEffect } from "react";
import getDataUser from "../Utils/getDataUser";
import getFavoritosUser from "../Utils/getFavoritosUser";
import { getSession } from "next-auth/react";

//Nota: como el prop de "favoritos" nos llega en un array de objetos de diferente estructura
// al que el componente card_funko nos permite procesar, la solución que planteo es la siguiente:
//Creamos un objeto de estructura similar a la aceptada por el card funko y luego los datos de "favoritos"
//lo copiamos en el objeto nuevo para luego poder guardarlos en un array y a ese array poder pasarlo
//hacia la listcardprod.

const Favoritos = ({ favoritos }) => {
  const [NewArrayFunkosFav, setNewArrayFunkosFav] = useState([]);

  const CrearObjetoNuevo = () => {
    const resultado = favoritos.map((fav) => {
      const NewObjFunko = {
        idfav: fav.idfavoritos,
        idprod: fav.productoByIdprod.idprod,
        nombre: fav.productoByIdprod.nombre,
        numerofunko: fav.productoByIdprod.numerofunko,
        precio: fav.productoByIdprod.precio,
        stock: fav.productoByIdprod.stock,
        categoriaByIdcat: {
          nombrecat: fav.productoByIdprod.categoriaByIdcat.nombrecat,
        },
      };
      return NewObjFunko;
    });
    setNewArrayFunkosFav(resultado);
  };

  useEffect(() => {
    CrearObjetoNuevo();
  }, []);

  return (
    <Layout>
      <div className={style.favoritos_container}>
        <div className={style.title_favoritos_container}>
          <h2 className={style.titulo_favoritos}>Tus favoritos</h2>
        </div>
        <section className={style.funko_container}>
          {NewArrayFunkosFav.length > 0 ? (
            <ListCardsProd productos={NewArrayFunkosFav} isFavorite={true}/>
          ) : (
            <div>No hay favoritos aun</div>
          )}
        </section>
      </div>
    </Layout>
  );
};

export default Favoritos;

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
    const dataUser = await getDataUser(session.user.email);
    const favoritos = await getFavoritosUser(dataUser.dni);
    return {
      props: { favoritos },
    };
  }
}
