async function EditComentario(idcomentario, contenido) {
  const fechaActual = new Date();
  const dia = fechaActual.getDate().toString().padStart(2, "0");
  const mes = (fechaActual.getMonth() + 1).toString().padStart(2, "0");
  const anio = fechaActual.getFullYear().toString().slice(-2);
  const fechaFormateada = `${dia}-${mes}-${anio}`;

  const response = await fetch("http://localhost:5000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `mutation {
                updateComentarioByIdcomentario(
                  input: {comentarioPatch: {contenido: "${contenido}", fecha: "${fechaFormateada}"}, idcomentario: ${idcomentario}}
                ) {
                  clientMutationId
                }
              }
              
              
              `,
    }),
  });

  const respuesta = await response.json();
  console.log(respuesta);
}

export default EditComentario;
