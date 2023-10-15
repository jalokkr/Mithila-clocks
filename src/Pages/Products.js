import React from "react";
import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  Link,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { clocks } from "../Static/Constants/Clocks";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

const Products = () => {
  return (
    <Box p={4}>
      <Center mb={6}>
        <Heading as="h1" fontSize="2xl" fontWeight="bold">
          Our Products
        </Heading>
      </Center>
      <SimpleGrid columns={[1, 2, 3, 4]} gap={4} minChildWidth={350}>
        {clocks.map((clock) => (
          <Card
            key={clock.code}
            boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            m="1rem"
            borderRadius={"15px"}
            w="350px"
            h="450px"
          >
            <CardHeader>
              <Image
                src={clock.image}
                alt={clock.name}
                w="350px"
                h="300px"
                borderTopRadius={"15px"}
              />
            </CardHeader>
            <Box p="1rem">
              <CardBody>
                <Heading fontSize="md" mb={2}>
                  {clock.name}
                </Heading>
                <Box fontSize="sm" mb={2}>
                  <Text>
                    <Text as="span" fontWeight={"bold"}>
                      Code:
                    </Text>{" "}
                    {clock.code}
                  </Text>
                </Box>
                <Box fontSize="sm" mb={2}>
                  <Text>
                    <Text as="span" fontWeight={"bold"}>
                      Size:
                    </Text>{" "}
                    {clock.size}
                  </Text>
                </Box>
                <Box fontSize="sm" mb={2}>
                  <Text>
                    <Text as="span" fontWeight={"bold"}>
                      MRP:
                    </Text>{" "}
                    &#8377;{clock.mrp}
                  </Text>
                </Box>
              </CardBody>
            </Box>
          </Card>
        ))}
      </SimpleGrid>
      <Text textAlign={"right"}>
        <Link as={RouterLink} to="/contact-us" color="teal.500" fontSize="25px">
          and much more
        </Link>
      </Text>
    </Box>
  );
};

export default Products;
