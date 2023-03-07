async function setFunkoToCart(cantidad, idprod, idcarrito, precio) {
    let total = (cantidad*precio);
    const response = await fetch("http://localhost:5000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `mutation {
                  createLineacarrito(
                    input: {lineacarrito: {cantidaddecadaprod: ${cantidad}, 
                                          idcarrito: ${idcarrito}, 
                                          idprod: ${idprod}, precio: ${total}}}
                  ) {
                    clientMutationId
                  }
                }
                
                `,
      }),
    });
  
    const respuesta = await response.json();
    console.log(respuesta)
  }
  
  export default setFunkoToCart;
  