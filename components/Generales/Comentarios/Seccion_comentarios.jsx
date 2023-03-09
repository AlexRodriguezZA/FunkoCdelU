import { useState } from "react";
import Comentario from "./Comentario";
import { useSession } from "next-auth/react";
import style from "../../styles/Seccion_comentarios.module.css";
import getDataUser from "../../../Utils/getDataUser";
import setComentario from "../../../Utils/setComentario";

const Seccion_comentarios = ({ ComentariosFunko }) => {
  const { data: session } = useSession();

  const [Contenido, setContenido] = useState("");
  const [Idprod, setIdprod] = useState(0);
  const [Dni, setDni] = useState(0);

  const handleSendComentario = async (e) => {
    e.preventDefault();
    //Obtenemos el dni del usuario que esta logeado
    const dataUser_dni = await getDataUser(session.user.email);
    setDni(dataUser_dni.dni);
    setIdprod(ComentariosFunko.idprod);
    setComentario(Contenido, Dni, Idprod);
    setContenido("");
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
            key={comentario.idcomentario}
            comentarioData={comentario}
          />
        ))}
      </section>
    </div>
  );
};

export default Seccion_comentarios;
