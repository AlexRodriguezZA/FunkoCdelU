async function deleteCategoria(idcategoria) {
    const response = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `mutation {
                deleteCategoriaByIdcat(input: {idcat: ${idcategoria}}) {
                  clientMutationId
                }
              }
              
              `
        }),
      })

      const respuesta = await response.json()
      return respuesta
  }
export default deleteCategoria;
