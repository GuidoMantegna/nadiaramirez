import { NextComponentType } from "next";
import {
  Container,
  Flex,
  Center,
  Box,
  useMediaQuery,
  extendTheme,
} from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";
import Sidebar from "./Sidebar";

const Layout: NextComponentType = ({ children }) => {
  const [isMobile] = useMediaQuery(["(max-width: 768px)"]);

  return (
    <Container maxW="container.xl">
      <Flex minHeight="90vh" direction={{ base: "column", md: "row" }}>
        <Flex
          pos={{ base: "fixed" }}
          left={{ base: "0px" }}
          zIndex={1}
          justify="space-between"
          align="center"
          w="100%"
          minH={{ base: "10vh" }}
          p="0 15px"
          flex="1"
          bgColor="white"
        >
          <Navbar />
        </Flex>
        <Flex
          flex="1"
          display={{ base: "none", md: "flex" }}
          justify="center"
          mt={{ lg: "10vh" }}
        >
          <Sidebar />
        </Flex>
        <Center
          mt={{ base: "10vh" }}
          flex={{ base: "2", lg: "3" }}
          p="0 15px"
          flexDirection="column"
        >
          {children}
          <Flex h="10vh" w="100%">
            <Footer />
          </Flex>
        </Center>
      </Flex>
    </Container>
  );
};

export default Layout;
