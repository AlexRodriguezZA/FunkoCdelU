import {Tr,Td,Button} from "@chakra-ui/react";

const TableRowCategoria = () => {
  return (
    <>
    <Tr>
      <Td>Marvel</Td>
      <Td>
        <Button colorScheme='teal'>Editar</Button>
      </Td>
      <Td>
        <Button colorScheme='red'>Eliminar</Button>
      </Td>
    </Tr>
  </>
  )
}

export default TableRowCategoria