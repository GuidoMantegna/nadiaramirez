import type { NextComponentType } from "next";
import { Center, Heading, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

const Navbar: NextComponentType = () => {
  return (
    <VStack>
      <Link href="/">
        <Heading>Nadia Ramirez</Heading>
      </Link>
      <Link href="/illustration"><a>illustration</a></Link>
      <Link href="/patterns"><a>patterns</a></Link>
      <Link href="/about"><a>about</a></Link>
      <Link href="/contact"><a>contact</a></Link>
    </VStack>
  );
};

export default Navbar;
