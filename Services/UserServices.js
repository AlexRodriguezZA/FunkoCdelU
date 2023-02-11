
async function getAllUsers() {
    const response = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `query MyQuery {
                allUsuarios {
                  nodes {
                    alturadireccion
                    apellido
                    direccion
                    dni
                    email
                    nombre
                    codigopostal
                    ciudadByCodigopostal {
                      ciudad
                    }
                  }
                }
              }
              `
        }),
      })
      const result = await response.json();
      return result.data.allUsuarios.nodes;
}

getAllUsers()
