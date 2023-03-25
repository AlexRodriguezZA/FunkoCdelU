import style from "../../styles/Comentario.module.css";

//Funciones
import { useSession } from "next-auth/react";

const Comentario = ({ comentarioData }) => {
const { data: session } = useSession()
  

  return (
    <div className={style.user_comment_container}>
      <div className={style.user_comment_header}>
        <h3 className={style.h3}>
          {comentarioData.usuarioByDni.nombre}{" "}
          {comentarioData.usuarioByDni.apellido}
        </h3>
        <span className={style.span}>{comentarioData.fecha}</span>
      </div>
      <div className={style.user_comment_body}>
        <p>{comentarioData.contenido}</p>

        {session && (
          <button className={style.button_remove}>Eliminar</button>
        )}

      </div>
    </div>
  );
};

export default Comentario;
