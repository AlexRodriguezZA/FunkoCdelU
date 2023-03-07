async function DeleteLineaCarrito(idlineaCarrito) {
    const response = await fetch("http://localhost:5000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `mutation {
            deleteLineacarritoByIdlineapedido(input: {idlineapedido: ${idlineaCarrito}}) {
              clientMutationId
            }
          }
          `,
      }),
    });
  
    const respuesta = await response.json();
    console.log(respuesta)
  }
  
  export default DeleteLineaCarrito;
  