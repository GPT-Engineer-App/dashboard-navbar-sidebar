import React from "react";
import Scrollspy from "../components/Scrollspy";
import { Box, Flex, Heading, IconButton, Spacer, VStack, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button, useColorMode } from "@chakra-ui/react";
import { FaBars, FaHome, FaUser, FaCog, FaChartPie, FaMoon, FaSun, FaBook, FaChartBar, FaUserFriends, FaRegFileAlt } from "react-icons/fa";

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
  // Scrollspy related states, effect and function have been removed as they are no longer needed.
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Navbar position="fixed" width="100%" zIndex={1} onOpen={onOpen} toggleColorMode={toggleColorMode} colorMode={colorMode} />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} pt="60px">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Navigation</DrawerHeader>
          <DrawerBody>
            <SidebarContent onClose={onClose} colorMode={colorMode} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Flex direction={{ base: "column", md: "row" }} pt="100px" px={8} alignItems="flex-start" justify="space-between">
        <Box as="aside" position="sticky" top="0" h="calc(100vh - 100px)" w="200px" overflowY="auto">
          <Scrollspy />
        </Box>
        <Box as="main" flex="1" h="500px" overflowY="auto">
          {/* Replace these sections with actual content */}
          <Box id="section1" p={5}>
            <Heading size="md">Section 1</Heading>
            {/* Content for section 1 */}
          </Box>
          <Box id="section2" p={5}>
            <Heading size="md">Section 2</Heading>
            {/* Content for section 2 */}
          </Box>
          <Box id="section3" p={5}>
            <Heading size="md">Section 3</Heading>
            {/* Content for section 3 */}
          </Box>
          <Box id="section4" p={5}>
            <Heading size="md">Section 4</Heading>
            {/* Content for section 4 */}
          </Box>
          <Box id="section5" p={5}>
            <Heading size="md">Section 5</Heading>
            {/* Content for section 5 */}
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Index;
