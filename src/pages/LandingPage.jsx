import { Container, VStack, Heading, Text, Button, Box, Flex } from "@chakra-ui/react";
import { FaRocket, FaLightbulb, FaHandsHelping } from "react-icons/fa";

const LandingPage = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} textAlign="center">
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
      <Box mt={10} width="100%">
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
    </Container>
  );
};

export default LandingPage;