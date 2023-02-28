async function getAllCiudades() {
    const response = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `query MyQuery {
                allCiudads {
                  nodes {
                    ciudad
                    codigopostal
                  }
                }
              }
              
              `
        }),
      })
      const result = await response.json();
      return result.data.allCiudads.nodes;
}

export default getAllCiudades;
