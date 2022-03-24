import { NextComponentType } from "next";
import { Text, Flex, HStack, Link } from "@chakra-ui/react";
import Image from "next/image";
import na from "../public/assets/na-negro.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

import {
  faInstagramSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer: NextComponentType = () => {
  return (
    <Flex
      w="100%"
      justify="space-between"
      align="center"
      color="blackAlpha.800"
    >
      <Flex align="center">
        <Text fontSize={{ base: ".8em", md: "1em" }}>All rights reserved</Text>
        <Flex w={{ base: "30px", md: "40px" }} ml="5px" align="center">
          <Image src={na} alt="na-logo" />
        </Flex>
      </Flex>
      <HStack fontSize={{ base: "25px", md: "30px" }}>
        <Link href="https://www.instagram.com/na.arg/?hl=es" isExternal>
          <FontAwesomeIcon icon={faInstagramSquare} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/nadia-ramirez-830561175/"
          isExternal
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
        {/* <Link href="#" isExternal> */}
        <FontAwesomeIcon icon={faFileDownload} />
        {/* </Link> */}
      </HStack>
    </Flex>
  );
};

export default Footer;
