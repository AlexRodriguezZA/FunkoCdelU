import { Flex,Heading,Button} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
} from "@chakra-ui/react";

import TableRowCategoria from "../../components/Dashboard_components/TableRowCategoria";
const categorias = () => {
  return (
      <>
        <Heading
        display="flex"
        as="h3"
        size="lg"
        justifyContent="flex-start"
        marginTop={30}
      >
        Categoria
      </Heading>
      <Flex w="100%" justifyContent="center" mt={30} flexDir="column" alignItems="center">
        <Heading
          display="flex"
          as="h3"
          size="lg"
          justifyContent="flex-start"
          marginTop={30}
          >
          Tabla de categorias
        </Heading>
        <TableContainer w="50%" mt={30} >
          <Table variant="simple" w="100%" size="lg" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>Nombre</Th>
                <Th>Herramientas</Th>
              </Tr>
            </Thead>
            <Tbody>
              
            <TableRowCategoria/>
            <TableRowCategoria/>
            <TableRowCategoria/>
            <TableRowCategoria/>

            </Tbody>
          </Table>
          <Button colorScheme='blue'>Nuevo</Button>

        </TableContainer>
      </Flex>
      </>
  );
};

export default categorias;

categorias.auth = true;
