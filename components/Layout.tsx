import { NextComponentType } from "next";
import {
  Container,
  Flex,
  Center,
  Box,
  useMediaQuery,
  extendTheme,
} from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useRef, useState } from "react";

const Layout: NextComponentType = ({ children }) => {
  const prevScrollPosRef = useRef(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  useEffect(() => {
    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the scroll event listener when the component unmounts to avoid memory leaks
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  })
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setIsScrollingUp(currentScrollPos < prevScrollPosRef.current)

    // Update the previous scroll position with the current one for the next scroll event
    prevScrollPosRef.current = currentScrollPos;

    // const totalHeight = document.documentElement.scrollHeight;
  };

  return (
    <>
      <Flex>
        <Navbar isScrollingUp={isScrollingUp}/>
          {children}
      </Flex>
    </>
  );
};

export default Layout;
