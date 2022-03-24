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

      <VStack justify={{ base: "center", lg: "space-between" }} align='end' h={{ base: "100%", md: '80vh' }} /*p='0 20px'*/ pos='fixed' spacing='0px'>
        <Box w="200px" mb="75px">
          <Link href="/">
            <a>
              <Image src={nadiaRamirez} alt="na-logo" />
            </a>
          </Link>
        </Box>
        <VStack>
        <Link href="/illustration">
          <a>
            <Text
              color="blackAlpha.700"
              fontSize={{ md: '2xl', xl: '3xl' }}
              fontWeight="hairline"
            >
              illustration
            </Text>
          </a>
        </Link>
        <Link href="/patterns">
          <a>
            <Text
              color="blackAlpha.700"
              fontSize={{ md: '2xl', xl: '3xl' }}
              fontWeight="hairline"
            >
              patterns
            </Text>
          </a>
        </Link>
        <Link href="/about">
          <a>
            <Text
              color="blackAlpha.700"
              fontSize={{ md: '2xl', xl: '3xl' }}
              fontWeight="hairline"
            >
              about
            </Text>
          </a>
        </Link>
        <Link href="/contact">
          <a>
            <Text
              color="blackAlpha.700"
              fontSize={{ md: '2xl', xl: '3xl' }}
              fontWeight="hairline"
            >
              contact
            </Text>
          </a>
        </Link>
        </VStack>
      </VStack>
    </>
  );
};

export default Sidebar;
