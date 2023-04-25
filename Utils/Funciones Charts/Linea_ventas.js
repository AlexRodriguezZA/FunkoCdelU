async function Linea_ventas() {
  const response = await fetch("http://localhost:5000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query{
  allLineaventas {
    nodes {
      productoByIdprod {
        categoriaByIdcat {
          nombrecat
        }
      }
    }
    totalCount
  }
}

              `,
    }),
  });

  const respuesta = await response.json();
  return respuesta.data.allLineaventas.nodes;
}

export default Linea_ventas;
