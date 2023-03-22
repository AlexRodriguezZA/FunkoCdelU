async function getTotales_dataAdmin() {
    const response = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `query {
              allVentausuarios {
                totalCount
              }
              allProductos {
                totalCount
              }
              allUsuarios {
                totalCount
              }
            }
            
              `
        }),
      })

      const respuesta = await response.json()
      return respuesta.data;

}

export default getTotales_dataAdmin;
