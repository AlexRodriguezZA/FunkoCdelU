const mercadopago = require('mercadopago')
async function crearLinkDePago(usuario, items)
{
    //TODO: cambiar siempre la url de la notificcion
    const URL_NOTIFICACION = "https://0b93-186-127-142-205.ngrok-free.app"
    const linkFrontEnd = 'http://localhost:3000'
    mercadopago.configure({access_token: "TEST-5873713881795945-030921-d57166b7b2e69778a0aee6a8bca9190b-1327386578"});

    const preference = {
        metadata:{
            idUser: usuario.correo,
        },
        payer: {
            name: usuario.nombre,
            email: usuario.correo,
        },
        items: items,
        back_urls: {
            success: `${linkFrontEnd}/`,
            failure: `${linkFrontEnd}/carrito`,
            pending: `${linkFrontEnd}/carrito`,
        },
        auto_return: 'approved',
        notification_url: `${URL_NOTIFICACION}/notificar`,
    };

    const link =  mercadopago.preferences
    .create(preference)
    .then(function (response) {
        return response.body.sandbox_init_point;
    })
    .catch(function (error) {
        console.log(error);
        return null;
    });

    return link

}

export default crearLinkDePago;


/*function getItems(usuario)
{
    let items = [];

    if (usuario.carrito.items)
    {
        usuario.carrito.items.forEach(item => 
        {
            const precioNeto = item.libro.precio
            let precio = precioNeto

            if (usuario.carrito.cupon != null)
            {
                precio = precio - (+precioNeto * (usuario.carrito.cupon.porc_descuento/100))
            }

            items.push({
                title: item.libro.titulo,
                quantity: (+item.cantidad),
                currency_id: "ARS",
                category: "Libro",
                unit_price: +precio
            });
        });

    }

    return items
    
} 
*/
