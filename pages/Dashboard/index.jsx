//Componentes
import { Heading, Box, Flex, Text, Button } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th } from "@chakra-ui/react";
import Image from "next/image";
import TableRow from "../../components/Dashboard_components/TableRow";
import producto from "../../assets/Icons/producto.svg";
import ventas from "../../assets/Icons/ventas.svg";
import user from "../../assets/Icons/user.svg";

//Funciones
import getTotales_dataAdmin from "../../Utils/getTotales_dataAdmin";
import getAllVentas from "../../Utils/getAllVentas";


const index = ({ data_totales, ventas_realizadas }) => {


  return (
    <>
      
      {/*TITULO */}
      <Heading
        display="flex"
        as="h3"
        size="lg"
        justifyContent="flex-start"
        marginTop={30}
      >
        Inicio
      </Heading>
       
      {/*Seccion de boxes de data*/}

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
          borderRadius={5}
          w={["100%", "70%", 300]}
          h={110}
        >
          <Text as="b" color="#fff" fontSize="5xl">
            Total ventas
          </Text>

          <Text color="#fff" fontSize="5xl">
            {data_totales.allVentausuarios.totalCount}
          </Text>
          <Image width={30} height="auto" src={ventas} alt="Icon ventas" />
        </Box>
        <Box
          display="flex"
          gap={8}
          flexDir="row"
          justifyContent="center"
          alignItems="center"
          bgGradient="linear(to-l,#71B280, #134E5E)"
          boxShadow="2xl"
          borderRadius={5}
          w={["100%", "70%", 300]}
          h={110}
        >
          <Text as="b" color="#fff" fontSize="5xl">
            Usuarios
          </Text>

          <Text color="#fff" fontSize="5xl">
            {data_totales.allUsuarios.totalCount}
          </Text>
          <Image width={30} height="auto" src={user} alt="icon usuario" />
        </Box>
        <Box
          display="flex"
          gap={8}
          flexDir="row"
          justifyContent="center"
          alignItems="center"
          bgGradient="linear(to-l, #00B4DB,#0083B0)"
          boxShadow="2xl"
          borderRadius={5}
          w={["100%", "70%", 300]}
          h={110}
        >
          <Text as="b" color="#fff" fontSize="5xl">
            Productos
          </Text>

          <Text color="#fff" fontSize="5xl">
            {data_totales.allProductos.totalCount}
          </Text>
          <Image width={40} height="auto" src={producto} alt="Icon product" />
        </Box>
      </Flex>
          
      {/*Seccion de boxes de Historial de ventas*/}
      <Flex
        w="100%"
        justifyContent="center"
        mt={30}
        flexDir="column"
        alignItems="center"
      >
        <Heading
          display="flex"
          as="h3"
          size="lg"
          justifyContent="flex-start"
          marginTop={30}
        >
          Historial de ventas
        </Heading>
        <Box w="90%" height="270px" overflowY="scroll" marginTop={30}>
          <Table variant="striped" w="100%" size="lg" colorScheme="teal">
            <Thead>
              <Tr>
                <Th fontSize="12px">Usuario</Th>
                <Th fontSize="12px">Fecha</Th>
                <Th fontSize="12px">Total</Th>
                <Th fontSize="12px">Detalle</Th>
              </Tr>
            </Thead>
            <Tbody>
              {ventas_realizadas.length === 0 ? (
                <div>NO hay ventas aun</div>
              ) : (
                ventas_realizadas.map((venta) => (
                  <TableRow key={venta.idventa} venta={venta} />
                ))
              )}
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </>
  );
};

export default index;

index.auth = true;

export async function getServerSideProps() {
  const data_totales = await getTotales_dataAdmin();
  const ventas_realizadas = await getAllVentas();
  return {
    props: { data_totales, ventas_realizadas },
  };
}
