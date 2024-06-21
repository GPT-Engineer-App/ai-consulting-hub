import { Container, VStack, Heading, Text, Box, Flex } from "@chakra-ui/react";

const OurService = () => {
  return (
    <Container centerContent maxW="container.xl" p={4}>
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="2xl" color="brand.700">
          Our Services
        </Heading>
        <Text fontSize="xl" color="gray.600">
          Learn more about the services we offer.
        </Text>
      </VStack>
      <Box mt={10} width="100%">
        <Flex justify="space-around" wrap="wrap" spacing={10}>
          <Box textAlign="center" p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading as="h3" size="lg" mt={4}>
              AI Consulting
            </Heading>
            <Text mt={2} color="gray.500">
              We provide expert AI consulting services to help you harness the power of AI.
            </Text>
          </Box>
          <Box textAlign="center" p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading as="h3" size="lg" mt={4}>
              Custom AI Solutions
            </Heading>
            <Text mt={2} color="gray.500">
              Tailored AI solutions to meet your specific business needs.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default OurService;