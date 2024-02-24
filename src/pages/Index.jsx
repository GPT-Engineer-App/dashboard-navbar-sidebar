import React from "react";
import { Box, Flex, Heading, IconButton, Spacer, VStack, Text, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button } from "@chakra-ui/react";
import { FaBars, FaHome, FaUser, FaCog, FaChartPie } from "react-icons/fa";

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box transition="3s ease" bg="blue.800" w={{ base: "full", md: 60 }} pos="fixed" h="full" {...rest}>
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

const Navbar = ({ onOpen, ...rest }) => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding={6} bg="teal.500" color="white" {...rest}>
      <IconButton size="md" icon={<FaBars />} aria-label={"Open Menu"} display={{ base: "inherit", md: "none" }} onClick={onOpen} />
      <Heading as="h1" size="lg" letterSpacing={"tighter"}>
        React Dashboard
      </Heading>
      <Spacer />
      {/* You can add more nav items here */}
    </Flex>
  );
};

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Navbar onOpen={onOpen} />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Navigation</DrawerHeader>
          <DrawerBody>
            <SidebarContent onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Flex as="header" align="center" justify="space-between" wrap="wrap" w="100%" mb={8} p={8} bg="blue.800" color="white" shadow="lg">
          <Text>Welcome to your Dashboard</Text>
          {/* Header Content goes here */}
        </Flex>
        {/* Main Content goes here */}
        <Box p={8}>{/* The rest of your page content goes here */}</Box>
      </Box>
    </>
  );
};

export default Index;
