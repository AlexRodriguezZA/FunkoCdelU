import { Heading, Box, Flex, Text } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import Image from "next/image";
import TableRow from "../../components/Dashboard_components/TableRow";
import producto from "../../assets/Icons/producto.svg";
import ventas from "../../assets/Icons/ventas.svg";
import user from "../../assets/Icons/user.svg";

const index = () => {
  return (
    <>
      <Heading
        display="flex"
        as="h3"
        size="lg"
        justifyContent="flex-start"
        marginTop={30}
      >
        Inicio
      </Heading>

      <Flex
        justifyContent="space-evenly"
        gap={6}
        w="100%"
        mt={30}
        alignItems={["center", null, null]}
        flexDir={["column", "column", "row"]}
      >
        <Box
          display="flex"
          gap={8}
          flexDir="row"
          justifyContent="center"
          alignItems="center"
          bgGradient="linear(to-l, #f5af19, #f12711)"
          boxShadow="2xl"
          borderRadius={27}
          w={["100%", "70%", 300]}
          h={120}
        >
          <Text as='b' color="#fff" fontSize="5xl">
            Total ventas
          </Text>

          <Text color="#fff" fontSize="5xl">
            5
          </Text>
          <Image width={30} height="auto" src={ventas} />
        </Box>
        <Box
          display="flex"
          gap={8}
          flexDir="row"
          justifyContent="center"
          alignItems="center"
          bgGradient="linear(to-l,#71B280, #134E5E)"
          boxShadow="2xl"
          borderRadius={27}
          w={["100%", "70%", 300]}
          h={120}
        >
          <Text as='b' color="#fff" fontSize="5xl">
            Usuarios
          </Text>

          <Text color="#fff" fontSize="5xl">
            6
          </Text>
          <Image width={30} height="auto" src={user} />
        </Box>
        <Box
          display="flex"
          gap={8}
          flexDir="row"
          justifyContent="center"
          alignItems="center"
          bgGradient="linear(to-l, #00B4DB,#0083B0)"
          boxShadow="2xl"
          borderRadius={27}
          w={["100%", "70%", 300]}
          h={120}
        >
          <Text as='b' color="#fff" fontSize="5xl">
            Productos
          </Text>

          <Text color="#fff" fontSize="5xl">
            14
          </Text>
          <Image width={40} height="auto" src={producto} />
        </Box>
      </Flex>
      <Flex w="100%" justifyContent="center" mt={30} flexDir="column" alignItems="center">
        <Heading
          display="flex"
          as="h3"
          size="lg"
          justifyContent="flex-start"
          marginTop={30}
          >
          Historial de ventas
        </Heading>
        <TableContainer w="90%" overflowX="hidden">
          <Table variant="striped" w="100%" size="lg" colorScheme="teal">
            <TableCaption>Ventas realizadas</TableCaption>
            <Thead>
              <Tr>
                <Th>Usuario</Th>
                <Th>Fecha</Th>
                <Th>Total</Th>
              </Tr>
            </Thead>
            <Tbody>
              <TableRow/>
              <TableRow/>
              <TableRow/>
              <TableRow/>
            
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </>
  );
};

export default index;

index.auth = true;
