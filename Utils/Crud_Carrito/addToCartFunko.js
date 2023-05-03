import getLineaCarrito from "./getLineaCarrito.js";
import updateFunkoCart from "./updateFunkoCart.js";
import setFunkoToCart from "./setFunkoToCart.js";
import getIDCarrito from "./getIDCarrito.js";

async function addToCartFunko(cantidad, idprod, precio, email) {
  /* 1-- Encontramos el id_carrito a travez del email con la función de getIDCarrito() 
  2-- Obtenemos con el "id_carrito" de la linea carrito para evaluar si el producto exite ya 
  en dicha linea.
  3-- evaluamos si el idprod está en la linea carrito
    if (idprod){
      updateFunkoCart()
    }
    else{
      setFunkoTocart()
    }

  */
  try {
    const idcarrito = await getIDCarrito(email);
    const lineaCarrito = await getLineaCarrito(idcarrito);
    const Prod_Encontrado = lineaCarrito.find(
      (linea) => linea.idprod === idprod
    );

    if (!Prod_Encontrado) {
      await setFunkoToCart(cantidad, idprod, idcarrito, precio);
    } else {
      let NuevaCantidad = Prod_Encontrado.cantidaddecadaprod + cantidad;
      let NuevoPrecio = NuevaCantidad * precio;
      let LineaPedidoId = Prod_Encontrado.idlineapedido;
      var respuesta =  await updateFunkoCart(NuevaCantidad, NuevoPrecio, LineaPedidoId);
      console.log(respuesta)
      
    }
    if (respuesta?.errors) {
      console.log(respuesta.errors)
      return "no_Cart"      
    }
    else{
      return "success"
    }
  } catch (error) {
    return error;
  }
}

export default addToCartFunko;
