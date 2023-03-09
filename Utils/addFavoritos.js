import getFavoritosUser from "./getFavoritosUser";
import setFavoritos from "./setFavoritos";
import getDataUser from "./getDataUser";
async function addFavoritos(email,idprod) {
  try {
    // 1-- Obetenemos el dni a travez del email
    //2-- Con el dni y el idprod seteamos el funko a los fav del usuario
    const dni_user = await getDataUser(email);
    const res = await setFavoritos(dni_user.dni,idprod)
    if (Object.keys(res).length === 1) {
        return "success"
        
    } 
  } catch (error) {
    return error;
  }
}

export default addFavoritos;
