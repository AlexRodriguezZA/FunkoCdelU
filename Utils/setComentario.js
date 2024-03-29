async function setComentario(contenido, dni, idprod) {
  const fechaActual = new Date();
  const dia = fechaActual.getDate().toString().padStart(2, "0");
  const mes = (fechaActual.getMonth() + 1).toString().padStart(2, "0");
  const anio = fechaActual.getFullYear().toString().slice(-2);
  const fechaFormateada = `${dia}-${mes}-${anio}`;
  //console.log(fechaFormateada); // Resultado: "27-03-23"

  const response = await fetch("http://localhost:5000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `mutation {
                createComentario(
                  input: {comentario: {contenido: "${contenido}", dni: ${dni},fecha: "${fechaFormateada}", idprod: ${idprod}}}
                ) {
                  clientMutationId
                }
              }
              
              
              `,
    }),
  });

  const respuesta = await response.json();
}

export default setComentario;
