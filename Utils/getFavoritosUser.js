async function getFavoritosUser(dni) {
    const response = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `query MyQuery {
                allFavoritos(condition: {dni: ${dni}}) {
                  nodes {
                    productoByIdprod {
                      nombre
                      numerofunko
                      precio
                      idprod
                      categoriaByIdcat {
                        nombrecat
                      }
                    }
                  }
                }
              }
              
              `
        }),
      })

      const respuesta = await response.json()
      return respuesta.data.allFavoritos.nodes;

}

export default getFavoritosUser;
