import React from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Flex,
  Heading,
  Image,
  Text,
  Link,
  ButtonGroup,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import { clocks } from "../Static/Constants/Clocks";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
  const cards = [
    {
      id: 1,
      text: "Distinct Clocks for Your Walls",
      image: "https://i.ibb.co/rGxdXm0/006.png",
    },
    {
      id: 2,
      text: "Timeless Designs, Modern Aesthetics",
      image: "https://i.ibb.co/KFN6W60/007.png",
    },
    {
      id: 3,
      text: "Craftsmanship That Speaks for Itself",
      image: "https://i.ibb.co/km8Pphk/008.png",
    },
  ];

  const [currentCard, setCurrentCard] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prevCard) => (prevCard % 3) + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const [startIndex, setStartIndex] = useState(0);
  const [numCards, setNumCards] = useState(1);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + numCards) % clocks.length);
  };

  const handlePrev = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - numCards + clocks.length) % clocks.length
    );
  };

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 768) {
      setNumCards(4); // On larger screens, show 4 cards at a time
    } else if (screenWidth >= 480) {
      setNumCards(2); // On tablets, show 2 cards at a time
    } else {
      setNumCards(1); // On smaller screens (phones), show 1 card at a time
    }

    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Box>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          key={cards[currentCard - 1].id}
        >
          <Card
            w="100%"
            borderRadius="md"
            boxShadow="lg"
            overflow="hidden"
            bg="#edecef"
            mt="1rem"
            h="400px"
          >
            <CardBody>
              <Flex direction={{ base: "column", md: "row" }}>
                <Flex w="50%" justifyContent={"center"} alignItems={"center"}>
                  <Text fontSize="lg" fontWeight="bold" p="1rem">
                    {cards[currentCard - 1].text}
                  </Text>
                </Flex>
                <Box w="50%">
                  <Image
                    src={cards[currentCard - 1].image}
                    alt={`Clock ${currentCard}`}
                    w="100%"
                    h="400px"
                  />
                </Box>
              </Flex>
            </CardBody>
          </Card>
        </motion.div>
      </Box>
      <Box mt="2rem" mb="1rem">
        <Heading as="h1" mb={6} textAlign="center">
          Our Clock Collection
        </Heading>
        <Flex direction="row" wrap="wrap" justify="center">
          {clocks.slice(startIndex, startIndex + numCards).map((clock) => (
            <motion.div
              key={clock.code}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{ margin: "1rem" }}
            >
              <Card
                overflow="hidden"
                h="350px"
                boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                m="1rem"
                borderRadius={"15px"}
              >
                <CardHeader>
                  <Image
                    src={clock.image}
                    alt={clock.name}
                    mb={4}
                    w="100%"
                    h="200px"
                  />
                </CardHeader>
                <CardBody>
                  <Box p="1rem">
                    <Text fontSize="lg" fontWeight="bold">
                      {clock.name}
                    </Text>
                    <Text>
                      <Text as="span" fontWeight={"bold"}>
                        Code:
                      </Text>{" "}
                      {clock.code}
                    </Text>

                    <Text>
                      <Text as="span" fontWeight={"bold"}>
                        Size:
                      </Text>{" "}
                      {clock.size}
                    </Text>
                    <Text>
                      <Text as="span" fontWeight={"bold"}>
                        MRP:
                      </Text>{" "}
                      &#8377;{clock.mrp}
                    </Text>
                  </Box>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </Flex>
        <Flex justifyContent={"space-around"}>
          <Flex gap="2rem">
            <Button
              bg="blue"
              w="150px"
              color="white"
              h="30px"
              cursor={"pointer"}
              onClick={handlePrev}
            >
              Previous
            </Button>
            <Button
              float={"right"}
              bg="blue"
              w="150px"
              color="white"
              h="30px"
              cursor={"pointer"}
              onClick={handleNext}
            >
              Next
            </Button>
          </Flex>
        </Flex>
      </Box>
      <Text textAlign={"right"} mb="2rem">
        <Link as={RouterLink} to="/products" color="teal.500" fontSize="25px">
          More
        </Link>
      </Text>
    </>
  );
};

export default Home;
