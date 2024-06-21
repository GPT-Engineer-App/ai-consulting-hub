import { Container, VStack, Heading, Text, Box, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container centerContent maxW="container.xl" p={4}>
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="2xl" color="brand.700">
          Contact Brainpool.AI
        </Heading>
        <Text fontSize="xl" color="gray.600">
          Get in touch with Brainpool.AI for more information.
        </Text>
      </VStack>
      <Box mt={10} width="100%">
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Your Name" />
        </FormControl>
        <FormControl id="email" isRequired mt={4}>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Your Email" />
        </FormControl>
        <FormControl id="message" isRequired mt={4}>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Your Message" />
        </FormControl>
        <Button colorScheme="teal" size="lg" mt={4}>
          Send Message to Brainpool.AI
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;