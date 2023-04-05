import getLineaCarritoByid from "./getLineaCarritoByid";
import updateFunkoCart from "./updateFunkoCart";
import getDetalleFunko from "../getFunkoDetalle";
async function add_and_Rest_OneFunko(idlineaCarrito, accion) {
    
    //DEPENDIENDO DE LA ACCIÓN SI ES SUMA O RESTA VAMOS A PODER Actulizar la linea carrito 
    if (accion === "suma") {
        const {cantidaddecadaprod} = await getLineaCarritoByid(idlineaCarrito)
        var {idprod} = await getLineaCarritoByid(idlineaCarrito)

        var nuevo_cantidad = cantidaddecadaprod + 1;   
 
    }
    else if (accion === "restar") {
        const {cantidaddecadaprod} = await getLineaCarritoByid(idlineaCarrito)
        var {idprod} = await getLineaCarritoByid(idlineaCarrito)

        var nuevo_cantidad = cantidaddecadaprod - 1; 
        
    }

    const {precio} = await getDetalleFunko(idprod) 
    let nuevo_subtotal = nuevo_cantidad * precio;
    await updateFunkoCart(nuevo_cantidad,nuevo_subtotal,idlineaCarrito)
}
  
  export default add_and_Rest_OneFunko;
  