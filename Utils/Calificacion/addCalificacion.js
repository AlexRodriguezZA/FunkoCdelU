import setCalificacion from "./setCalificacion";
import getAllCalificaciones from "./getAllCalificaciones";
import updateCalificacion from "./updateCalificacion";

async function addCalificacion(calificacion,dni,idprod) {
  //Debemos evaluar si el usuario realizo una calificaicon a dicho producto
  //si la realizo la debemos actulizar de los contrario 

  const calificaciones = await getAllCalificaciones()
  const calificacionFiltrada = calificaciones.filter( calif => calif.idprod === idprod && calif.dni === dni)

  if (calificacionFiltrada.length === 1){
    await updateCalificacion(calificacion,calificacionFiltrada[0].idcalif)
  }
  else{
    const res =  await setCalificacion(calificacion,dni,idprod)
    return res;
  
  }

}

export default addCalificacion;
