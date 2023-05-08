import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import TableRow_FunkosMasVendidos from "./TableRow_FunkosMasVendidos";

function Tabla_Funkos_masVendidos({Top3_Funkos}) {
  return (
    <TableContainer>
      <Table variant="simple" w="100%" size="lg" colorScheme="teal">
        <Thead>
          <Tr>
            <Th fontSize="10px">Imagen</Th>
            <Th fontSize="10px">Nombre</Th>
            <Th fontSize="10px">Número funko</Th>
            <Th fontSize="10px">Vendidos</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            Top3_Funkos &&
            Top3_Funkos.map( (funko) => <TableRow_FunkosMasVendidos key={funko.idprod} funko={funko}/> )
          }
        </Tbody>
        <TableCaption fontSize="12px" fontWeight="bold">Top 3 Funkos mas vendidos</TableCaption>
      </Table>
    </TableContainer>
  );
}

export default Tabla_Funkos_masVendidos;
