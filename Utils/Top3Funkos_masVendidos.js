async function Top3Funkos_masVendidos() {
    const response = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `query {
                allTop3FunkosMasVendidos {
                  nodes {
                    imagen
                    nombre
                    idprod
                    numerofunko
                    total
                  }
                }
              }
              
              
              `
        }),
      })

      const respuesta = await response.json()
      return respuesta.data.allTop3FunkosMasVendidos.nodes;

}

export default Top3Funkos_masVendidos;
