async function updateUser(email,nombre,apellido,direccion,codigopostal,alturadireccion,telefono) {
    const response = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `mutation {
                    updateUsuarioByEmail(
                      input: {usuarioPatch: {nombre: "${nombre}", 
                                            telefono: "${telefono}",
                                            apellido: "${apellido}", 
                                            codigopostal: ${codigopostal}, 
                                            direccion: "${direccion}", 
                                            alturadireccion: ${alturadireccion}}, 
                                            email: "${email}"}
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

export default updateUser;
