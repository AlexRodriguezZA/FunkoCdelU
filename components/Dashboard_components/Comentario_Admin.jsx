//Componentes
import {
  Box,
  Text,
  Flex,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

//Funciones
import deleteComentario from '../../Utils/deleteComentario'
import { useRouter } from "next/router"

const Comentario_Admin = ({ comentario }) => {
  const bg = useColorModeValue('gray.100', 'gray.700')
  const borderColor = useColorModeValue('gray.300', 'gray.600')
  
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  }
  const handleDeleteComentario = async (id) =>{
    await deleteComentario(id)
    refreshData();
  }

  return (
    <Box
      p="4"
      bg={bg}
      border="1px"
      borderColor={borderColor}
      borderRadius="md"
      mb={5}
    >
      <Flex align="center">
        <Text fontWeight="bold" mr="2">
          {comentario.usuarioByDni.nombre}{""} {comentario.usuarioByDni.apellido}
        </Text>
        <Text fontSize="lg"  ml={10} color="gray.500">
          {comentario.fecha}
        </Text>
        <IconButton
          ml="auto"
          variant="ghost"
          aria-label="Delete comment"
          icon={<CloseIcon />}
          onClick={() => handleDeleteComentario(comentario.idcomentario)}
        />
      </Flex>
      <Text mt="2">{comentario.contenido}</Text>
    </Box>
  )
}

export default Comentario_Admin
