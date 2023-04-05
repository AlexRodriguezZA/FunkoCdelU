async function getDetalleFunko(idprod) {
    const response = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `query MyQuery {
              productoByIdprod(idprod: ${idprod}) {
                nombre
                numerofunko
                precio
                promediocalificacion
                stock
                idprod
                idcat
                imagen
                descripcion
                comentariosByIdprod(orderBy: IDCOMENTARIO_DESC) {
                  nodes {
                    contenido
                    dni
                    fecha
                    idcomentario
                    usuarioByDni {
                      email
                      dni
                      nombre
                      apellido
                    }
                  }
                }
                categoriaByIdcat {
                  nombrecat
                  idcat
                }
              }
            }
              `
        }),
      })
      const result = await response.json();
      return result.data.productoByIdprod;
}

export default getDetalleFunko;

