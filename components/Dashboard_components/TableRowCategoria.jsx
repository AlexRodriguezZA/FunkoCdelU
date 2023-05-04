import { Tr, Td, Button, Box } from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
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

//Funciones
import deleteCategoria from "../../Utils/deleteCategoria";
import { useState } from "react";
import updateCategoria from "../../Utils/updateCategoria";
import { useRouter } from "next/router";

const TableRowCategoria = ({ categoria }) => {
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [NombreCategoria, setNombreCategoria] = useState(categoria.nombrecat);
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const handleOpenAlertDialog = () => {
    setShowAlertDialog(true);
  };

  const handleCloseAlertDialog = () => {
    setShowAlertDialog(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  //TODO: VER EL TEMA DE LA ELIMINACION DE LA CATEGORIA
  const handleDeleteCategoria = async () => {
    const res = await deleteCategoria(categoria.idcat);
    console.log(res);
    handleCloseAlertDialog();
    refreshData();
  };

  const handleEditCategoria = async () => {
    await updateCategoria(categoria.idcat, NombreCategoria);
    window.location.replace(""); //Reiniciamos la página
  };

  return (
    <>
      {/* FIlas de la tabla categoria */}
      <Tr>
        <Td>-</Td>
        <Td>{categoria.nombrecat}</Td>
        <Td>{categoria.productosByIdcat.totalCount}</Td>

        <Td>
          <Box display="flex">
            {/* Modal de edición de la tabla categoria */}
            {showModal && (
              <Modal size="5xl" isOpen={showModal} onClose={handleCloseModal}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader fontSize="25px" textAlign="center">
                    Editar categoría
                  </ModalHeader>
                  <ModalBody pb={6}>
                    <FormControl>
                      <FormLabel fontSize="18px">Edite categoría</FormLabel>
                      <Input
                        placeholder="Nombre Categoría"
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
                      onClick={handleEditCategoria}
                    >
                      Guardar
                    </Button>
                    <Button size="lg" onClick={handleCloseModal}>
                      Cerrar
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            )}
            <Button
              colorScheme="teal"
              marginRight={10}
              onClick={handleOpenModal}
            >
              Editar
            </Button>
            {/* Alerta de eliminacion de la tabla categoria */}
            {showAlertDialog && (
              <AlertDialog
                size="5xl"
                isOpen={showAlertDialog}
                onClose={handleCloseAlertDialog}
              >
                <AlertDialogOverlay>
                  <AlertDialogContent>
                    <AlertDialogHeader fontWeight="bold" fontSize="25px">
                      Eliminar categoría
                    </AlertDialogHeader>

                    <AlertDialogBody fontSize="18px">
                      ¿Seguro que desea eliminar la categoría{" "}
                      {categoria.nombrecat}?
                    </AlertDialogBody>

                    <AlertDialogFooter>
                      <Button onClick={handleCloseAlertDialog} size="lg">
                        Cancel
                      </Button>
                      <Button
                        colorScheme="red"
                        size="lg"
                        onClick={handleDeleteCategoria}
                        ml={3}
                      >
                        Delete
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialogOverlay>
              </AlertDialog>
            )}
            {categoria.productosByIdcat.totalCount === 0 ? (
              <Button colorScheme="red" onClick={handleOpenAlertDialog}>
                Eliminar
              </Button>
            ) : null}
          </Box>
        </Td>
      </Tr>
    </>
  );
};

export default TableRowCategoria;
