async function getCategorias() {
    const response = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `query {
                allCategorias {
                  nodes {
                    idcat
                    nombrecat
                  }
                }
              }
              
              `
        }),
      })
      const result = await response.json();
      return result.data.allCategorias.nodes;
}

export default getCategorias;
