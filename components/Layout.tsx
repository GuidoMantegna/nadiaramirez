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

const Layout: NextComponentType = ({ children }) => {
  const [isMobile] = useMediaQuery(["(max-width: 768px)"]);

  return (
    <>
      <Flex>
        <Navbar />
          {children}
      </Flex>
    </>
  );
};

export default Layout;
