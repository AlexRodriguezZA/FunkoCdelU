import { Tr, Td, Button } from "@chakra-ui/react";

const TableRow = ({ venta,handleOpenModal }) => {

  return (
    <Tr>
      <Td>
        {venta.usuarioByDni.nombre} {venta.usuarioByDni.apellido}
      </Td>
      <Td>{venta.fecha}</Td>
      <Td>${venta.total}</Td>
      <Td>
        
        <Button size="md" w={20} colorScheme="green" onClick={()=>handleOpenModal(venta.idventa)}>
          Ver
        </Button>
      </Td>
    </Tr>
  );
};

export default TableRow;
