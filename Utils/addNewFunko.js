import setFunko from "./setFunko";
import setImageBackend from "./setImageBackend";

async function addNewFunko(nombre,precio,numero,stock,imagen_nombre,idcat,imagen_file) {
    
    await setFunko(nombre,precio,numero,stock,imagen_nombre,idcat)
    await setImageBackend(imagen_file)
  }
  
  export default addNewFunko;
  