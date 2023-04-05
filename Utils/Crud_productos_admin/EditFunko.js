import setImageBackend from "../setImageBackend";
import updateFunko from "./updateFunko";

async function EditFunko(nombre,precio,numero,stock,imagen_nombre,idcat,idprod, imagen_file = null) {
    
  
    await updateFunko(idcat,nombre,numero,precio,stock,idprod,imagen_nombre)
    
    
    if (imagen_file != null){
      await setImageBackend(imagen_file)

    }
  }
  
  export default EditFunko;
  