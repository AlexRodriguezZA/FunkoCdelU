async function setFavoritos(dni,idprod) {
    const response = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `mutation {
                createFavorito(input: {favorito: {dni: ${dni}, idprod: ${idprod}}}) {
                  clientMutationId
                }
              }
              
              `
        }),
      })

      const respuesta = await response.json()
      console.log(respuesta)

}

export default setFavoritos;
