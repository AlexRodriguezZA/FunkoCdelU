import {Tr,Td,Button} from "@chakra-ui/react";
const TableRow = ({venta}) => {
  return (
      <Tr>
        <Td>{venta.usuarioByDni.nombre} {" "} {venta.usuarioByDni.apellido}</Td>
        <Td>{venta.fecha}</Td>
        <Td>$ {venta.total}</Td>
        <Td>
          <Button size="md" w={20} colorScheme="green">Ver</Button>
        </Td>

      </Tr>
        
  );
};

export default TableRow;
