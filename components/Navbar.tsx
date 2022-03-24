import type { NextComponentType } from "next";
import { useRef } from "react";
import {
  Center,
  Container,
  Heading,
  Text,
  Stack,
  HStack,
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

const Navbar: NextComponentType = () => {
  const [isMobile] = useMediaQuery(["(max-width: 768px)"]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    // <Flex
    //   // pos="fixed"
    //   top={isMobile ? "0" : "40vh"}
    //   right="0"
    //   flexDirection="column"
    //   align="flex-end"
    //   bgColor="white"
    //   zIndex={1}
    //   p="15px"
    //   w={['100%', '100%', 'min-content']}
    //   border="1px"
    //   borderColor="gray.200"
    // >
    <>
      <Box w="150px" h="auto" pos={{ md: 'fixed' }} top='0' display={{ md: 'none' }}>
        <Link href="/">
          <a>
            <Image src={nadiaRamirez} alt="na-logo" />
          </a>
        </Link>
      </Box>
      <HamburgerIcon
        display={{ md: 'none' }}
        boxSize="1.5em"
        color="blackAlpha.700"
        ref={btnRef}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        colorScheme="pink"
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent bgColor="gray.700" opacity="90%">
          <DrawerCloseButton color="whiteAlpha.800" />
          {/* <DrawerHeader>
            <Image src={nadiaRamirez} alt="nadiaRamirez-logo" />
          </DrawerHeader> */}
          <HStack color="whiteAlpha.800" spacing="20px" width='fit-content' m='10px 15px'>
            <HStack>
              <Text>EN</Text>
              <Text>|</Text>
              <Text>ES</Text>
            </HStack>
            <MoonIcon boxSize="1.5em"/>
          </HStack>

          <DrawerBody>
            <Stack direction="column" justify="center" h="100%">
              <Link href="/illustration">
                <a style={{ textAlign: "right" }} onClick={onClose}>
                  <Text
                    align="center"
                    color="whiteAlpha.800"
                    fontSize="xl"
                    fontWeight="hairline"
                  >
                    illustration
                  </Text>
                </a>
              </Link>
              <Link href="/patterns">
                <a style={{ textAlign: "right" }} onClick={onClose}>
                  <Text
                    align="center"
                    color="whiteAlpha.800"
                    fontSize="xl"
                    fontWeight="hairline"
                  >
                    patterns
                  </Text>
                </a>
              </Link>
              <Link href="/about">
                <a style={{ textAlign: "right" }} onClick={onClose}>
                  <Text
                    align="center"
                    color="whiteAlpha.800"
                    fontSize="xl"
                    fontWeight="hairline"
                  >
                    about
                  </Text>
                </a>
              </Link>
              <Link href="/contact">
                <a style={{ textAlign: "right" }} onClick={onClose}>
                  <Text
                    align="center"
                    color="whiteAlpha.800"
                    fontSize="xl"
                    fontWeight="hairline"
                  >
                    contact
                  </Text>
                </a>
              </Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {/* <Stack direction={["row", "row", "column"]} mt="10px">
        <Link href="/illustration">
          <a style={{ textAlign: "right" }}>illustration</a>
        </Link>
        <Link href="/patterns">
          <a style={{ textAlign: "right" }}>patterns</a>
        </Link>
        <Link href="/about">
          <a style={{ textAlign: "right" }}>about</a>
        </Link>
        <Link href="/contact">
          <a style={{ textAlign: "right" }}>contact</a>
        </Link>
      </Stack> */}
    </>
    // </Flex>
  );
};

export default Navbar;
