import React from "react";
import { Tr, Td } from "@chakra-ui/react";

const Table_rowClientes = ({ data_cliente }) => {
  return (
    <>
      <Tr>
        <Td>{data_cliente.dni}</Td>
        <Td>{data_cliente.nombre}</Td>
        <Td>{data_cliente.apellido}</Td>
        <Td>{data_cliente.telefono}</Td>
        <Td>{data_cliente.ciudadByCodigopostal.ciudad}</Td>
        <Td>{data_cliente.ciudadByCodigopostal.codigopostal}</Td>
        <Td>
          {data_cliente.direccion} {data_cliente.alturadireccion}
        </Td>

        <Td>{data_cliente.email}</Td>
      </Tr>
    </>
  );
};

export default Table_rowClientes;
