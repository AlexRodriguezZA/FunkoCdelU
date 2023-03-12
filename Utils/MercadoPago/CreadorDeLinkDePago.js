import getDataUser from "../getDataUser";
import crearLinkDePago from "./crearLinkDePago";
async function CreadorDeLinkDePago(email,lineaCarrito){
    //Creamos el objeto usuario
    const datos_user = await getDataUser(email) 
    const user = {
        correo: email,
        nombre: datos_user.nombre + " " + datos_user.apellido,
    }
    
    //Creamos el objeto que luego de los items y lo guardamos en un array --> productos
    let productos = []
    if (lineaCarrito) {
        lineaCarrito.forEach(item => {
        productos.push({
            title: item.productoByIdprod.nombre,
            quantity: item.cantidaddecadaprod,
            currency_id: "ARS",
            category: "entertainment",
            unit_price: item.productoByIdprod.precio
        });
    });
    const linkDePago = await crearLinkDePago(user,productos)
    return linkDePago;
    } else {
        return "Error"
        
    }
    


}
export default CreadorDeLinkDePago;

