import type { NextComponentType } from "next";
import {
  Center,
  Container,
  Heading,
  Text,
  Stack,
  Box,
  Flex,
  useMediaQuery,
} from "@chakra-ui/react";
import Link from "next/link";

const Navbar: NextComponentType = () => {
  const [isLargerThan768, isLargerThan1024] = useMediaQuery([
    "(min-width: 768px)",
    "(min-width: 1024px)",
  ]);

  return (
    <Flex
      pos="fixed"
      top={isLargerThan768 ? "40vh" : "0"}
      flexDirection="column"
      align="flex-end"
      bgColor="white"
      zIndex={1}
      p="15px"
      w={isLargerThan768 ? "auto" : "100%"}
    >
      <Link href="/">
        <Heading textAlign="right">
          <a>Nadia Ramirez</a>
        </Heading>
      </Link>
      <Stack direction={["row", "row", "column"]} mt="10px">
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
      </Stack>
    </Flex>
  );
};

export default Navbar;
