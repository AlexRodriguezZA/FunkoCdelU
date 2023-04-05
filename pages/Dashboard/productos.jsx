//Componentes
import { Flex, Heading, Button, Box, Text } from "@chakra-ui/react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalFooter,
  ModalContent,
  ModalHeader,
} from "@chakra-ui/react";

import Comentario_Admin from "../../components/Dashboard_components/Comentario_Admin";
import TableRowProductos from "../../components/Dashboard_components/TableRowProductos";
import Modal_add_Funko from "../../components/Dashboard_components/Modal_add_Funko";
//Funciones
import getAllProductsAdmin from "../../Utils/Crud_productos_admin/getAllProductsAdmin";
import { useEffect, useState } from "react";
import getCategorias from "../../Utils/getCategorias";
const productos = ({ productos, categorias }) => {
  const [Productos, setProductos] = useState(productos);
  const [showModalComentarios, setshowModalComentarios] = useState(false);
  const [OpenModalAddFunko, setOpenModalAddFunko] = useState(false);
  const [IdprodComent, setIdprodComent] = useState(null);
 
  let Comentarios = [];

  const handleOpenModalComentarios = (idprod) => {
    setshowModalComentarios(true);
    setIdprodComent(idprod);
  };

  const handleCloseModalComentarios = () => {
    setshowModalComentarios(false);
    window.location.replace(""); //Reiniciamos la página
  };

  const handlerSearch = (search) => {
    if (!search) {
      setProductos(productos);
    } else {
      const filteredData = productos.filter((item) => {
        const array_de_valores_funko = Object.values(item);
        delete array_de_valores_funko[0];
        delete array_de_valores_funko[1];
        delete array_de_valores_funko[2];
        delete array_de_valores_funko[4];
        delete array_de_valores_funko[5];
        delete array_de_valores_funko[6];
        delete array_de_valores_funko[7];
        delete array_de_valores_funko[8];
        delete array_de_valores_funko[9];

        return array_de_valores_funko
          .join("")
          .toLowerCase()
          .includes(search.toLowerCase());
      });

      setProductos(filteredData);
    }
  };

  //Con estas funciones manejamos el modal (abrir y cerrar) de agregar un nuevo funko al sistema
  const handleOpenModalAddFunko = ()=>{
    setOpenModalAddFunko(true)
  }
  const handleCloseModalAddFunko = ()=>{
    setOpenModalAddFunko(false)
    window.location.replace(""); //Reiniciamos la página
  }
  return (
    <>
      {/*Modal para agregar funko*/}

      <Modal_add_Funko 
        isOpen={OpenModalAddFunko} 
        onClose={handleCloseModalAddFunko} 
        categorias={categorias}/>
      
      {/*Comentarios modal */}
      <Modal
        size="5xl"
        isOpen={showModalComentarios}
        onClose={handleCloseModalComentarios}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="25px" textAlign="center" mt={10}>
            Comentarios
          </ModalHeader>
          <ModalBody pb={6} mb={10}>
           {IdprodComent &&
            productos.map((prod) => {
              if (prod.idprod === IdprodComent) {
                prod.comentariosByIdprod.nodes.map((comentario) =>
                  Comentarios.push(comentario)
                );
              }
            })}
          {Comentarios &&
            Comentarios.map((comentario) => (
              <Comentario_Admin
                key={comentario.idcomentario}
                comentario={comentario}
              />
            ))} 
          </ModalBody>
          
          <ModalFooter>
            <Button size="lg" onClick={handleCloseModalComentarios}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Flex
        w="100%"
        justifyContent="center"
        mt={5}
        flexDir="column"
        alignItems="center"
      >
        <Heading
          display="flex"
          as="h1"
          size="xl"
          justifyContent="flex-start"
          marginTop={20}
        >
          Tabla de Productos
        </Heading>

        <InputGroup width={500} mt={10}>
          <InputLeftElement pointerEvents="none">
            <SearchIcon />
          </InputLeftElement>
          <Input
            variant="filled"
            type="text"
            placeholder="Search..."
            fontSize="15px"
            onChange={(e) => handlerSearch(e.target.value)}
          />
        </InputGroup>

        <Box w={["90%", "97%"]} h="450px" mt={20} overflowY="scroll">
          <Table variant="simple" w="100%" size="lg" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>
                  <Button colorScheme="blue" size="lg" onClick={handleOpenModalAddFunko}>
                    <Text fontSize="14px" fontWeight="bold">
                      +
                    </Text>
                    Nuevo
                  </Button>
                </Th>

                <Th fontSize="10px">Cat.</Th>
                <Th fontSize="10px">Nombre</Th>
                <Th fontSize="10px">Imagen</Th>
                <Th fontSize="10px">Stock</Th>
                <Th fontSize="10px">Número Funko</Th>
                <Th fontSize="10px">Precio</Th>
                <Th fontSize="10px">Validación</Th>
                <Th fontSize="10px">Comentarios</Th>
                <Th fontSize="10px">Herramienta</Th>
              </Tr>
            </Thead>
            <Tbody>
              {Productos &&
                Productos.map((producto) => (
                  <TableRowProductos
                    key={producto.idprod}
                    producto={producto}
                    OpenModalComentarios={handleOpenModalComentarios}
                    categorias={categorias}
                  />
                ))}
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </>
  );
};

export default productos;

productos.auth = true;
export async function getServerSideProps() {
  const productos = await getAllProductsAdmin();
  const categorias = await getCategorias();
  return {
    props: { productos,categorias },
  };
}
