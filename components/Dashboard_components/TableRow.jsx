import {Tr,Td} from "@chakra-ui/react";
const TableRow = ({venta}) => {
  return (
    <>
      <Tr>
        <Td>{venta.usuarioByDni.nombre} {" "} {venta.usuarioByDni.apellido}</Td>
        <Td>{venta.fecha}</Td>
        <Td>$ {venta.total}</Td>
      </Tr>
    </>
  );
};

export default TableRow;
