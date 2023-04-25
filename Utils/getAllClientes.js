async function getAllClientes() {
    const response = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `query {
                allUsuarios(condition: {esadmin: false}, orderBy: PRIMARY_KEY_DESC) {
                  nodes {
                    alturadireccion
                    apellido
                    codigopostal
                    direccion
                    dni
                    email
                    nombre
                    telefono
                    ciudadByCodigopostal {
                      ciudad
                      codigopostal
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

export default getAllClientes;
