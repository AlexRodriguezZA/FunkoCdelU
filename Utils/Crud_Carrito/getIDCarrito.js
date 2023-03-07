async function getIDCarrito(email) {
    const response = await fetch("http://localhost:5000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query MyQuery {
            allUsuarios(condition: {email: "${email}"}) {
              nodes {
                carritosByDni {
                  nodes {
                    idcarrito
                  }
                }
              }
            }
          }
          
        `,
      }),
    });
  
    const respuesta = await response.json();
    return respuesta.data.allUsuarios.nodes[0].carritosByDni.nodes[0].idcarrito;
}
  
export default getIDCarrito;
  
