import React from "react";
import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  Link,
  Image,
  Text,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { clocks } from "../Static/Constants/Clocks";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { useState } from "react";

const Products = () => {
  const categories = [
    "Metal Clock",
    "Wooden Clock",
    "Glass Clock",
    "Table Clock",
    "Station Clock",
  ];

  const [selectedCategory, setSelectedCategory] = useState("Metal Clock");

  const filteredClocks = selectedCategory
    ? clocks.filter((clock) => clock.category === selectedCategory)
    : clocks;

  return (
    <>
      <Box p={4}>
        <Box mb={6}>
          <Center>
            <Heading as="h1" fontSize="2xl" fontWeight="bold">
              Our Products Collections
            </Heading>
          </Center>
          <Flex justify={"center"} mt="2rem">
            {categories.map((category) => (
              <Link
                key={category}
                mr={4}
                textDecorationLine={
                  selectedCategory === category ? "underline" : "none"
                }
                fontWeight={selectedCategory === category ? "bold" : ""}
                color={selectedCategory === category ? "teal.500" : "gray.500"}
                cursor="pointer"
                onClick={() =>
                  setSelectedCategory(
                    selectedCategory === category ? null : category
                  )
                }
              >
                {category}
              </Link>
            ))}
          </Flex>
        </Box>
        <Flex flexWrap={"wrap"} gap="2rem">
          {filteredClocks.map((clock) => (
            <Card
              key={clock.code}
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              m="1rem"
              borderRadius={"15px"}
              w="350px"
              h="500px"
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
        </Flex>
        <Text textAlign={"right"}>
          <Link as={RouterLink} to="/contact-us" color="teal.500" fontSize="lg">
            and much more
          </Link>
        </Text>
      </Box>
    </>
  );
};

export default Products;
