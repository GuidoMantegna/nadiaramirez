import {
  Flex,
  Center,
  Text,
  Container,
  useBreakpointValue,
  Button,
  SimpleGrid,
  GridItem,
  Collapse,
  useMediaQuery,
} from "@chakra-ui/react";
import { Box, HStack } from "@chakra-ui/layout";
// import { Image } from "@chakra-ui/react";
import Image from "next/image";
import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import illustrations from "../public/assets/images";
import styles from "../styles/Illustration.module.css";

const Illustration: NextPage = () => {
  const [selectedPic, setSelectedPic] = useState(0);
  const [isMobile] = useMediaQuery([
    "(max-width: 768px)",
  ]);

  return (
    <>
      <Head>
        <title>Nadia Ramirez | ILLUSTRATION</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3}} spacing="15px" gridAutoFlow={"dense"}>
        <h1></h1>
        {illustrations.map((img) => {
          return (
            <GridItem
              style={{
                cursor: selectedPic !== img.id ? "zoom-in" : "zoom-out",
              }}
              onClick={() => {
                selectedPic !== img.id
                  ? setSelectedPic(img.id)
                  : setSelectedPic(0);
              }}
              rowSpan={selectedPic === img.id ? 2 : 1}
              colSpan={selectedPic === img.id ? 2 : 1}
              key={img.id}
              flex={1}
            >
              <Image src={img.src} alt={img.alt} />
            </GridItem>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default Illustration;
