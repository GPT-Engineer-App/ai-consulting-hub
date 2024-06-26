import { useState } from "react";
import { Container, VStack, Heading, Text, Button, Box, Flex, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from "@chakra-ui/react";
import { FaRocket, FaLightbulb, FaHandsHelping, FaBars, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Index = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Container centerContent maxW="container.xl" p={4}>
      <IconButton
        icon={<FaBars />}
        size="lg"
        position="absolute"
        top={4}
        right={4}
        onClick={toggleDrawer}
        colorScheme="teal"
        aria-label="Open Menu"
      />
      <Drawer isOpen={isDrawerOpen} placement="right" onClose={toggleDrawer}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Navigation</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4}>
              <Button as={Link} to="/" width="100%" onClick={toggleDrawer}>
                Home
              </Button>
              <Button as={Link} to="/success-stories" width="100%" onClick={toggleDrawer}>
                Success Stories
              </Button>
              <Button as={Link} to="/our-service" width="100%" onClick={toggleDrawer}>
                Our Service
              </Button>
              <Button as={Link} to="/contact" width="100%" onClick={toggleDrawer}>
                Contact
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <VStack spacing={8} textAlign="center" mt={10}>
        <Heading as="h1" size="2xl" color="brand.700">
          Welcome to AI Consulting Agency
        </Heading>
        <Text fontSize="xl" color="gray.600">
          Empowering your business with cutting-edge AI solutions.
        </Text>
        <Button colorScheme="teal" size="lg" rightIcon={<FaRocket />}>
          Get Started
        </Button>
      </VStack>
      <Box mt={20} width="100%">
        <Flex justify="space-around" wrap="wrap" spacing={10}>
          <Box textAlign="center" p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <FaLightbulb size="3em" color="teal" />
            <Heading as="h3" size="lg" mt={4}>
              Innovative Solutions
            </Heading>
            <Text mt={2} color="gray.500">
              We provide innovative AI solutions tailored to your business needs.
            </Text>
          </Box>
          <Box textAlign="center" p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <FaHandsHelping size="3em" color="teal" />
            <Heading as="h3" size="lg" mt={4}>
              Expert Guidance
            </Heading>
            <Text mt={2} color="gray.500">
              Our team of experts will guide you through every step of the process.
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box mt={20} width="100%">
        <Heading as="h2" size="xl" textAlign="center" color="brand.700" mb={10}>
          Success Stories
        </Heading>
        <Flex justify="space-around" wrap="wrap" spacing={10}>
          <Box textAlign="center" p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading as="h3" size="lg" mt={4}>
              Company A
            </Heading>
            <Text mt={2} color="gray.500">
              Our AI solution increased their efficiency by 30%.
            </Text>
          </Box>
          <Box textAlign="center" p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading as="h3" size="lg" mt={4}>
              Company B
            </Heading>
            <Text mt={2} color="gray.500">
              They saw a 20% increase in sales after implementing our AI tools.
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box mt={20} width="100%">
        <Heading as="h2" size="xl" textAlign="center" color="brand.700" mb={10}>
          Contact Us
        </Heading>
        <Box textAlign="center" p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Text fontSize="xl" color="gray.600">
            Get in touch with us for more information.
          </Text>
          <Button as={Link} to="/contact" colorScheme="teal" size="lg" mt={4}>
            Contact Us
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Index;