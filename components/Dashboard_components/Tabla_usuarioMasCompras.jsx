//Componentes
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
import TableRow_usuariosMascompras from "./TableRow_usuariosMascompras";
function Tabla_usuarioMasCompras({ Top3_usuarios }) {
  return (
    <TableContainer w="100%">
      <Table variant="simple" w="100%" size="lg" colorScheme="teal">
        <Thead>
          <Tr>
            <Th fontSize="10px">Nombre</Th>
            <Th fontSize="10px">Email</Th>
            <Th fontSize="10px">Compras</Th>
          </Tr>
        </Thead>
        <Tbody>
        {
          Top3_usuarios &&
          Top3_usuarios.map( usuario => <TableRow_usuariosMascompras key={usuario.email} usuario={usuario}/>)
        }

        </Tbody>
        <TableCaption fontSize="12px" fontWeight="bold">
          Top 3 usuario con mas compras.
        </TableCaption>
      </Table>
    </TableContainer>
  );
}

export default Tabla_usuarioMasCompras;
