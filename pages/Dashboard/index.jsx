//Componentes
import { Heading, Box, Flex, Text, Button } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Image from "next/image";
import TableRow from "../../components/Dashboard_components/TableRow";
import producto from "../../assets/Icons/producto.svg";
import ventas from "../../assets/Icons/ventas.svg";
import user from "../../assets/Icons/user.svg";

//Funciones
import getTotales_dataAdmin from "../../Utils/getTotales_dataAdmin";
import getAllVentas from "../../Utils/getAllVentas";
import { useState } from "react";
const index = ({ data_totales, ventas_realizadas }) => {
const [Ventas, setVentas] = useState(ventas_realizadas)
const [Fecha1, setFecha1] = useState("")
const [Fecha2, setFecha2] = useState("")

  const handleFiltradoVentas = () =>{
    if (Fecha2 === "") {
      const fechas_filtradas = ventas_realizadas.filter( venta => venta.fecha >= Fecha1 )
      setVentas(fechas_filtradas)
    }
    else if (Fecha1 === "") {
      const fechas_filtradas = ventas_realizadas.filter( venta => venta.fecha <= Fecha2 )
      setVentas(fechas_filtradas)
    }
    else{
      const fechas_filtradas_2 = ventas_realizadas.filter( venta => venta.fecha >= Fecha1 && venta.fecha <= Fecha2)
      setVentas(fechas_filtradas_2)
    }
  }

  const handleAllVentas = ()=>{
    setFecha1("")
    setFecha2("")
    setVentas(ventas_realizadas) 
  }

  return (
    <>
      {/*TITULO */}
      <Heading
        display="flex"
        as="h3"
        size="lg"
        justifyContent="flex-start"
        marginTop={10}
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
        mt={10}
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
        <Box display="flex" gap={10} mt={15}>
          <Box display="flex" gap={5}>
            <Text>Desde:</Text>
            <input type="date" name="fecha" value={Fecha1}  onChange={(e) => setFecha1(e.target.value)}/>
          </Box>

          <Box display="flex" gap={5}>
            <Text>Hasta:</Text>
            <input type="date" name="fecha" value={Fecha2}  onChange={(e) => setFecha2(e.target.value)}/>
          </Box>  
          <IconButton
          colorScheme="linkedin"
            aria-label="Buscar"
            icon={<SearchIcon />}
            size="md"
            onClick={handleFiltradoVentas}
          />
          <Button colorScheme="linkedin" onClick={handleAllVentas}>Todas</Button>
        </Box>

        <Box w="90%" height="280px" overflowY="scroll" marginTop={10}>
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
              {Ventas.length === 0 ? (
                <div>NO hay ventas aun</div>
              ) : (
                Ventas.map((venta) => (
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
