//Componentes
import style from "../../styles/Comentario.module.css";
import { BiEditAlt, BiTrash, BiSave } from "react-icons/bi";
import Loading_Spinner_mini from "../Loading_Spinner_mini";

//Funciones
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import deleteComentario from "../../../Utils/deleteComentario";
import EditComentario from "../../../Utils/EditComentario";


const Comentario = ({ comentarioData, Dni_user_coment }) => {
  const [ContenidoComentario, setContenidoComentario] = useState(
    comentarioData.contenido
  );
  const [IsEdit, setIsEdit] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
    setIsRefreshing(true);
  };

  useEffect(() => {
    setIsEdit(false);
    setIsRefreshing(false);
  }, [comentarioData]);

  const handleDeleteComentario = async () => {
    await deleteComentario(comentarioData.idcomentario);
    refreshData();
  };

  //CON ESTAS FUNCIONES LO QUE HACEMOS ES ABRIR EL INPUT DE EDICIÓN Y CERRARLO.
  const handleOpenEditComentario = () => {
    setIsEdit(true);
  };

  const handleCloseEditComentario = () => {
    setIsEdit(false);
    setContenidoComentario(comentarioData.contenido);
  };
  //CON ESTA FUNCION LO QUE HACEMOS MANDAR LA INFORMACION AL BACKEND
  const handleSaveEditComentario = async () => {
    await EditComentario(comentarioData.idcomentario, ContenidoComentario);
    refreshData();
  };

  return (
    <div className={style.user_comment_container}>
      <div className={style.user_comment_header}>
        {Dni_user_coment === comentarioData.dni ? (
          <h3 className={style.h3}>Tú</h3>
        ) : (
          <h3 className={style.h3}>
            {comentarioData.usuarioByDni.nombre}{" "}
            {comentarioData.usuarioByDni.apellido}
          </h3>
        )}

        <span className={style.span}>{comentarioData.fecha}</span>
      </div>
      <div className={style.user_comment_body}>
        {IsEdit === false ? (
          <p>{comentarioData.contenido}</p>
        ) : (
          <input
            className={style.input_edit}
            value={ContenidoComentario}
            onChange={(e) => setContenidoComentario(e.target.value)}
            type="text"
          />
        )}

        {Dni_user_coment === comentarioData.dni && IsEdit === false && (
          <div className={style.button_container}>
            {isRefreshing && <Loading_Spinner_mini />}
            <button
              className={style.button_edit}
              onClick={handleOpenEditComentario}
            >
              <BiEditAlt />
            </button>
            <button
              className={style.button_remove}
              onClick={handleDeleteComentario}
            >
              <BiTrash />
            </button>
          </div>
        )}

        {Dni_user_coment === comentarioData.dni && IsEdit === true && (
          <div className={style.button_container}>
            {isRefreshing && <Loading_Spinner_mini />}

            <button
              className={style.button_edit}
              onClick={() => handleSaveEditComentario()}
            >
              <BiSave />
            </button>
            <button
              className={style.button_remove}
              onClick={handleCloseEditComentario}
            >
              X
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comentario;
