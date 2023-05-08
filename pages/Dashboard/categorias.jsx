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
  FormControl,
  FormLabel
} from "@chakra-ui/react";
import { Alert, AlertIcon, AddIcon } from "@chakra-ui/react";
import Image from "next/image";
import Img_info from "../../assets/Img_info.png";
import TableRowCategoria from "../../components/Dashboard_components/TableRowCategoria";

//Funciones
import { useDisclosure } from "@chakra-ui/react";
import getCategorias from "../../Utils/getCategorias";
import setCategoria from "../../Utils/setCategoria";
import { useState } from "react";
import { useRouter } from "next/router";

const categorias = ({ categorias }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [NombreCategoria, setNombreCategoria] = useState("");
  const [Categorias, setCategorias] = useState(categorias);
  const [SuccessDataSave, setSuccessDataSave] = useState(false);
  const [showModalInfo, setshowModalInfo] = useState(false);
  const [selectedTh, setSelectedTh] = useState(null);

  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };
  const handleOpenModalInfo = () => {
    setSelectedTh(null)

    setshowModalInfo(true);
  };

  const handleCloseModalInfo = () => {
    setshowModalInfo(false);
  };

  const handleAddCategoria = async () => {
    setSelectedTh(null)

    const data = await setCategoria(NombreCategoria);
    console.log(data);
    if (data) {
      setSuccessDataSave(true);
    }
    setNombreCategoria("");
  };

  const handleResetInputAndClose = () => {
    setSuccessDataSave(false);
    setNombreCategoria("");
    onClose();
    refreshData();
  };

  const handlerSearch = (search) => {
    if (!search) {
      setCategorias(categorias);
    } else {
      const filteredData = categorias.filter((item) => {
        const array_de_valores_funko = Object.values(item);
        delete array_de_valores_funko[0];
        delete array_de_valores_funko[2];


        return array_de_valores_funko
          .join("")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setSelectedTh(null)
      setCategorias(filteredData);
    }
  };

  const handleOrdenarCategorias = () => {
    setSelectedTh("nombre_categoria")
    const categoriasOrdenadas = [...categorias].sort((a, b) =>
      a.nombrecat > b.nombrecat ? 1 : -1
    );
    setCategorias(categoriasOrdenadas);
  };
  const handleOrdenarCategorias_total_products = () => {
    setSelectedTh("total_productos")
    const categoriasOrdenadas_total_products = [...categorias].sort((a, b) =>
      a.productosByIdcat.totalCount > b.productosByIdcat.totalCount ? 1 : -1
    );
    setCategorias(categoriasOrdenadas_total_products);
  };

  return (
    <>
      <Flex
        w="100%"
        justifyContent="center"
        mt={5}
        flexDir="column"
        alignItems="center"
      >
        {/*MODAL PARA CARGAR CATEGORIA */}
        <Modal size="5xl" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontSize="25px" textAlign="center">
              Nueva categoría
            </ModalHeader>
            <ModalBody pb={6}>
              {SuccessDataSave && (
                <Alert status="success">
                  <AlertIcon />
                  Se agregó con exito la categoría!
                </Alert>
              )}
              <FormControl>
                <FormLabel fontSize="18px">Ingrese categoría</FormLabel>
                <Input
                  placeholder="Nombre Categoria"
                  required
                  size="md"
                  height="40px"
                  fontSize="15px"
                  value={NombreCategoria}
                  onChange={(e) => setNombreCategoria(e.target.value)}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                size="lg"
                onClick={handleAddCategoria}
              >
                Guardar
              </Button>
              <Button onClick={handleResetInputAndClose} size="lg">
                Cerrar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/*MODAL PARA VER INFORMACIÓN */}
        <Modal size="5xl" isOpen={showModalInfo} onClose={handleCloseModalInfo}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontSize="25px" textAlign="center" marginTop={10}>
              Evitar problemas
            </ModalHeader>
            <ModalBody pb={6}>
              <Text marginTop={5}>
                Para evitar una perdida de datos, la opción de ELIMINAR
                categoría solo se mostrará cuando la categoría de un funko tenga
                asociado cero funkos.
              </Text>
              <Box width="100%" height="auto" marginTop={10}>
                <Image
                  src={Img_info}
                  alt="Imagen que muestra como se debería ver cuando una categoria se puede eliminar"
                />
              </Box>
            </ModalBody>

            <ModalFooter>
              <Button onClick={handleCloseModalInfo} size="lg">
                Cerrar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Heading
          display="flex"
          as="h1"
          size="xl"
          justifyContent="flex-start"
          marginTop={10}
        >
          Tabla de categorías
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
            placeholder="Search..."
            fontSize="15px"
            onChange={(e) => handlerSearch(e.target.value)}
          />
        </InputGroup>

        {/*Tabla */}
        <Box w={["90%", "90%"]} h="460px" mt={10} overflowY="scroll">
          <Table variant="simple" w="100%" size="lg" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>
                  <Button colorScheme="blue" size="lg" onClick={onOpen}>
                    <Text fontSize="14px" fontWeight="bold">
                      +
                    </Text>
                    Nuevo
                  </Button>
                </Th>

                <Th
                  fontSize="12px"
                  _hover={{ backgroundColor: "blue.500", color: "white" }}
                  backgroundColor={selectedTh === "nombre_categoria" ? "blue.500" : ""}
                  color={selectedTh === "nombre_categoria" ? "white" : ""}
                  onClick={() => handleOrdenarCategorias()}
                  cursor="pointer"
                >
                  Nombre
                </Th>
                <Th
                  fontSize="12px"
                  _hover={{ backgroundColor: "blue.500", color: "white" }}
                  backgroundColor={selectedTh === "total_productos" ? "blue.500" : ""}
                  color={selectedTh === "total_productos" ? "white" : ""}
                  onClick={() => handleOrdenarCategorias_total_products()}
                  cursor="pointer"
                >
                  Cant. Prod.
                </Th>
                <Th fontSize="12px">
                  Herramienta
                  <Button
                    fontSize="12px"
                    colorScheme="gray"
                    marginLeft={20}
                    onClick={handleOpenModalInfo}
                  >
                    ?
                  </Button>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {Categorias &&
                Categorias.map((categoria) => (
                  <TableRowCategoria
                    key={categoria.idcat}
                    categoria={categoria}
                  />
                ))}
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </>
  );
};

export default categorias;

categorias.auth = true;

export async function getServerSideProps() {
  const categorias = await getCategorias();
  return {
    props: { categorias },
  };
}
