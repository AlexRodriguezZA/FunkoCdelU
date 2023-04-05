async function updateFunko(idcat,nombre,numerofunko,precio,stock,idprod,imagen) {
    const response = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `mutation {
              updateProductoByIdprod(
                input: {productoPatch: {idcat: ${idcat}, imagen: "${imagen}", nombre: "${nombre}", numerofunko: ${numerofunko}, precio: ${precio}, stock: ${stock}}, idprod: ${idprod}}
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

export default updateFunko;
