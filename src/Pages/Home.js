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
import {
  ArrowForwardIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

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
      setNumCards(3);
    } else if (screenWidth >= 480) {
      setNumCards(2);
    } else {
      setNumCards(1);
    }

    const initialDelay = setTimeout(() => {
      const interval = setInterval(handleNext, 4000);
      return () => clearInterval(interval);
    }, 5000);

    return () => clearTimeout(initialDelay);
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
            boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 7px 3px"
            overflow="hidden"
            bg="#edecef"
            mt="1rem"
            h="400px"
          >
            <CardBody>
              <Flex
                direction={{ base: "column", md: "row" }}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Flex w="50%" justifyContent={"center"} alignItems={"center"}>
                  <Text fontSize="lg" fontWeight="bold" p="1rem">
                    {cards[currentCard - 1].text}
                  </Text>
                </Flex>
                <Flex justify="center" align={"center"} w="50%">
                  <Image
                    bg="transparent"
                    src={cards[currentCard - 1].image}
                    alt={`Clock ${currentCard}`}
                    w="100%"
                    h="400px"
                  />
                </Flex>
              </Flex>
            </CardBody>
          </Card>
        </motion.div>
      </Box>
      <Box mt="3rem" mb="1rem">
        <Heading as="h1" mb={6} textAlign="center">
          Our Clock's Collection
        </Heading>
        <Flex justify="center" align={"center"}>
          <ChevronLeftIcon
            onClick={handlePrev}
            cursor={"pointer"}
            w={8}
            h={8}
          />
          <Flex direction="row" wrap="wrap" justify={"center"}>
            {clocks.slice(startIndex, startIndex + numCards).map((clock) => (
              <motion.div
                key={clock.code}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                style={{ margin: "1rem" }}
              >
                <Card
                  key={clock.code}
                  boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 7px 3px"
                  m="1rem"
                  borderRadius={"15px"}
                  h="520px"
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
              </motion.div>
            ))}
          </Flex>

          <ChevronRightIcon
            cursor={"pointer"}
            onClick={handleNext}
            w={8}
            h={8}
          />
        </Flex>
      </Box>
      <Text mb="2rem" textAlign={"right"}>
        <Link as={RouterLink} to="/products" color="teal.500" fontSize="lg">
          more <ArrowForwardIcon />
        </Link>
      </Text>
    </>
  );
};

export default Home;
