async function getLineaCarritoByid(idlineaCarrito) {
    const response = await fetch("http://localhost:5000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query{
            lineacarritoByIdlineapedido(idlineapedido: ${idlineaCarrito}) {
              cantidaddecadaprod
              precio
              idprod
            }
          }
          
        `,
      }),
    });
  
    const respuesta = await response.json();
    return respuesta.data.lineacarritoByIdlineapedido;
}
  
export default getLineaCarritoByid;
  
