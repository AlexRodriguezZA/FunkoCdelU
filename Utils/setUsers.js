async function setUsers(dni,nombre,apellido,email,direccion,codigopostal,alturadireccion,telefono) {
    const response = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        //TODO: AGREGAR EL TELEFONO
        body: JSON.stringify({
            query: `mutation {
                createUsuario(
                  input: {usuario: {dni: ${dni}, nombre: "${nombre}", apellido: "${apellido}", email: "${email}", esadmin: false, direccion: "${direccion}", codigopostal: ${codigopostal}, alturadireccion: ${alturadireccion},telefono: "${telefono}"}}
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

export default setUsers;
