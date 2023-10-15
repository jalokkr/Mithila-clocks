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
  Image,
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    imageUrl:
      "https://st3.depositphotos.com/1017228/18878/i/450/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg",
    position: "CEO",
  },

  {
    id: 2,
    name: "Alok",
    email: "john@example.com",
    imageUrl:
      "https://st3.depositphotos.com/1017228/18878/i/450/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg",
    position: "Manager",
  },
  {
    id: 3,
    name: "Random",
    email: "john@example.com",
    imageUrl:
      "https://st3.depositphotos.com/1017228/18878/i/450/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg",
    position: "Digital Marketing",
  },
  {
    id: 4,
    name: "New",
    email: "john@example.com",
    imageUrl:
      "https://st3.depositphotos.com/1017228/18878/i/450/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg",
    position: "Marketing Ofiicer",
  },
];

const TeamAndVisionPage = () => {
  return (
    <>
      <Box p={4}>
        <Center mb={8}>
          <Heading as="h1" fontSize="2xl" fontWeight="bold">
            Our Vision
          </Heading>
        </Center>
        <Box px="5rem" py="2rem" lineHeight={"1.5"}>
          <Text textAlign="justify" mb={6}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
            urna eu felis dapibus condimentum sit amet a enim. Vivamus
            ullamcorper massa nec semper venenatis. Nulla facilisi. Curabitur
            vel fermentum est, a faucibus tellus. Integer malesuada nunc vel
            elit consequat, ac fringilla orci euismod.
          </Text>
          <Text textAlign="justify" mb={6}>
            Suspendisse potenti. In hac habitasse platea dictumst. Integer quis
            eros ac neque convallis pellentesque. Fusce nec neque aliquam,
            euismod turpis eu, bibendum metus. Duis in neque nec arcu semper
            laoreet. Fusce eget sodales dui, at aliquam justo. Integer euismod
            luctus ex, id pharetra libero tincidunt ut.
          </Text>
          <Text textAlign="justify" mb={6}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
            urna eu felis dapibus condimentum sit amet a enim. Vivamus
            ullamcorper massa nec semper venenatis. Nulla facilisi. Curabitur
            vel fermentum est, a faucibus tellus. Integer malesuada nunc vel
            elit consequat, ac fringilla orci euismod.
          </Text>
          <Text textAlign="justify" mb={6}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
            urna eu felis dapibus condimentum sit amet a enim. Vivamus
            ullamcorper massa nec semper venenatis. Nulla facilisi. Curabitur
            vel fermentum est, a faucibus tellus. Integer malesuada nunc vel
            elit consequat, ac fringilla orci euismod.
          </Text>
        </Box>
        <Center mb={8}>
          <Heading as="h1" fontSize="xl" fontWeight="bold">
            Our Team
          </Heading>
        </Center>
        <SimpleGrid columns={[1, 2, 3, 4]} gap={10} minChildWidth={200}>
          {teamMembers.map((member) => (
            <Card
              key={member.id}
              borderRadius="15px"
              overflow="hidden"
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              m="1rem"
              w="300px"
            >
              <CardHeader>
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  w="300px"
                  h="300px"
                  borderTopRadius="15px"
                />
              </CardHeader>
              <Box p="1rem">
                <CardBody>
                  <Heading fontSize="md" mb={2}>
                    {member.name}
                  </Heading>
                  <Text fontSize="sm" mb={2}>
                    <Text>
                      <Text as="span" fontWeight={"bold"}>
                        Email:
                      </Text>{" "}
                      {member.email}
                    </Text>
                  </Text>
                  <Text fontWeight={"bold"}>{member.position}</Text>
                </CardBody>
              </Box>
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default TeamAndVisionPage;
