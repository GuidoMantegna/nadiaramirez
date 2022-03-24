import type { NextComponentType } from "next";
import { useRef } from "react";
import {
  Center,
  Container,
  Heading,
  Text,
  Stack,
  HStack,
  VStack,
  Input,
  Box,
  Flex,
  Drawer,
  DrawerBody,
  Button,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useMediaQuery,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import Image from "next/image";
import Link from "next/link";
import na from "../public/assets/na.png";
import nadiaRamirez from "../public/assets/nadia-ramirez-negro.png";
import nadia from "../styles/na-negro.png";

const Sidebar: NextComponentType = () => {
  const [isMobile] = useMediaQuery(["(max-width: 768px)"]);

  return (
    <>
      <VStack
        // justify={{ base: "center", lg: "space-between" }}
        justify="center"
        align="end"
        mt="10vh"
        // h={{ base: "100%", md: "80vh" }}
        h="80vh"
        pos="fixed"
        spacing="0px"
        color="blackAlpha.700"
        fontSize={{ md: "xl", xl: "2xl" }}
        fontWeight="hairline"
      >
        <Box w="200px" mb="75px">
          <Link href="/">
            <a>
              <Image src={nadiaRamirez} alt="na-logo" />
            </a>
          </Link>
        </Box>
        <VStack align='flex-end'>
          <Link href="/illustration">
            <a>
              <Text>illustration</Text>
            </a>
          </Link>
          <Link href="/patterns">
            <a>
              <Text>patterns</Text>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <Text>about</Text>
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <Text>contact</Text>
            </a>
          </Link>
        </VStack>
      </VStack>
    </>
  );
};

export default Sidebar;
