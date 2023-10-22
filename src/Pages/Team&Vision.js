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
            Mithila Clocks, a beacon of creativity and craftsmanship, is not
            just a brand; it's a vision. Rooted in the rich cultural tapestry of
            Bharat and inspired by the artistic heritage of Mithila, we craft
            more than just clocks; we create timeless pieces of art that adorn
            walls, offices, and homes. Our vision extends far beyond aesthetics;
            it's a commitment to preserving traditions and embracing the future.
          </Text>
          <Text textAlign="justify" mb={6}>
            In the heart of Mithila Clocks lies a passionate dedication to the
            principles of "Vocal for Local." We champion the essence of Bharat's
            culture, bringing it to life through our intricately designed
            clocks. Each piece resonates with the soul of our nation, carrying
            forward the legacy of our artisans. By choosing Mithila Clocks, you
            not only adorn your spaces with elegance but also contribute to the
            prosperity of local craftsmen.
          </Text>
          <Text textAlign="justify" mb={6}>
            At Mithila Clocks, we believe in the power of fusion – merging the
            traditional with the contemporary, the ancient with the modern. Our
            clocks are more than mere timekeepers; they are cultural
            ambassadors, bridging the gap between heritage and innovation. By
            adorning your spaces with Mithila Clocks, you not only bring home
            exquisite craftsmanship but also support a movement that celebrates
            local talent. We are on a mission to transform every home and office
            into a canvas of Bharat's artistic splendor. With every tick of our
            clocks, we aim to echo the heartbeat of our nation, inviting you to
            be a part of an extraordinary journey where tradition meets
            innovation, and culture finds its place in the heart of your home.
          </Text>
          <Text textAlign="justify" mb={6}>
            We invite you to embrace the spirit of Swadeshi, to celebrate the
            vibrancy of our homeland through our meticulously crafted clocks.
            With Mithila Clocks, your walls don't just tell time; they narrate
            stories, preserving the essence of Bharat's heritage and inviting
            you to be a part of this timeless journey. Join us in adorning your
            spaces with artistry that reflects the soul of our nation.
          </Text>
        </Box>
        <Center mb={8}>
          <Heading as="h1" fontSize="xl" fontWeight="bold">
            Our Team
          </Heading>
        </Center>
        <SimpleGrid
          columns={[1, 2, 3, 4]}
          minChildWidth={200}
          justifyContent="center"
        >
          {teamMembers.map((member) => (
            <Card
              key={member.id}
              borderRadius="15px"
              overflow="hidden"
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 7px 3px"
              m="1rem"
              w="300px"
              ml="3rem"
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
