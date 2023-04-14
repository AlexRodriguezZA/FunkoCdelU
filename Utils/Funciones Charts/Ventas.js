async function Ventas() {
    const response = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `query {
                allVentausuarios {
                  nodes {
                    fecha
                    total
                  }
                }
              }
              
            
              `
        }),
      })

      const respuesta = await response.json()
      return respuesta.data.allVentausuarios.nodes;

}

export default Ventas;
