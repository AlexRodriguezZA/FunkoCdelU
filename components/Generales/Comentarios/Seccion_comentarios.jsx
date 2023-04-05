//Componentes
import style from "../../styles/Seccion_comentarios.module.css";
import Comentario from "./Comentario";

//Funciones
import { useState } from "react";
import { useSession } from "next-auth/react";
import getDataUser from "../../../Utils/getDataUser";
import setComentario from "../../../Utils/setComentario";
import { useEffect } from "react";
import { useRouter } from 'next/router';

const Seccion_comentarios = ({ ComentariosFunko }) => {
  const { data: session, status } = useSession();
  const [Contenido, setContenido] = useState("");
  const [DniUserComent, setDniUserComent] = useState(null);

  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  }

  
  useEffect(() => {
    if (status === "authenticated") {
      const hadleIsUserComent = async () => {
        const { dni } = await getDataUser(session.user.email);
        setDniUserComent(dni);
      };
      hadleIsUserComent();
    }
  }, [status, session]);

  const handleSendComentario = async (e) => {
    e.preventDefault()
    //Obtenemos el dni del usuario que esta logueado
    const dataUser_dni = await getDataUser(session.user.email);
    const dni = dataUser_dni.dni;
    const idProd = ComentariosFunko.idprod;
    await setComentario(Contenido, dni, idProd);
    setContenido("");
    refreshData();
  };

  const handleResetTextArea = () => {
    setContenido("");
  };

  return (
    <div className={style.Seccion_comentario_container}>
      <h2 className={style.Seccion_comentario_titulo}>Comentarios</h2>
      <form className={style.comentario_container}>
        {session && (
          <div className={style.input_comentario_container}>
            <textarea
              value={Contenido}
              required
              onChange={(e) => setContenido(e.target.value)}
              className={style.input_comentario}
              maxLength={100}
              placeholder="Agregue un comentario..."
              cols="100"
              rows="6"
            ></textarea>
          </div>
        )}

        {session && (
          <div className={style.buttons_container}>
            <button
              onClick={handleSendComentario}
              className={style.button_enviar}
            >
              Enviar
            </button>
            <button
              onClick={handleResetTextArea}
              className={style.button_cancelar}
            >
              Cancelar
            </button>
          </div>
        )}
      </form>

      <section className={style.seccion_comentarios_totales}>
        {ComentariosFunko.comentariosByIdprod.nodes.map((comentario) => (
          <Comentario
            Dni_user_coment={DniUserComent}
            key={comentario.idcomentario}
            comentarioData={comentario}
          />
        ))}
      </section>
    </div>
  );
};

export default Seccion_comentarios;
