import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  SimpleGrid,
  Avatar,
  Center,
  Stack,
} from "@chakra-ui/react";
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    imageUrl: "/john.jpg",
  },
  {
    id: 1,
    name: "Alok",
    email: "john@example.com",
    imageUrl: "/john.jpg",
  },
  // Add more team members here
];

const TeamAndVisionPage = () => {
  return (
    <>
      <NavigationBar />
      
      <Footer />
    </>
  );
};

export default TeamAndVisionPage;
