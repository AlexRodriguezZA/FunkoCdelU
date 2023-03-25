import { Flex, Heading, Button, Box, Text } from "@chakra-ui/react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalFooter,
  ModalContent,
  ModalHeader,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

import getAllProductsAdmin from "../../Utils/Crud_productos_admin/getAllProductsAdmin";
import TableRowProductos from "../../components/Dashboard_components/TableRowProductos";
import { useState } from "react";
const productos = ({ productos }) => {
  const [searchText, setSearchText] = useState("");

  function handleInputChange(event) {
    setSearchText(event.target.value);
  }
  return (
    <>
      <Flex
        w="100%"
        justifyContent="center"
        mt={5}
        flexDir="column"
        alignItems="center"
      >
        <Heading
          display="flex"
          as="h1"
          size="xl"
          justifyContent="flex-start"
          marginTop={20}
        >
          Tabla de Productos
        </Heading>
        <InputGroup width={500} mt={10}>
          <InputLeftElement pointerEvents="none">
            <SearchIcon />
          </InputLeftElement>
          <Input
            variant="filled"
            type="text"
            placeholder="Search..."
            value={searchText}
            fontSize="15px"
            onChange={handleInputChange}
          />
        </InputGroup>

        <Box w={["90%", "97%"]} h="450px" mt={20} overflowY="scroll">
          <Table variant="simple" w="100%" size="lg" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>
                  <Button colorScheme="blue" size="lg">
                    <Text fontSize="14px" fontWeight="bold">
                      +
                    </Text>
                    Nuevo
                  </Button>
                </Th>

                <Th fontSize="10px">Cat.</Th>
                <Th fontSize="10px">Nombre</Th>
                <Th fontSize="10px">Imagen</Th>
                <Th fontSize="10px">Stock</Th>
                <Th fontSize="10px">Número Funko</Th>
                <Th fontSize="10px">Precio</Th>
                <Th fontSize="10px">Validación</Th>

                <Th fontSize="10px">Comentarios</Th>
                <Th fontSize="10px">Herramienta</Th>
              </Tr>
            </Thead>
            <Tbody>
              {productos &&
                productos.map((producto) => (
                  <TableRowProductos
                    key={producto.idprod}
                    producto={producto}
                  />
                ))}
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </>
  );
};

export default productos;

productos.auth = true;
export async function getServerSideProps() {
  const productos = await getAllProductsAdmin();
  return {
    props: { productos },
  };
}
