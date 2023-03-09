async function deleteFavoritos(idfavoritos) {
    const response = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `mutation {
              deleteFavoritoByIdfavoritos(input: {idfavoritos: ${idfavoritos}}) {
                clientMutationId
              }
            }
            
              `
        }),
      })

      const respuesta = await response.json()
      if (Object.keys(respuesta).length === 1) {
          return "success"
        } 

  }
export default deleteFavoritos;
