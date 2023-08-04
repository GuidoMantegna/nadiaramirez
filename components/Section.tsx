import { NextPage } from "next";
import { Text, Flex, HStack, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

import {
  faInstagramSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

interface SectionProps {
  bgColor: string;
  id: string;
}

const Section: NextPage<SectionProps> = ({ bgColor, children, id }) => {
  return (
    <Flex
      w="100%"
      h="100vh"
      justify="center"
      align="center"
      bgColor={bgColor}
      id={id}
    >
      {children}
    </Flex>
  );
};

export default Section;
