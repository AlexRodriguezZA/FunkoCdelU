import deleteFavoritos from "./deleteFavoritos";
import getDataUser from "./getDataUser";


//LO que hacemos con esta funcion es evaluar que el usuario actual, que esta en sesión 
//pueda eliminar el producto desde cualquier seccion que no sea la seccion de favoritos
//Lo que logramos con esta funcion es
//1 - Encontrar el dni del usuario actual 
//2 - Una vez encontrado el dni lo que hacemos es buscar dentro del producto  (cuando se apreta el boton de fav) 
//si tiene el favorito del usuario actual, si lo encuentra, obetenemos el idfavorito y lo eliminamos
//Todo esto lo podemos hacer debido a que el usuario solo puede tener un favorito del producto, esto es manejado
//con un trigger en la base de datos. 

async function DeleteFav(email,producto) {
    const { dni } = await getDataUser(email)

    const favorito = producto.favoritosByIdprod.nodes.filter( fav => fav.dni === dni)

    await deleteFavoritos(favorito[0].idfavoritos)
  

}

export default DeleteFav;
