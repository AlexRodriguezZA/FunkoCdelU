import Head from "next/head";
import React, { useState } from "react";
import {
  Flex,
  Heading,
  Avatar,
  Text,

  Link,
  Button,

} from "@chakra-ui/react";

import { signOut } from "next-auth/react";
const Layout_admin = ({ children }) => {
  return (
    <>
      <Head>
        <title>Funko C del U - Admin</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Flex
            h={[null, null, "100vh"]}
            maxW="2000px"
            flexDir={["column", "column", "row"]}
            overflow="hidden"
        >

      
      <Flex
        w={["100%", "100%", "10%", "15%", "15%"]}
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
              flexDir={["row", "row", "column", "column", "column"]}
              align={["center", "center", "center", "flex-start", "flex-start"]}
              wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
              justifyContent="center"
            >
              <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Link
                  href="/Dashboard"
                  _hover={{ textDecor: "none" }}
                  display={["flex", "flex", "none", "flex", "flex"]}
                >
                  <Text className="active">Inicio</Text>
                </Link>
              </Flex>
              <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Link
                  href="/Dashboard/categorias"
                  _hover={{ textDecor: "none" }}
                  display={["flex", "flex", "none", "flex", "flex"]}
                >
                  <Text>Categorias</Text>
                </Link>
              </Flex>
              <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Link
                  href="/Dashboard/productos"
                  _hover={{ textDecor: "none" }}
                  display={["flex", "flex", "none", "flex", "flex"]}
                >
                  <Text>Productos</Text>
                </Link>
              </Flex>
            </Flex>
          </Flex>
          <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
            <Avatar my={2} src="avatar-1.jpg" />
            <Text textAlign="center">Funko C del U</Text>
            <Button
              onClick={() => signOut({ callbackUrl: "http://localhost:3000/" })}
              mt="10px"
              bg="blue.600"
              _hover={{ textDecor: "none" }}
            >
              Cerra Sesión
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Flex h={[null, null, "100vh"]}
            flexDir="column"
            w="100%"
            alignItems="center">
        {children}
      </Flex>
      </Flex>
    </>
  );
};

export default Layout_admin;