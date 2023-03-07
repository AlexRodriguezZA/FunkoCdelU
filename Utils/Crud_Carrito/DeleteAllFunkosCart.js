async function DeleteAllFunkosCart(idcarrito) {
    const response = await fetch("http://localhost:5000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `mutation {
          deletelineacarrito(input: {idcarritoUser: ${idcarrito}}) {
            clientMutationId
          }
        }`,
      }),
    });
  
    const respuesta = await response.json();
    console.log(respuesta)
  }
  
  export default DeleteAllFunkosCart;
  