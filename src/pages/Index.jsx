import React from "react";
import { Box, Flex, Heading, IconButton, Spacer, VStack, Text, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button, useColorMode } from "@chakra-ui/react";
import { FaBars, FaHome, FaUser, FaCog, FaChartPie, FaMoon, FaSun } from "react-icons/fa";

const SidebarContent = ({ onClose, colorMode, ...rest }) => {
  return (
    <Box transition="3s ease" bg={colorMode === "light" ? "white" : "dark"} w={{ base: "full", md: 60 }} pos="fixed" h="full" {...rest}>
      <VStack align="flex-start" justify="center" h="100%" p={5} spacing={4} color="white">
        <Heading size="md" my={5}>
          Dashboard
        </Heading>
        <Button variant="ghost" justifyContent="flex-start" w="100%" leftIcon={<FaHome />}>
          Home
        </Button>
        <Button variant="ghost" justifyContent="flex-start" w="100%" leftIcon={<FaUser />}>
          Profile
        </Button>
        <Button variant="ghost" justifyContent="flex-start" w="100%" leftIcon={<FaCog />}>
          Settings
        </Button>
        <Button variant="ghost" justifyContent="flex-start" w="100%" leftIcon={<FaChartPie />}>
          Analytics
        </Button>
      </VStack>
    </Box>
  );
};

const Navbar = ({ onOpen, toggleColorMode, colorMode, ...rest }) => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding={6} bg={colorMode === "light" ? "white" : "gray.800"} color={colorMode === "light" ? "dark" : "white"} shadow="md" {...rest}>
      <IconButton size="md" icon={<FaBars />} aria-label={"Open Menu"} display="inherit" onClick={onOpen} mr={5} />
      <Heading as="h1" size="lg" letterSpacing={"tighter"} color={colorMode === "light" ? "black" : "white"}>
        React Dashboard
      </Heading>
      <Spacer />
      <IconButton size="md" icon={colorMode === "light" ? <FaMoon /> : <FaSun />} aria-label={"Toggle Color Mode"} onClick={toggleColorMode} mr={5} />
      <IconButton size="md" icon={<FaUser />} aria-label={"User Profile"} mr={5} />
    </Flex>
  );
};

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Navbar onOpen={onOpen} toggleColorMode={toggleColorMode} colorMode={colorMode} />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Navigation</DrawerHeader>
          <DrawerBody>
            <SidebarContent onClose={onClose} colorMode={colorMode} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        {/* Main Content goes here */}
        <VStack spacing={4} p={8}>
          <Button variant="ghost" justifyContent="flex-start" w="100%" leftIcon={<FaHome />}>
            Section 1
          </Button>
          <Button variant="ghost" justifyContent="flex-start" w="100%" leftIcon={<FaUser />}>
            Section 2
          </Button>
          <Button variant="ghost" justifyContent="flex-start" w="100%" leftIcon={<FaCog />}>
            Section 3
          </Button>
          <Button variant="ghost" justifyContent="flex-start" w="100%" leftIcon={<FaChartPie />}>
            Section 4
          </Button>
          <Box id="section1" p={5} shadow="md" borderWidth="1px">
            <Heading size="md">Section 1</Heading>
            <Text mt={4}>Content for section 1...</Text>
          </Box>
          <Box id="section2" p={5} shadow="md" borderWidth="1px" my={6}>
            <Heading size="md">Section 2</Heading>
            <Text mt={4}>Content for section 2...</Text>
          </Box>
          <Box id="section3" p={5} shadow="md" borderWidth="1px" my={6}>
            <Heading size="md">Section 3</Heading>
            <Text mt={4}>Content for section 3...</Text>
          </Box>
          <Box id="section4" p={5} shadow="md" borderWidth="1px" my={6}>
            <Heading size="md">Section 4</Heading>
            <Text mt={4}>Content for section 4...</Text>
          </Box>
          <Box id="section5" p={5} shadow="md" borderWidth="1px" my={6}>
            <Heading size="md">Section 5</Heading>
            <Text mt={4}>Content for section 5...</Text>
          </Box>
          {/* Scrollspy can be tested with these sections */}
        </VStack>
      </Box>
    </>
  );
};

export default Index;
