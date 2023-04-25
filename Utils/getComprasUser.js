import getDataUser from "./getDataUser";

async function getComprasUser(email) {

    const data_user = await getDataUser(email)

    const response = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `query{
              allVentausuarios(condition: {dni: ${data_user.dni}}, orderBy: IDVENTA_DESC) {
                nodes {
                  fecha
                  total
                  hora
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

      const respuesta = await response.json()
      return respuesta.data.allVentausuarios.nodes;

}

export default getComprasUser;
