//USAMOS ESTA FUNCIÓN PARA PODER VALIDAR SI EL USUARIO YA TIENE CUENTA REGISTRADA O HAY QUE
//REGISTRALO


async function getEmailsUsers() {
    const response = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `query MyQuery {
              allUsuarios {
                nodes {
                  email
                }
              }
            }
              `
        }),
      })
      const result = await response.json();
      return result.data.allUsuarios.nodes;
}

export default getEmailsUsers;