import { Container, VStack, Heading, Text, Box, Flex } from "@chakra-ui/react";

const SuccessStories = () => {
  return (
    <Container centerContent maxW="container.xl" p={4}>
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="2xl" color="brand.700">
          Success Stories
        </Heading>
        <Text fontSize="xl" color="gray.600">
          Discover how our AI solutions have transformed businesses.
        </Text>
      </VStack>
      <Box mt={10} width="100%">
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
    </Container>
  );
};

export default SuccessStories;