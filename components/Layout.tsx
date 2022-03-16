import { NextComponentType } from "next";
import { Container, Flex, Center, Box, useMediaQuery } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";

const Layout: NextComponentType = ({ children }) => {
  const [isMobile] = useMediaQuery(["(max-width: 768px)"]);

  useEffect(() => {
    console.log(isMobile);
  });
  return (
    <Container maxW="container.lg">
      <Flex
        minHeight="90vh"
        align="center"
        direction={isMobile ? "column" : "row"}
      >
        <Flex
          align="flex-end"
          flexDirection="column"
          w="100%"
          minH="15vh"
          p="10px"
          flex="1"
          // border="1px"
          // borderColor="gray.200"
        >
          <Navbar />
        </Flex>
        <Center
          height="100%"
          flex="3"
          // border="1px"
          // borderColor="gray.200"
          p="25px"
        >
          {children}
        </Center>
      </Flex>
      <Container
        maxW="container.xl"
        height="10vh"
        // border="1px"
        // borderColor="gray.200"
      >
        <Footer />
      </Container>
    </Container>
  );
};

export default Layout;
