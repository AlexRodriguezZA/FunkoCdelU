//Componentes
import {
  Grid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Select,
  Box,
  Button,
  Center,
  InputLeftElement,
  Image,
} from "@chakra-ui/react";

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";


//Funciones
import setCategoria from "../../Utils/setCategoria";
import EditFunko from "../../Utils/Crud_productos_admin/EditFunko";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";




function Modal_edit_Funko({ isOpen, onClose, categorias, producto }) {
  const [name, setName] = useState(producto.nombre);
  const [NumberFunko, setNumberFunko] = useState(producto.numerofunko);
  const [category, setCategory] = useState(producto.idcat);
  const [stock, setStock] = useState(producto.stock);
  const [price, setPrice] = useState(producto.precio);
  const [ImagenDelBackend, setImagenDelBackend] = useState(`http://localhost:5000/public_funko_img/${producto.imagen}`);
  const [Error, setError] = useState(false);
  const [SendInfo, setSendInfo] = useState(false);
  const [image, setImage] = useState(null);
  const [ImagenEnvio, setImagenEnvio] = useState('') //Este estado es ocupado para poder enviar la imagen al servidor 

  const [OpenInput, setOpenInput] = useState(false);
  const [NewCategoria, setNewCategoria] = useState("");

  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    /*console.log("Nombre:", name);
    console.log("Numero Funko:", NumberFunko);
    console.log("Categoría:", category);
    console.log("Stock:", stock);
    console.log("Precio:", price);
    console.log("Imagen:", producto.imagen);*/
    if (
      name === null ||
      NumberFunko === null ||
      category === null ||
      price === null ||
      stock == null 
    ) {
      setError(true);
    } else {
      setError(false)
      setSendInfo(true);
      //Aca evaluamos si el usuario cargó una nueva imagen, si no la subio, guardamos la imagen que tenia
      //de lo contrario guardamos la nueva imagen -> 
      //-> el nombre de la imagen nueva (ImagenEnvio.name) y mandamos el archivo al backend (ImagenEnvio)
      if (!image) {
          await EditFunko(name,price,NumberFunko,stock,producto.imagen,category,producto.idprod)        
      }
      else{
          await EditFunko(name,price,NumberFunko,stock,ImagenEnvio.name,category,producto.idprod,ImagenEnvio)        

      }
    }
    //onClose()
  };

  const handleOpenAddNewCategoria = () => {
    setOpenInput(true);
  };
  const handleCloseAddNewCategoria = () => {
    setOpenInput(false);
    setNewCategoria("");
  };
  const handleSaveNewCategoria = async () => {
    await setCategoria(NewCategoria);
    refreshData();
    handleCloseAddNewCategoria();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImagenEnvio(file)
    if (!file) {
      setImage(null);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {}, [categorias]);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "xl", sm: "400px", lg: "400px" }}
      >
        <ModalOverlay />
        <ModalContent bg="gray.100" width="700px">
          <ModalHeader textAlign="center" fontSize={25}>
            Editar Funko Pop
          </ModalHeader>
          {Error && (
            <Alert status="error">
              <AlertIcon />
              <AlertTitle>Complete TODOS los campos!</AlertTitle>
              <AlertDescription>
                Ingrese todos los campos para evitar problemas.
              </AlertDescription>
            </Alert>
          )}
          {SendInfo && (
            <Alert status="success">
              <AlertIcon />
              <AlertTitle>Funko cargado correctamente!</AlertTitle>
            </Alert>
          )}
          <Divider />
          <ModalCloseButton />
          <ModalBody>
            <Grid
              templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
              gap={5}
            >
              <FormControl mt={5} mb={10} isRequired isInvalid={!name}>
                <FormLabel fontSize={15}>Nombre del Funko</FormLabel>
                <Input
                  type="text"
                  value={name}
                  size="lg"
                  fontSize={12}
                  borderColor="gray.300"
                  focusBorderColor="lime"
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>

              <FormControl mt={5} mb={10} isRequired isInvalid={!NumberFunko}>
                <FormLabel fontSize={15}>Número del Funko</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" children="#" />
                  <Input
                    type="number"
                    value={NumberFunko}
                    size="lg"
                    fontSize={12}
                    borderColor="gray.300"
                    focusBorderColor="lime"
                    onChange={(e) => setNumberFunko(e.target.value)}
                  />
                </InputGroup>
              </FormControl>

              <FormControl mb={10} isRequired isInvalid={!stock}>
                <FormLabel fontSize={15}>Stock</FormLabel>
                <Input
                  type="number"
                  value={stock}
                  size="lg"
                  colorScheme="white"
                  borderColor="gray.300"
                  fontSize={12}
                  focusBorderColor="lime"
                  onChange={(e) => setStock(e.target.value)}
                />
              </FormControl>

              <FormControl mb={10} isRequired isInvalid={!price}>
                <FormLabel fontSize={15}>Precio</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" children="$" />
                  <Input
                    type="number"
                    value={price}
                    size="lg"
                    fontSize={12}
                    borderColor="gray.300"
                    focusBorderColor="lime"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </InputGroup>
              </FormControl>

              <FormControl mb={10} isRequired isInvalid={!category}>
                <FormLabel fontSize={15}>Categoría</FormLabel>
                <Box display="flex" flexDir="column">
                  <Select
                    value={category}
                    size="lg"
                    width="100%"
                    borderColor="gray.300"
                    fontSize={12}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    {categorias &&
                      categorias.map((categoria) => (
                        <option key={categoria.idcat} value={categoria.idcat}>
                          {categoria.nombrecat}
                        </option>
                      ))}
                  </Select>
                  {OpenInput === true && (
                    <FormControl mt={3} mb={3}>
                      <InputGroup>
                        <InputLeftElement
                          children={
                            <Button
                              h="27px"
                              mt={2}
                              colorScheme="red"
                              onClick={handleCloseAddNewCategoria}
                            >
                              <CloseIcon />
                            </Button>
                          }
                        />
                        <Input
                          type="text"
                          size="lg"
                          borderColor="gray.300"
                          placeholder="Ingrese nueva categoria"
                          value={NewCategoria}
                          onChange={(e) => setNewCategoria(e.target.value)}
                          fontSize={12}
                        />
                      </InputGroup>
                    </FormControl>
                  )}
                  {OpenInput === true ? (
                    <Button
                      mt={3}
                      size="lg"
                      fontSize={12}
                      colorScheme="blue"
                      onClick={handleSaveNewCategoria}
                    >
                      Guardar categoría
                    </Button>
                  ) : (
                    <Button
                      mt={3}
                      size="lg"
                      fontSize={12}
                      colorScheme="green"
                      onClick={handleOpenAddNewCategoria}
                    >
                      Agregar categoría
                    </Button>
                  )}
                </Box>
              </FormControl>

              <FormControl mb={5}>
                <FormLabel fontSize={15}>Imagen</FormLabel>
                <Input
                  type="file"
                  size="lg"
                  fontSize={12}
                  onChange={handleImageChange}
                />

                {ImagenDelBackend && !image && (
                  <Box mt={4}>
                    <Center>
                      <Image src={ImagenDelBackend} maxW="200px" maxH="200px" />
                    </Center>
                  </Box>
                )}
                {image && (
                  <Box mt={4}>
                    <Center>
                      <Image src={image} maxW="200px" maxH="200px" />
                    </Center>
                  </Box>
                )}
              </FormControl>
            </Grid>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleSubmit} size="lg" colorScheme="blue">
              Guardar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Modal_edit_Funko;
