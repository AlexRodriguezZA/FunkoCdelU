//Componentes
import Head from "next/head";
import { Flex, Heading, Avatar, Text, Link, Button,AvatarBadge  } from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons'

//Funciones 
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import path from "path";
import { signOut } from "next-auth/react";

const Layout_admin = ({ children }) => {

  const [estaEnLinea, setEstaEnLinea] = useState(true);

  useEffect(() => {
    function actualizarEstadoConexion() {
      setEstaEnLinea(navigator.onLine);
    }

    window.addEventListener('online', actualizarEstadoConexion);
    window.addEventListener('offline', actualizarEstadoConexion);

    return () => {
      window.removeEventListener('online', actualizarEstadoConexion);
      window.removeEventListener('offline', actualizarEstadoConexion);
    };
  }, []);
  const router = useRouter();
  const { pathname } = router;
  const pagina_name = path.basename(pathname);

  return (

    <>
      <Head>
        <title>Funko C del U - {pagina_name}</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Flex
        h={[null, null, "100vh"]}
        maxW="2000px"
        flexDir={["column", "column", "row"]}
        overflow="hidden"
      >
        <Flex
          w={["100%", "100%", "15%", "15%"]}
          flexDir="column"
          alignItems="center"
          backgroundColor="#111217"
          color="#fff"
        >
          <Flex
            flexDir="column"
            h={[null, null, "100vh"]}
            justifyContent="space-between"
          >
            <Flex flexDir="column" as="nav">
              <Heading
                mt={50}
                mb={[25, 50, 100]}
                fontSize={["4xl", "4xl", "2xl", "3xl", "4xl"]}
                alignSelf="center"
                letterSpacing="right"
              >
                Dashboard
              </Heading>
              <Flex
                flexDir={["row", "row", "column", "column"]}
                align={[
                  "center",
                  "center",
                  "center",
                  "flex-start",
                  "flex-start",
                ]}
                wrap={["wrap", "wrap", "nowrap", "nowrap"]}
                justifyContent="center"
              >
                <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                  <Link
                    href="/Dashboard"
                    _hover={{ textDecor: "none" }}
                    display={["flex", "flex", "none", "flex", "flex"]}
                  >
                    {pagina_name === "Dashboard" ? (
                      <Text className="active">Inicio <ChevronRightIcon  boxSize={8}/></Text>
                    ) : (
                      <Text>Inicio <ChevronRightIcon boxSize={8}/></Text>
                    )}
                  </Link>
                </Flex>
                <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                  <Link
                    href="/Dashboard/categorias"
                    _hover={{ textDecor: "none" }}
                    display={["flex", "flex", "none", "flex", "flex"]}
                  >
                    {pagina_name === "categorias" ? (
                      <Text className="active">Categorías <ChevronRightIcon boxSize={8}/></Text>
                    ) : (
                      <Text>Categorías <ChevronRightIcon boxSize={8}/></Text>
                    )}
                  </Link>
                </Flex>
                <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                  <Link
                    href="/Dashboard/productos"
                    _hover={{ textDecor: "none" }}
                    display={["flex", "flex", "none", "flex", "flex"]}
                  >
                     {pagina_name === "productos" ? (
                      <Text className="active">Productos <ChevronRightIcon boxSize={8}/></Text>
                    ) : (
                      <Text>Productos <ChevronRightIcon boxSize={8}/></Text>
                    )}
                  </Link>
                </Flex>
                <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                  <Link
                    href="/Dashboard/clientes"
                    _hover={{ textDecor: "none" }}
                    display={["flex", "flex", "none", "flex", "flex"]}
                  >
                     {pagina_name === "clientes" ? (
                      <Text className="active">Clientes <ChevronRightIcon boxSize={8}/></Text>
                    ) : (
                      <Text>Clientes <ChevronRightIcon boxSize={8}/></Text>
                    )}
                  </Link>
                </Flex>
                <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                  <Link
                    href="/Dashboard/estadisticas"
                    _hover={{ textDecor: "none" }}
                    display={["flex", "flex", "none", "flex", "flex"]}
                  >
                     {pagina_name === "estadisticas" ? (
                      <Text className="active">Estadísticas <ChevronRightIcon boxSize={8}/></Text>
                    ) : (
                      <Text>Estadísticas <ChevronRightIcon boxSize={8}/></Text>
                    )}
                  </Link>
                </Flex>
              </Flex>
            </Flex>
            <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
              {
                estaEnLinea ? <Avatar my={2} size='lg' src="https://moldesde.com/wp-content/uploads/2012/02/letra_31.png.jpg">
                                <AvatarBadge boxSize='13px' bg='green.400' />
                              </Avatar> 
                              :
                              <Avatar my={2} size='lg' src="https://moldesde.com/wp-content/uploads/2012/02/letra_31.png.jpg">
                                <AvatarBadge boxSize='13px' bg='red.400' />
                              </Avatar>  

              }
              
              <Text textAlign="center">Funko C del U</Text>
              <Button
                onClick={() =>
                  signOut({ callbackUrl: "http://localhost:3000/" })
                }
                mt="10px"
                bg="blue.600"
                _hover={{ textDecor: "none" }}
              >
                Cerrar Sesión
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          h={[null, null, "100vh"]}
          flexDir="column"
          w="100%"
          alignItems="center"
        >
          {children}
        </Flex>
      </Flex>
    </>
  );
};

export default Layout_admin;
