import getFavoritosUser from "./getFavoritosUser";
import getDataUser from "./getDataUser";
async function IsFavoriteUser(email,idprod) {
    const { dni } = await getDataUser(email)
    const favoritos = await getFavoritosUser(dni); 
    const idEncontrado = favoritos.find(favorito => favorito.dni === dni && favorito.productoByIdprod.idprod === idprod);

    if (idEncontrado) {
        return true;
    }
    else{
        return false;
    }

  }
  
  export default IsFavoriteUser;
  