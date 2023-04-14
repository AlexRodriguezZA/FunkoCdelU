async function getAllCalificaciones() {
    const response = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `query {
                allCalificacions {
                  nodes {
                    dni
                    idprod
                    calificacion
                    idcalif
                  }
                }
              }
              
              `
        }),
      })
      const result = await response.json();
      return result.data.allCalificacions.nodes;
}

export default getAllCalificaciones;
