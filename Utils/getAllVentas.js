async function getAllVentas() {
    const response = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `query {
              allVentausuarios(orderBy: IDVENTA_DESC) {
                nodes {
                  usuarioByDni {
                    nombre
                    apellido
                  }
                  fecha
                  total
                  idventa
                  lineaventasByIdventa {
                    nodes {
                      idlinea
                      cantproduc
                      totalprod
                      productoByIdprod {
                        nombre
                        precio
                      }
                    }
                  }
                }
              }
            }
            
              `
        }),
      })
      const result = await response.json();
      return result.data.allVentausuarios.nodes;
}

export default getAllVentas;
