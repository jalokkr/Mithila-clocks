import {
    Box,
    Container,
    Flex,
    Grid,
    Link,
    Text,
    Stack,
    VisuallyHidden,
    chakra,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
  
  
  const routes = [
    { to: "/", text: "Home" },
    { to: "/products", text: "Products" },
    { to: "/team-and-vision", text: "Team & Vision" },
    { to: "/contact-us", text: "Contact Us" },
  ];
  
  const ResponsiveFooter = () => {
  
    return (
      <>
        <Container  bg={"black"} color="white">
          <Grid templateColumns={{ base: "auto", md: "1fr 2fr 1fr" }} gap={4}>
            <Stack spacing={4}>
              <Text fontSize="xl" fontWeight="bold">
                Clock Brand
              </Text>
              <Text fontSize="sm" color={"gray.300"}>
                Clock Brand is a leading manufacturer of high-quality clocks. We offer a wide variety of clocks to suit every taste and budget.
              </Text>
            </Stack>
            <Box textAlign="center">
              <SocialMediaIcons />
            </Box>
            <Box textAlign="right" mr="5">
              <QuickLinks routes={routes} />
            </Box>
          </Grid>
          <Text textAlign="center" mt={8} fontSize="sm">
            Copyright &copy; {new Date().getFullYear()} Clock Brand. All rights reserved.
          </Text>
        </Container>
      </>
    );
  };
  
  const SocialMediaIcons = () => {
    return (
      <Flex gap={4} justifyContent="center">
        <Link href="https://twitter.com/clock_brand">
          <FaTwitter />
        </Link>
        <Link href="https://youtube.com/clock_brand">
          <FaYoutube />
        </Link>
        <Link href="https://instagram.com/clock_brand">
          <FaInstagram />
        </Link>
      </Flex>
    );
  };
  
  const QuickLinks = ({ routes }) => {
    return (
      <Flex gap={4} justifyContent="end">
        {routes.map((route) => (
          <Link key={route.to} to={route.to}>
            {route.text}
          </Link>
        ))}
      </Flex>
    );
  };
  
  export default ResponsiveFooter;
  