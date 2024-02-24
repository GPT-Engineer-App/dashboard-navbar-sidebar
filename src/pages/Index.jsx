import React, { useState, useEffect } from "react";
import { Box, Flex, Heading, IconButton, Spacer, VStack, Text, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button, useColorMode } from "@chakra-ui/react";
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
  const [activeSection, setActiveSection] = useState("section1");

  const handleScroll = () => {
    const sections = ["section1", "section2", "section3", "section4", "section5"];
    const currentSection = sections.find((section) => {
      const element = document.getElementById(section);
      return element.getBoundingClientRect().top <= 100;
    });
    if (currentSection && activeSection !== currentSection) {
      setActiveSection(currentSection);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);
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
      <Flex direction={{ base: "column", md: "row" }} pt="100px" pl={8} alignItems="flex-start">
        <Box flex="1" paddingRight="250px">
          <VStack spacing={8} alignItems="flex-start" id="section1">
            <Heading as="h3" size="lg">
              Section 1
            </Heading>
            <Text fontSize="md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis quaerat accusamus numquam.</Text>
          </VStack>
          <VStack spacing={8} alignItems="flex-start" id="section2">
            <Heading as="h3" size="lg">
              Section 2
            </Heading>
            <Text fontSize="md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis quaerat accusamus numquam.</Text>
          </VStack>
          <VStack spacing={8} alignItems="flex-start" id="section3">
            <Heading as="h3" size="lg">
              Section 3
            </Heading>
            <Text fontSize="md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis quaerat accusamus numquam.</Text>
          </VStack>
          <VStack spacing={8} alignItems="flex-start" id="section4">
            <Heading as="h3" size="lg">
              Section 4
            </Heading>
            <Text fontSize="md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis quaerat accusamus numquam.</Text>
          </VStack>
          <VStack spacing={8} alignItems="flex-start" id="section5">
            <Heading as="h3" size="lg">
              Section 5
            </Heading>
            <Text fontSize="md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis quaerat accusamus numquam.</Text>
          </VStack>
        </Box>
        <nav className="sticky top-0 pt-5">
          <ul className="menu-sidebar">
            <li className={activeSection === "section1" ? "active" : ""} title="Section 1">
              <a href="#section1">
                <FaBook />
                <Text ml="2">Section 1</Text>
              </a>
            </li>
            <li className={activeSection === "section2" ? "active" : ""} title="Section 2">
              <a href="#section2">
                <FaChartBar />
                <Text ml="2">Section 2</Text>
              </a>
            </li>
            <li className={activeSection === "section3" ? "active" : ""} title="Section 3">
              <a href="#section3">
                <FaUserFriends />
                <Text ml="2">Section 3</Text>
              </a>
              <ul>
                <li className={activeSection === "example-sub-A" ? "active" : ""}>
                  <a href="#example-sub-A">
                    <FaRegFileAlt />
                  </a>
                </li>
                <li className={activeSection === "example-sub-B" ? "active" : ""}>
                  <a href="#example-sub-B">
                    <FaRegFileAlt />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </Flex>
    </>
  );
};

export default Index;
