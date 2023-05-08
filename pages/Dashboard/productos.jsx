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
import Modal_add_Funko from "../../components/Dashboard_components/Modal_add_Funko";
import Comentario_Admin from "../../components/Dashboard_components/Comentario_Admin";
import TableRowProductos from "../../components/Dashboard_components/TableRowProductos";


//Funciones
import getAllProductsAdmin from "../../Utils/Crud_productos_admin/getAllProductsAdmin";
import { useState } from "react";
import getCategorias from "../../Utils/getCategorias";


const productos = ({ productos, categorias }) => {
  const [Productos, setProductos] = useState(productos);
  const [showModalComentarios, setshowModalComentarios] = useState(false);
  const [OpenModalAddFunko, setOpenModalAddFunko] = useState(false);
  const [IdprodComent, setIdprodComent] = useState(null);
  const [selectedTh, setSelectedTh] = useState(null);

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
      setSelectedTh(null)
      setProductos(filteredData);
    }
  };

  const handleFiltrar = (clave) => {
    setSelectedTh(clave)
    if (clave === "promediocalificacion") {
      const Productos_filtrados = [...productos].sort((a, b) =>
        a[clave] < b[clave] ? 1 : -1
      );
      setProductos(Productos_filtrados);
    } else {
      const Productos_filtrados = [...productos].sort((a, b) =>
        a[clave] > b[clave] ? 1 : -1
      );
      setProductos(Productos_filtrados);
    }
  };

  const handleFiltrarCategorias = () => {
    const clave = "nombrecat"
    setSelectedTh(clave)
    const Productos_filtrados_categoria = [...productos].sort((a, b) =>
      a.categoriaByIdcat.nombrecat > b.categoriaByIdcat.nombrecat ? 1 : -1
    );
    setProductos(Productos_filtrados_categoria);
  };

  //Con estas funciones manejamos el modal (abrir y cerrar) de agregar un nuevo funko al sistema
  const handleOpenModalAddFunko = () => {
    setOpenModalAddFunko(true);

  };
  const handleCloseModalAddFunko = () => {
    setOpenModalAddFunko(false);
    window.location.replace(""); //Reiniciamos la página


  };
  return (
    <>
      {/*Modal para agregar funko*/}

      <Modal_add_Funko
        isOpen={OpenModalAddFunko}
        onClose={handleCloseModalAddFunko}
        categorias={categorias}
      />

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
          marginTop={10}
        >
          Tabla de Productos
        </Heading>

        <InputGroup
          w={{ base: "80%", md: "50%" }}
          mt={10}
          display="flex"
          justifyContent="center"
        >
          <InputLeftElement
            pointerEvents="none"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <SearchIcon fontSize={15} />
          </InputLeftElement>
          <Input
            h={30}
            shadow="md"
            variant="filled"
            type="text"
            placeholder="Nombre, Número funko..."
            fontSize="15px"
            onChange={(e) => handlerSearch(e.target.value)}
          />
        </InputGroup>

        <Box w={["90%", "97%"]} h="465px"boxShadow="xl"  mt={10} overflowY="scroll">
          <Table variant="simple" w="100%" size="lg" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>
                  <Button
                    colorScheme="blue"
                    size="lg"
                    onClick={handleOpenModalAddFunko}
                  >
                    <Text fontSize="14px" fontWeight="bold">
                      +
                    </Text>
                    Nuevo
                  </Button>
                </Th>

                <Th
                  fontSize="10px"
                  _hover={{ backgroundColor: "blue.500", color: "white" }}
                  cursor="pointer"
                  backgroundColor={selectedTh === "nombrecat" ? "blue.500" : ""}
                  color={selectedTh === "nombrecat" ? "white" : ""}
                  onClick={() => handleFiltrarCategorias()}
                >
                  Cat.
                </Th>
                <Th
                  fontSize="10px"
                  _hover={{ backgroundColor: "blue.500", color: "white" }}
                  cursor="pointer"
                  backgroundColor={selectedTh === "nombre" ? "blue.500" : ""}
                  color={selectedTh === "nombre" ? "white" : ""}
                  onClick={() => handleFiltrar("nombre")}
                >
                  Nombre
                </Th>
                <Th fontSize="10px">Imagen</Th>
                <Th
                  fontSize="10px"
                  _hover={{ backgroundColor: "blue.500", color: "white" }}
                  cursor="pointer"
                  backgroundColor={selectedTh === "stock" ? "blue.500" : ""}
                  color={selectedTh === "stock" ? "white" : ""}
                  onClick={() => handleFiltrar("stock")}
                >
                  Stock
                </Th>
                <Th
                  fontSize="10px"
                  textAlign="center"
                  _hover={{ backgroundColor: "blue.500", color: "white" }}
                  cursor="pointer"
                  backgroundColor={selectedTh === "numerofunko" ? "blue.500" : ""}
                  color={selectedTh === "numerofunko" ? "white" : ""}
                  onClick={() => handleFiltrar("numerofunko")}
                >
                  Número Funko
                </Th>
                <Th
                  fontSize="10px"
                  _hover={{ backgroundColor: "blue.500", color: "white" }}
                  cursor="pointer"
                  backgroundColor={selectedTh === "precio" ? "blue.500" : ""}
                  color={selectedTh === "precio" ? "white" : ""}
                  onClick={() => handleFiltrar("precio")}
                >
                  Precio
                </Th>
                <Th
                  fontSize="10px"
                  _hover={{ backgroundColor: "blue.500", color: "white" }}
                  cursor="pointer"
                  backgroundColor={selectedTh === "promediocalificacion" ? "blue.500" : ""}
                  color={selectedTh === "promediocalificacion" ? "white" : ""}
                  onClick={() => handleFiltrar("promediocalificacion")}
                >
                  Valoración
                </Th>
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
    props: { productos, categorias },
  };
}
