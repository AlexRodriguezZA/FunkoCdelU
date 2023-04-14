import { Tr, Td } from "@chakra-ui/react";
import Image from "next/image";

const TableRow_FunkosMasVendidos = ({funko}) => {
  return (
      <Tr>
        <Td>
           <Image src={`http://localhost:5000/public_funko_img/${funko.imagen}`} 
                  width={40}
                  height={20}
                  alt={`Imagen del funko ${funko.nombre}`} /> 
        </Td>
        <Td>
          {funko.nombre}
        </Td>
        <Td textAlign="center">
          #{funko.numerofunko}
        </Td>
        <Td textAlign="center">
          {funko.total}
        </Td>
      </Tr>
  );
};

export default TableRow_FunkosMasVendidos;
