async function deleteProducto(idprod) {
  const response = await fetch("http://localhost:5000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `mutation {
                deleteProductoByIdprod(input: {idprod: ${idprod}}) {
                  clientMutationId
                }
              }
              
              `,
    }),
  });

  const respuesta = await response.json();
  return respuesta;
}
export default deleteProducto;
