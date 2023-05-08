import getIDCarrito from "./getIDCarrito";
import getLineaCarrito from "./getLineaCarrito";
//Obtenemos el id carrito mediante el email del usuario
//Luego con el idcarrito obetenemos



async function getCantidadCarrito(email) {
    const idCarrito = await getIDCarrito(email);
    const LineaCarrito = await getLineaCarrito(idCarrito);
  
    let total_productos = 0;
    LineaCarrito.forEach(linea => {
      total_productos += linea.cantidaddecadaprod;
    });
  
    console.log(LineaCarrito);
    console.log(total_productos);
    return total_productos;
  }
  
  export default getCantidadCarrito;
