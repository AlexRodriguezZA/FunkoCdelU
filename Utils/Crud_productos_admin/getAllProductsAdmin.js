
async function getAllProductsAdmin() {
    const response = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `query MyQuery {
              allProductos(orderBy: IDPROD_DESC) {
                nodes {
                  idprod
                  idcat
                  categoriaByIdcat {
                    nombrecat
                  }
                  nombre
                  numerofunko
                  precio
                  promediocalificacion
                  stock
                  imagen
                  comentariosByIdprod(orderBy: IDCOMENTARIO_DESC) {
                    nodes {
                      contenido
                      fecha
                      idcomentario
                      usuarioByDni {
                        nombre
                        apellido
                      }
                    }
                    totalCount
                  }
                }
              }
            }
            
              `
        }),
      })
      const result = await response.json();
      return result.data.allProductos.nodes;
}

export default getAllProductsAdmin;

