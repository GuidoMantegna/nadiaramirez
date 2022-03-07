import { NextComponentType } from "next";
import { Container, Flex, Center } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout: NextComponentType = ({ children }) => {
  return (
    <Container maxW="container.lg">
      <Flex height="90vh" align="center">
        <Center height="100%" flex="1" border="1px" borderColor="gray.200">
          <Navbar />
        </Center>
        <Center height="100%" flex="3" border="1px" borderColor="gray.200">
          {children}
        </Center>
      </Flex>
      <Container maxW="container.xl" height="10vh" border="1px" borderColor="gray.200">
        <Footer />
      </Container>
    </Container>
  );
};

export default Layout;
