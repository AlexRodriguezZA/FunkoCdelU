async function updateFunkoCart(cantidad, precio,idlineaPedido) {
    
    const response = await fetch("http://localhost:5000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `mutation {
        updateLineacarritoByIdlineapedido(
          input: {lineacarritoPatch: {
            cantidaddecadaprod: ${cantidad}, 
            precio: ${precio}}, 
            idlineapedido: ${idlineaPedido}}
        ) {
          clientMutationId
        }
      }
      
      `,
    }),
  });

  const respuesta = await response.json();
  return respuesta;
}

export default updateFunkoCart;
