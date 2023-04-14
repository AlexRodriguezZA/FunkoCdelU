import { Tr, Td } from "@chakra-ui/react";

const TableRow_usuariosMascompras = ({ usuario }) => {
  return (
    <Tr  height="50px">
      <Td fontSize="20x" fontWeight="bold">{usuario.nombre} {""} {usuario.apellido}</Td>
      <Td fontSize="20x">{usuario.email}</Td>
      <Td fontSize="20x" textAlign="center">{usuario.totalventas}</Td>
    </Tr>
    
  );
};

export default TableRow_usuariosMascompras;
