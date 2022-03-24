import type { NextComponentType } from "next";
import { HStack, Text } from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";

const LanColor: NextComponentType = () => {
    const usedFor = "nav"
  return (
    <HStack
      color={{ base: "whiteAlpha.800", md: "blackAlpha.700" }}
      spacing="20px"
      width="fit-content"
      m="10px 15px"
    //   display={usedFor === "nav" ? {{ base: 'none', md: 'flex' }} : {{ base: 'none', md: 'flex' }} }
    >
      <HStack>
        <Text>EN</Text>
        <Text>|</Text>
        <Text>ES</Text>
      </HStack>
      <MoonIcon boxSize="1.5em" />
    </HStack>
  );
};

export default LanColor;
