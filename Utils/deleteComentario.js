async function deleteComentario(idcomentario) {
    const response = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `mutation {
                deleteComentarioByIdcomentario(input: {idcomentario: ${idcomentario}}) {
                  clientMutationId
                }
              }
              
              `
        }),
      })

      const respuesta = await response.json()
      console.log(respuesta)
  }
export default deleteComentario;
