async function updateCategoria(idcat,nombrecat) {
    const response = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `mutation {
                updateCategoriaByIdcat(input: {categoriaPatch: {nombrecat: "${nombrecat}"}, idcat: ${idcat}}) {
                  clientMutationId
                }
              }
              
              `
        }),
      })

      const respuesta = await response.json()

}

export default updateCategoria;
