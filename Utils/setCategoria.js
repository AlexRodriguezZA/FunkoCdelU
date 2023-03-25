async function setCategoria(nombre) {
    const response = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `mutation {
                createCategoria(input: {categoria: {nombrecat: "${nombre}"}}) {
                  clientMutationId
                }
              }
              
              `
        }),
      })

      const respuesta = await response.json()
      return respuesta;

  }
export default setCategoria;
