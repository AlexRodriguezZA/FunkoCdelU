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

  const handlerSearch = (termino) => {
    const clientesEncontrados = clientes.filter(cliente => {
      return Object.values(cliente).some(valor => {
        if (typeof valor === 'string') {
          return valor.toLowerCase().includes(termino.toLowerCase());
        } else if (typeof valor === 'number') {
          return valor === parseInt(termino);
        } else {
          return false;
        }
      });
    });
  
    if (clientesEncontrados.length > 0) {
      console.log('Clientes encontrados:', clientesEncontrados);
    } else {
      console.log('Clientes no encontrados');
    }
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
            placeholder="DNI, Nombre, Apellido, email..."
            fontSize="15px"
            onChange={(e) => handlerSearch(e.target.value)}
          />
        </InputGroup>

        <Box w={["90%", "97%"]} h="465px"boxShadow="xl"  mt={10} overflowY="scroll">
          <Table variant="striped" w="100%" size="lg" colorScheme="teal">
            <Thead>
              <Tr>
                <Th
                  color="black"
                  fontSize="10px"
                  >
                  Dni   
                </Th>
                <Th
                 color="black"
                  fontSize="10px"
                >
                  Nombre
                </Th>
                <Th
                 color="black"
                  fontSize="10px"
                >
                  Apellido
                </Th>
              
                <Th
                 color="black"
                  fontSize="10px"
                >
                  Telefono
                </Th>
                <Th
                 color="black"
                  fontSize="10px"
                >
                  Ciudad
                </Th>
                <Th
                 color="black"
                  fontSize="10px"
                >
                  Cod. postal
                </Th>
                <Th
                 color="black"
                  fontSize="10px"
                >
                  Dirección
                </Th>
                <Th
                 color="black"
                  fontSize="10px"
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
  