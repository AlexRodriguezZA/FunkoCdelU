async function setFunko(nombre,precio,numero,stock,imagen,idcat) {
    const response = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `mutation {
                createProducto(
                  input: {producto: {nombre: "${nombre}", 
                                    precio: ${precio}, 
                                    numerofunko: ${numero}, 
                                    stock: ${stock}, 
                                    imagen: "${imagen}", 
                                    idcat: ${idcat}}}
                ) {
                  clientMutationId
                }
              }
              
              `
        }),
      })

      const respuesta = await response.json()
      console.log(respuesta)

}

export default setFunko;
