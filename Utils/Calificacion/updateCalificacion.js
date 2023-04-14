async function updateCalificacion(calificacion, idcalificacion) {
    
    const response = await fetch("http://localhost:5000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `mutation {
        updateCalificacionByIdcalif(
          input: {calificacionPatch: {calificacion: ${calificacion}}, idcalif: ${idcalificacion}}
        ) {
          clientMutationId
        }
      }
      
      `,
    }),
  });

  const respuesta = await response.json();
  console.log(respuesta)
}

export default updateCalificacion;
