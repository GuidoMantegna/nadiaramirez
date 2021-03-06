import { SimpleGrid, GridItem, useMediaQuery } from "@chakra-ui/react";
import { Box, type BoxProps } from "@chakra-ui/layout";
import Image from "next/image";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import illustrations from "../public/assets/images";

export const MotionBox = motion<BoxProps>(Box);

const Home: NextPage = () => {
  const [selectedPic, setSelectedPic] = useState(0);
  const [isMD] = useMediaQuery(["(min-width: 768px)"]);

  return (
    <>
      <Head>
        <title>NA | HOME</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="../public/assets/na.png" />
      </Head>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing="15px"
        gridAutoFlow={"dense"}
      >
        {illustrations.map((img) => {
          return (
            <GridItem
              style={{
                cursor: selectedPic !== img.id ? "zoom-in" : "zoom-out",
              }}
              onClick={() => {
                if (isMD) {
                  selectedPic !== img.id
                    ? setSelectedPic(img.id)
                    : setSelectedPic(0);
                }
                return;
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

export default Home;
