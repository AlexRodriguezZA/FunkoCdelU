//Componentes
import {
  Tr,
  Td,
  Button,
  Box,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Badge,
} from "@chakra-ui/react";
import Image from "next/image";
import No_image from "../../assets/no_image.webp";
import ImagenFunko from "./ImagenFunko";
import star from "../../assets/Icons/star.svg";

//Funciones
import deleteProducto from "../../Utils/Crud_productos_admin/deleteProducto";
import { useState } from "react";
import { useRouter } from "next/router";
import Modal_edit_Funko from "./Modal_edit_Funko";

const TableRowProductos = ({ producto, OpenModalComentarios, categorias }) => {
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const [OpenModalEditFunko, setOpenModalEditFunko] = useState(false);

  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };
  const handleOpenModalEditFunko = () => {
    setOpenModalEditFunko(true);
  };
  const handleCloseModalEditFunko = () => {
    setOpenModalEditFunko(false);
    window.location.replace(""); //Reiniciamos la página
  };

  const handleOpenAlertDialog = () => {
    setShowAlertDialog(true);
  };

  const handleCloseAlertDialog = () => {
    setShowAlertDialog(false);
  };

  const handleDeleteProducto = async () => {
    const res = await deleteProducto(producto.idprod);
    console.log(res);
    window.location.replace(""); //Reiniciamos la página

    handleCloseAlertDialog();
  };

  return (
    <>
      {/*Alerta la cual me permite consultar si se quiere eliminar el producto */}
      <AlertDialog
        size="5xl"
        isOpen={showAlertDialog}
        onClose={handleCloseAlertDialog}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontWeight="bold" fontSize="25px">
              Eliminar Funko
            </AlertDialogHeader>

            <AlertDialogBody fontSize="18px">
              ¿Seguro que desea eliminar el funko {producto.nombre}?. Tenga en
              cuenta que si elimina el funko se le eliminará del historial de
              ventas.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={handleCloseAlertDialog} size="lg">
                Cancel
              </Button>
              <Button
                colorScheme="red"
                size="lg"
                onClick={handleDeleteProducto}
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      <Tr>
        <Td></Td>
        <Td>{producto.categoriaByIdcat.nombrecat}</Td>
        <Td>{producto.nombre}</Td>
        <Td>
          {/*
                producto.imagen === null ? <Image/>
                */}
          {producto.imagen === null ? (
            <Image
              src={No_image}
              width={70}
              height={30}
              alt={`Imagen del funko ${producto.nombre}`}
            />
          ) : (
            <ImagenFunko
              imagen_name={producto.imagen}
              nombreFunko={producto.nombre}
            />
          )}
        </Td>
        <Td>
          {producto.stock}
          {producto.stock === 0 ? (
            <Badge colorScheme="red" ml="1">
              Low
            </Badge>
          ) : null}
        </Td>
        <Td>#{producto.numerofunko}</Td>
        <Td>${producto.precio}</Td>
        <Td>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={3}
          >
            {producto.promediocalificacion}
            <Image src={star} width={14} alt="Imagen de rating start" />
          </Box>
        </Td>
        <Td>
          <Button
            colorScheme="telegram"
            onClick={() => OpenModalComentarios(producto.idprod)}
          >
            ver ({producto.comentariosByIdprod.totalCount})
          </Button>
        </Td>
        <Td>
          <Box display="flex" alignItems="center" justifyContent="center">
            {OpenModalEditFunko && (
              <Modal_edit_Funko
                isOpen={OpenModalEditFunko}
                onClose={handleCloseModalEditFunko}
                categorias={categorias}
                producto={producto}
              />
            )}
            <Button
              colorScheme="teal"
              marginRight={5}
              onClick={handleOpenModalEditFunko}
            >
              Editar
            </Button>
            {showAlertDialog && (
              <AlertDialog
                size="5xl"
                isOpen={showAlertDialog}
                onClose={handleCloseAlertDialog}
              >
                <AlertDialogOverlay>
                  <AlertDialogContent>
                    <AlertDialogHeader fontWeight="bold" fontSize="25px">
                      Eliminar Funko
                    </AlertDialogHeader>

                    <AlertDialogBody fontSize="18px">
                      ¿Seguro que desea eliminar el funko {producto.nombre}?.
                      Tenga en cuenta que si elimina el funko se le eliminará
                      del historial de ventas.
                    </AlertDialogBody>

                    <AlertDialogFooter>
                      <Button onClick={handleCloseAlertDialog} size="lg">
                        Cancel
                      </Button>
                      <Button
                        colorScheme="red"
                        size="lg"
                        onClick={handleDeleteProducto}
                        ml={3}
                      >
                        Delete
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialogOverlay>
              </AlertDialog>
            )}
            <Button colorScheme="red" onClick={handleOpenAlertDialog}>
              Eliminar
            </Button>
          </Box>
        </Td>
      </Tr>
    </>
  );
};

export default TableRowProductos;
