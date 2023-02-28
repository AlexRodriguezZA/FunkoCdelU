async function setComentario(contenido,dni,idprod) {
    const response = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `mutation {
                createComentario(
                  input: {comentario: {contenido: "${contenido}", dni: ${dni},fecha: "12/05/2022", idprod: ${idprod}}}
                ) {
                  clientMutationId
                }
              }
              
              
              `
        }),
      })

      const respuesta = await response.json()
      console.log(respuesta)

}

export default setComentario;
