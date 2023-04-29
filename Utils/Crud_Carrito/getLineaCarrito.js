async function getLineaCarrito(idcarrito) {
    const response = await fetch("http://localhost:5000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query{
            allLineacarritos(condition: {idcarrito: ${idcarrito}}) {
              nodes {
                precio
                idprod
                idcarrito
                idlineapedido
                cantidaddecadaprod
                productoByIdprod {
                  imagen
                  nombre
                  precio
                  stock
                  categoriaByIdcat {
                    nombrecat
                  }
                }
              
              }
            }
          }
        `,
      }),
    });
  
    const respuesta = await response.json();
    return respuesta.data.allLineacarritos.nodes;
  }
  
  export default getLineaCarrito;
  