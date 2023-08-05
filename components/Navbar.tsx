import type { NextComponentType, NextPage } from "next"
import { useRef } from "react"
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
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
import Image from "next/image"
import Link from "next/link"
import nadiaRamirez from "../public/assets/nadia-ramirez-negro.png"
import LanColor from "./LanColor"
import styles from "../styles/navbar.module.scss"

interface NavbarProps {
  isScrollingUp: boolean
}


const Navbar: NextPage<NavbarProps> = ({isScrollingUp}) => {
  const [isMD] = useMediaQuery(["(min-width: 768px)"])
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef(null)

  return (
    <>
      <HStack
        position="fixed"
        w="100%"
        h="75px"
        justifyContent="flex-end"
        padding={8}
        gap={8}
        className={`${styles.main} ${!isScrollingUp && styles.hide}`}
      >
        <Link href="#ui">UI</Link>
        <Link href="#illustration">ILLUSTRATION</Link>
        <Link href="#patterns">PATTERNS</Link>
        <Link href="#contact">CONTACT</Link>
      </HStack>
      {/* <Box
        w="150px"
        h="auto"
        pos={{ md: "fixed" }}
        top="0"
        display={{ md: "none" }}
      >
        <Link href="/">
          <a>
            <Image src={nadiaRamirez} alt="na-logo" />
          </a>
        </Link>
      </Box>
      {isMD && <LanColor />}
      <HamburgerIcon
        display={{ md: "none" }}
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
          <LanColor />
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
      </Drawer> */}
    </>
  )
}

export default Navbar
