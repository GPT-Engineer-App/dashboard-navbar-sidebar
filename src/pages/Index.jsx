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
      <Flex direction={{ base: "column", md: "row" }} pt="100px" pl={8} pr={8} alignItems="flex-start" justifyContent="space-between">
        <Box flex="3">
          <VStack spacing={8} alignItems="flex-start" id="section1">
            <Heading as="h3" size="lg">
              Section 1
            </Heading>
            <Text fontSize="md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis quaerat accusamus numquam.</Text>
          </VStack>
          {/* Additional sections would go here */}
        </Box>
        <VStack spacing={4} flex="1" alignItems="flex-start" position="fixed" right="0" top="100px">
          <Button
            variant="ghost"
            justifyContent="flex-start"
            w="100%"
            leftIcon={<FaHome />}
            onClick={() => {
              const section = document.getElementById("section1");
              window.scrollTo({ top: section.offsetTop - 100, behavior: "smooth" });
            }}
          >
            Section 1
          </Button>
          <Button
            variant="ghost"
            justifyContent="flex-start"
            w="100%"
            leftIcon={<FaUser />}
            onClick={() => {
              const section = document.getElementById("section2");
              window.scrollTo({ top: section.offsetTop - 100, behavior: "smooth" });
            }}
          >
            Section 2
          </Button>
          <Button
            variant="ghost"
            justifyContent="flex-start"
            w="100%"
            leftIcon={<FaCog />}
            onClick={() => {
              const section = document.getElementById("section3");
              window.scrollTo({ top: section.offsetTop - 100, behavior: "smooth" });
            }}
          >
            Section 3
          </Button>
          <Button
            variant="ghost"
            justifyContent="flex-start"
            w="100%"
            leftIcon={<FaChartPie />}
            onClick={() => {
              const section = document.getElementById("section4");
              window.scrollTo({ top: section.offsetTop - 100, behavior: "smooth" });
            }}
          >
            Section 4
          </Button>
          <Button
            variant="ghost"
            justifyContent="flex-start"
            w="100%"
            leftIcon={<FaChartPie />}
            onClick={() => {
              const section = document.getElementById("section5");
              window.scrollTo({ top: section.offsetTop - 100, behavior: "smooth" });
            }}
          >
            Section 5
          </Button>
          <Button variant="ghost" justifyContent="flex-start" w="100%" leftIcon={<FaCog />} onClick={() => document.getElementById("section3").scrollIntoView()}>
            Section 3
          </Button>
          <Button variant="ghost" justifyContent="flex-start" w="100%" leftIcon={<FaChartPie />} onClick={() => document.getElementById("section4").scrollIntoView()}>
            Section 4
          </Button>
          <Button variant="ghost" justifyContent="flex-start" w="100%" leftIcon={<FaChartPie />} onClick={() => document.getElementById("section5").scrollIntoView()}>
            Section 5
          </Button>
        </VStack>
      </Flex>
    </>
  );
};

export default Index;
