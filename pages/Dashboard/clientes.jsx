import React from 'react'
//Componentes
import { Flex, Heading, Box} from "@chakra-ui/react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th
} from "@chakra-ui/react";
import getAllClientes from '../../Utils/getAllClientes';
import Table_rowClientes from '../../components/Dashboard_components/Table_rowClientes';
const clientes = ({clientes}) => {
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
          marginTop={10}
        >
          Tabla de clientes
        </Heading>

        <InputGroup
          w={{ base: "80%", md: "50%" }}
          mt={10}
          display="flex"
          justifyContent="center"
        >
          <InputLeftElement
            pointerEvents="none"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <SearchIcon fontSize={15} />
          </InputLeftElement>
          <Input
            h={30}
            shadow="md"
            variant="filled"
            type="text"
            placeholder="Search..."
            fontSize="15px"
            onChange={(e) => handlerSearch(e.target.value)}
          />
        </InputGroup>

        <Box w={["90%", "97%"]} h="465px"boxShadow="xl"  mt={10} overflowY="scroll">
          <Table variant="simple" w="100%" size="lg" colorScheme="teal">
            <Thead>
              <Tr>
                <Th
                  color="black"
                  bg="whatsapp.100"
                  fontSize="10px"

                  _hover={{ backgroundColor: "blue.500", color: "white" }}
                  >
                  Dni   
                </Th>
                <Th
                 color="black"
                 bg="whatsapp.100"
                  fontSize="10px"
                  _hover={{ backgroundColor: "blue.500", color: "white" }}
                >
                  Nombre
                </Th>
                <Th
                 color="black"
                 bg="whatsapp.100"
                  fontSize="10px"
                  _hover={{ backgroundColor: "blue.500", color: "white" }}
                >
                  Apellido
                </Th>
              
                <Th
                 color="black"
                 bg="whatsapp.100"
                  fontSize="10px"
                  _hover={{ backgroundColor: "blue.500", color: "white" }}
                >
                  Tel.
                </Th>
                <Th
                 color="black"
                 bg="whatsapp.100"
                  fontSize="10px"
                  _hover={{ backgroundColor: "blue.500", color: "white" }}
                >
                  Ciudad
                </Th>
                <Th
                 color="black"
                 bg="whatsapp.100"
                  fontSize="10px"
                  _hover={{ backgroundColor: "blue.500", color: "white" }}
                >
                  Cod. postal
                </Th>
                <Th
                 color="black"
                 bg="whatsapp.100"
                  fontSize="10px"
                  _hover={{ backgroundColor: "blue.500", color: "white" }}
                >
                  Dirección
                </Th>
                <Th
                 color="black"
                 bg="whatsapp.100"
                  fontSize="10px"
                  _hover={{ backgroundColor: "blue.500", color: "white" }}
                >
                  Email
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {clientes && clientes.map( cliente => <Table_rowClientes key={cliente.dni} data_cliente={cliente}/>)}
            </Tbody>
          </Table>
        </Box>
      </Flex>
      </>
  )
}

export default clientes

clientes.auth = true;

export async function getServerSideProps() {
    const clientes = await getAllClientes();
    return {
      props: { clientes },
    };
  }
  