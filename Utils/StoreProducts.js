
//TODO: ojo con el puerto, verificar bien el puerto del backend

async function getAllProducts() {
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
                  favoritosByIdprod {
                    nodes {
                      idfavoritos
                      dni
                    }
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

export default getAllProducts;

