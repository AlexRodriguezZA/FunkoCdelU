async function getDataUser(email) {
    const response = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `query MyQuery {
                usuarioByEmail(email: "${email}") {
                  alturadireccion
                  direccion
                  dni
                  nombre
                  apellido
                  email
                  ciudadByCodigopostal {
                    ciudad
                    codigopostal
                  }
                }
              }
              
              `
        }),
      })

      const respuesta = await response.json()
      return respuesta.data.usuarioByEmail;

}

export default getDataUser;
