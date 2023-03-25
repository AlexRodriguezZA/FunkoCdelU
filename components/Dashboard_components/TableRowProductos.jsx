import { Tr, Td, Button, Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import imagen_prueba from "../../assets/imagenesPrueba/boba.png";
const TableRowProductos = ({ producto }) => {
  return (
    <>
      <Tr>
        <Td>-</Td>
        <Td>{producto.categoriaByIdcat.nombrecat}</Td>
        <Td>{producto.nombre}</Td>
        <Td>
          {/*
                producto.imagen === null ? <Image/>
                */}
          <Image src={imagen_prueba} width={70} height="auto" alt={`Imagen del funko ${producto.nombre}`} />
        </Td>
        <Td>{producto.stock}</Td>
        <Td>#{producto.numerofunko}</Td>
        <Td>${producto.precio}</Td>
        <Td textAlign="center">{producto.promediocalificacion}</Td>
        <Td>
          <Button colorScheme="telegram">
            ver ({producto.comentariosByIdprod.totalCount})
          </Button>
        </Td>
        <Td >
          <Box display="flex" alignItems="center" justifyContent="center">
            <Button colorScheme="teal" marginRight={10}>
              Editar
            </Button>
            <Button colorScheme="red">Eliminar</Button>
          </Box>
        </Td>
      </Tr>
    </>
  );
};

export default TableRowProductos;
