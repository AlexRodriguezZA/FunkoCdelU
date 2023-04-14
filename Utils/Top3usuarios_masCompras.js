async function Top3usuarios_masCompras() {
    const response = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `query {
                allTop3Usuarioconmascompras {
                  nodes {
                    nombre
                    apellido
                    email
                    dni
                    totalventas
                  }
                }
              }
              
              `
        }),
      })

      const respuesta = await response.json()
      return respuesta.data.allTop3Usuarioconmascompras.nodes;

}

export default Top3usuarios_masCompras;
