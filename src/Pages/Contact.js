import React from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  SimpleGrid,
  Input,
  Textarea,
  Flex,
  Image,
  Stack,
  ButtonGroup,
  Divider,
  Button,
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <>
      <Box p={4}>
        <Center mb={8}>
          <Heading as="h1" fontSize="2xl" fontWeight="bold">
            We'd love to hear from you
          </Heading>
        </Center>
        <Text textAlign="center" mb={8}>
          You can contact us to know details or place orders at the below
          address. Alternatively, submit your query using the form below.
        </Text>
      </Box>
      <Flex
        direction={{ base: "column", md: "row" }}
        p="2rem"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap="5rem"
      >
        <Card
          w="550px"
          h="650px"
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 7px 3px"
          borderRadius={"15px"}
        >
          <CardHeader>
            <Heading size="md" textAlign={"center"} pt="1rem">
              {" "}
              Mithila Clocks{" "}
            </Heading>
          </CardHeader>
          <CardBody>
            <Box px="2rem">
              <Text fontSize="20px" fontWeight={"500"}>
                Office Address
              </Text>
              <Text mt="1rem">
                Mhatre compound, 4/1 Ramanlal chowk, Swami Vivekananda Rd,
                Borivali West, Maharashtra 400092
              </Text>
              <Text fontSize="20px" fontWeight={"500"} mt="3rem">
                Open hours
              </Text>
              <Text mt="1rem">Monday-Saturday 10AM-6PM</Text>
              <Text fontSize="20px" fontWeight={"500"} mt="3rem">
                Product inquiry
              </Text>
              <Text mt="1rem">1234-5678-90</Text>
              <Text fontSize="20px" fontWeight={"500"} mt="3rem">
                Service Contact
              </Text>
              <Text mt="1rem">1234-5678-90</Text>
              <Text mt="1rem">mithilaclock@gmail.com</Text>
            </Box>
          </CardBody>
        </Card>
        <Card
          w="550px"
          h="650px"
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 7px 3px"
          borderRadius={"15px"}
        >
          <Heading size="md" textAlign={"center"} pt="1rem">
            {" "}
            Contact Us{" "}
          </Heading>
          <CardBody>
            <Flex
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              px="2rem"
            >
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input placeholder="Name" mt="1rem" />
              </FormControl>
              <FormControl mt="2rem">
                <FormLabel>Email</FormLabel>
                <Input placeholder="Email" mt="1rem" />
              </FormControl>
              <FormControl mt="2rem">
                <FormLabel>Phone Number</FormLabel>
                <Input placeholder="Phone Number" mt="1rem" />
              </FormControl>
              <FormControl mt="2rem">
                <FormLabel>Inquiry/Message</FormLabel>
                <Textarea placeholder="Your inquiry" mt="1rem" />
              </FormControl>
              <Button mt="2rem" bg="blue" color="white">
                Send Message
              </Button>
            </Flex>
          </CardBody>
        </Card>
      </Flex>
    </>
  );
};

export default Contact;
