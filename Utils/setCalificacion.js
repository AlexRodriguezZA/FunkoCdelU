async function setCalificacion(calificacion,dni,idprod) {
    const response = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `mutation {
                createCalificacion(
                  input: {calificacion: {calificacion: ${calificacion}, dni: ${dni}, idprod: ${idprod}}}
                ) {
                  clientMutationId
                }
              }
              
              `
        }),
      })

      const respuesta = await response.json()
      

}

export default setCalificacion;
