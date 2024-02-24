// Since React and Chakra UI do not use Bootstrap, this updated file simulates the Scrollspy functionality in a React and Chakra UI environment.

import React from "react";
import { Box, VStack, Link, useColorModeValue } from "@chakra-ui/react";

const Scrollspy = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const activeLinkColor = useColorModeValue("blue.400", "blue.300");

  return (
    <Box position="sticky" top="0" w="200px" p={4} bg={useColorModeValue("gray.100", "gray.700")}>
      <VStack as="nav" spacing={4} align="flex-start">
        <Link href="#section1" color={linkColor} _hover={{ color: linkHoverColor }}>
          Section 1
        </Link>
        <Link href="#section2" color={linkColor} _hover={{ color: linkHoverColor }}>
          Section 2
        </Link>
        <Link href="#section3" color={linkColor} _hover={{ color: linkHoverColor }}>
          Section 3
        </Link>
        <Link href="#section4" color={linkColor} _hover={{ color: linkHoverColor }}>
          Section 4
        </Link>
        <Link href="#section5" color={linkColor} _hover={{ color: linkHoverColor }}>
          Section 5
        </Link>
      </VStack>
    </Box>
  );
};

export default Scrollspy;
