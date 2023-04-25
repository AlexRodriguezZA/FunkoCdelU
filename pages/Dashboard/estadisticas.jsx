import { Flex, Heading, Button, Box, Text } from "@chakra-ui/react";
import Bars from "../../components/Dashboard_components/Charts/Bar";
import Pies from "../../components/Dashboard_components/Charts/Pie";
import Tabla_Funkos_masVendidos from "../../components/Dashboard_components/Tabla_Funkos_masVendidos";
import Tabla_usuarioMasCompras from "../../components/Dashboard_components/Tabla_usuarioMasCompras";
import Top3Funkos_masVendidos from "../../Utils/Top3Funkos_masVendidos";
import Top3usuarios_masCompras from "../../Utils/Top3usuarios_masCompras";
import CrearArrayVentas from "../../Utils/Funciones Charts/CrearArrayVentas";
import CrearArray_porcentajesCategorias from "../../Utils/Funciones Charts/CrearArray_porcentajesCategorias";
const estadisticas = ({Top3_Funkos,Top3_Usuarios,array_ventas,objeto_categorias_porcentajes}) => {
  return (
    <>
      <Flex
        w="100%"
        justifyContent="center"
        mt={5}
        alignItems="center"
        flexDir={["column", "column", "column"]}

      >
        <Heading
          display="flex"
          as="h1"
          size="xl"
          justifyContent="flex-start"
          marginTop={10}
        >
          Estadisticas
        </Heading>

      <Box width="100%" display="flex" justifyContent="center" mt={5} gap={10} flexDir={["column","column", "column", "row"]}>
        <Box display="flex" justifyContent="center"  borderWidth="3px" p="4" width={["100%","100%", "100%", "45%"]}>
            <Bars array_ventas={array_ventas}/>
        </Box>
        <Box display="flex" justifyContent="center"  borderWidth="3px" p="4" width={["100%","100%", "100%", "45%"]}>
          <Tabla_usuarioMasCompras Top3_usuarios={Top3_Usuarios}/>
        </Box>
      </Box>

      <Box width="100%" display="flex" justifyContent="center" mt={5} mb={5} gap={10} flexDir={["column","column", "column", "row"]}>
        <Box width={["100%","100%", "100%", "45%"]} display="flex" justifyContent="center"  borderWidth="3px" p="4"  >
          <Tabla_Funkos_masVendidos Top3_Funkos={Top3_Funkos}/>
        </Box>
        <Box width={["100%","100%", "100%", "45%"]} display="flex" justifyContent="center"  borderWidth="3px" p="4" >
          <Pies data_categoria={objeto_categorias_porcentajes}/>
        </Box>
      </Box>
      
       
      </Flex>
    </>
  );
};
estadisticas.auth = true;

export default estadisticas;

export async function getServerSideProps() {
  const Top3_Funkos = await Top3Funkos_masVendidos();
  const Top3_Usuarios = await Top3usuarios_masCompras();
  const array_ventas = await CrearArrayVentas();
  const objeto_categorias_porcentajes = await CrearArray_porcentajesCategorias();
  return {
    props: { Top3_Funkos,Top3_Usuarios, array_ventas, objeto_categorias_porcentajes },
  };
}
