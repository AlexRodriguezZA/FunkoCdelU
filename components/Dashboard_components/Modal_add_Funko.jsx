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
  Divider
} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'


import addNewFunko from '../../Utils/addNewFunko'
import setCategoria from '../../Utils/setCategoria'
import { useState,useEffect } from 'react'
import { useRouter } from 'next/router'
function Modal_add_Funko({isOpen, onClose, categorias}) {

  const [name, setName] = useState('')
  const [NumberFunko, setNumberFunko] = useState('')
  const [category, setCategory] = useState('')
  const [stock, setStock] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('') //Este estado es ocupado para poder leer la imagen desde el codigo frontend
  const [ImagenEnvio, setImagenEnvio] = useState('') //Este estado es ocupado para poder enviar la imagen al servidor 
  const [Error, setError] = useState(false)
  const [SendInfo, setSendInfo] = useState(false)
  const [OpenInput, setOpenInput] = useState(false)
  const [NewCategoria, setNewCategoria] = useState('')

  const router = useRouter();
  
  const refreshData = () => {
    router.replace(router.asPath);
  }
  const handleResetForm = ()=>{
    setName("");
    setPrice("");
    setImage(null);
    setStock("");
    setNumberFunko("");
    setImagenEnvio(null);
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    /*console.log('Nombre:', name)
    console.log('Numero Funko:', NumberFunko)
    console.log('Categoría:', category)
    console.log('Stock:', stock)
    console.log('Precio:', price)
    console.log("fileEnvio", ImagenEnvio?.name)*/
    if  (name === '' || NumberFunko === null || 
        category === null || price === null || image === null || ImagenEnvio == null) {
        setError(true);
    }
    else{
       await addNewFunko(name,price,NumberFunko,stock,ImagenEnvio.name,category,ImagenEnvio)
       setSendInfo(true);
       setError(false);
       
       handleResetForm();
       refreshData();
    }
   
  }
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
}

  const handleOpenAddNewCategoria = () =>{
    setOpenInput(true)
  }
  const handleCloseAddNewCategoria = () =>{
    setOpenInput(false)
    setNewCategoria("")

  }


  const handleSaveNewCategoria = async ()=>{
    await setCategoria(NewCategoria)
    refreshData()
    handleCloseAddNewCategoria();
  }

  useEffect(() => {
    
  }, [categorias])
  

 
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}  size={{ base: "xl", sm: "400px", lg: "400px" }}>
        <ModalOverlay />
        <ModalContent bg="gray.100" width="700px" >
          <ModalHeader textAlign="center" fontSize={25}>Agregar Funko Pop</ModalHeader>
          {
            Error && (<Alert status='error'>
                        <AlertIcon />
                        <AlertTitle>Complete TODOS los campos!</AlertTitle>
                        <AlertDescription>Ingrese todos los campos para evitar problemas.</AlertDescription>
                      </Alert>)
          }
          {
            SendInfo && (<Alert status='success'>
                          <AlertIcon />
                          <AlertTitle>Funko cargado correctamente!</AlertTitle>
                        </Alert>)
          }
          <Divider/>
          <ModalCloseButton />
          <ModalBody>
          <Grid templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={5}>

            <FormControl isRequired isInvalid={!name}  mt={5} mb={10}>
              <FormLabel fontSize={15}>Nombre del Funko</FormLabel>
              <Input type="text" value={name} size="lg" fontSize={12} borderColor="gray.300"  focusBorderColor="lime" onChange={e => setName(e.target.value)} />
            </FormControl>
            
            <FormControl mt={5} mb={10} isRequired isInvalid={!NumberFunko}>
              <FormLabel fontSize={15}>Número del Funko</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents='none' children='#'/>
                <Input type="number" value={NumberFunko} size="lg" fontSize={12} borderColor="gray.300"  focusBorderColor='lime' onChange={e => setNumberFunko(e.target.value)} />
              </InputGroup>
            </FormControl>
          
            <FormControl mb={10}  isRequired isInvalid={!stock} >
              <FormLabel fontSize={15}>Stock</FormLabel>
              <Input type="number" value={stock} size="lg" colorScheme='white' borderColor="gray.300" fontSize={12} focusBorderColor="lime" onChange={e => setStock(e.target.value)} />
            </FormControl>
            
            <FormControl mb={10}  isRequired isInvalid={!price} >
              <FormLabel fontSize={15}>Precio</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents='none' children='$'/>
                <Input type="number" value={price} size="lg" fontSize={12} borderColor="gray.300"  focusBorderColor="lime" onChange={e => setPrice(e.target.value)} />
              </InputGroup>
            </FormControl>

            <FormControl mb={10}  isRequired isInvalid={!category} >
              <FormLabel fontSize={15}>Categoría</FormLabel>
              <Box display="flex" flexDir="column" >
                <Select value={category} size="lg" width="100%" borderColor="gray.300"  fontSize={12} onChange={e => setCategory(e.target.value)}>
                  <option value="">Category</option>
                { categorias && categorias.map( categoria => <option key={categoria.idcat} value={categoria.idcat}>{categoria.nombrecat}</option>) 
                }
                </Select>
                {
                    OpenInput === true && 
                    ( <FormControl mt={3} mb={3}>
                        <InputGroup >
                          <InputLeftElement  children={<Button h="27px" mt={2} colorScheme="red" onClick={handleCloseAddNewCategoria}><CloseIcon/></Button>
                          }/>
                          <Input type="text" size="lg" borderColor="gray.300"  placeholder='Ingrese nueva categoria'  value={NewCategoria} onChange={(e) => setNewCategoria(e.target.value)} fontSize={12}/>                    
                        </InputGroup> 
                      </FormControl>)

                }
                {
                  OpenInput === true ? <Button mt={3} size="lg" fontSize={12} colorScheme="blue" onClick={handleSaveNewCategoria}>Guardar categoria</Button>
                  : <Button mt={3} size="lg" fontSize={12} colorScheme="green" onClick={handleOpenAddNewCategoria}>Agregar categoria</Button>

                }
              </Box> 
            </FormControl>
            
            <FormControl mb={5}>
              <FormLabel fontSize={15}>Imagen</FormLabel>
              <Input type="file" size="lg" fontSize={12} onChange={handleImageChange} />

              {image && (
                <Box mt={4}>
                    <Center>
                        <Image src={image} maxW="200px" maxH="200px" />
                        <Button onClick={()=>handleRemoveImage}>x</Button>
                    </Center>
                </Box>
                )}
            </FormControl>
            </Grid>

          </ModalBody>
          <ModalFooter>
            <Button onClick={handleSubmit} size="lg" colorScheme='blue'>Agregar Funko</Button>

          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export  default Modal_add_Funko;
