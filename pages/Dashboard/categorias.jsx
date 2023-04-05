import { Flex, Heading, Button, Box, Text } from "@chakra-ui/react";
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
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Alert, AlertIcon,AddIcon } from "@chakra-ui/react";
import Image from "next/image";
import Img_info from "../../assets/Img_info.png";
import TableRowCategoria from "../../components/Dashboard_components/TableRowCategoria";


//Funciones
import { useDisclosure } from "@chakra-ui/react";
import getCategorias from "../../Utils/getCategorias";
import setCategoria from "../../Utils/setCategoria";
import { useState } from "react";
import { useRouter } from 'next/router';

const categorias = ({ categorias }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [NombreCategoria, setNombreCategoria] = useState("");
  const [SuccessDataSave, setSuccessDataSave] = useState(false);
  const [showModalInfo, setshowModalInfo] = useState(false);
  const router = useRouter();
  
  const refreshData = () => {
    router.replace(router.asPath);
  }
  const handleOpenModalInfo = () => {
    setshowModalInfo(true);
  };

  const handleCloseModalInfo = () => {
    setshowModalInfo(false);
  };

  const handleAddCategoria = async () => {
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
    refreshData()
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
              Nueva categoria
            </ModalHeader>
            <ModalBody pb={6}>
              {SuccessDataSave && (
                <Alert status="success">
                  <AlertIcon />
                  Se agregó con exito la categoria!
                </Alert>
              )}
              <FormControl>
                <FormLabel fontSize="18px">Ingrese categoria</FormLabel>
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
                categoria solo se mostrará cuando la categoria de un funko tenga
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
          marginTop={20}
        >
          Tabla de categorias
        </Heading>
                
                
        {/*Tabla */}

        <Box w={["90%", "90%"]} h="450px" mt={20} overflowY="scroll">
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

                <Th fontSize="12px">Nombre</Th>
                <Th fontSize="12px">Cant. Prod.</Th>
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
              {categorias &&
                categorias.map((categoria) => (
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
