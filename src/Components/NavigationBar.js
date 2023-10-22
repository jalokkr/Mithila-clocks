import React, { useState } from "react";
import {
  Box,
  Flex,
  VStack,
  HStack,
  IconButton,
  Image,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Text,
  Icon,
  useMediaQuery,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import Logo from "../Static/Images/logoNew.jpg";

const routes = [
  { to: "/", text: "Home" },
  { to: "/products", text: "Products" },
  { to: "/team-and-vision", text: "Team & Vision" },
  { to: "/contact-us", text: "Contact Us" },
];

const NavigationBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <Flex gap={{base: "2rem", sm: "2rem", md: "2rem", lg: "5rem", xl: "13rem",}} align="center" justifyContent="center" p="2rem">
        <Box w={{base: "50%", md: "40%", lg: "20%"}}>
          <NavLink to="/">
            <Image src={Logo} />
          </NavLink>
        </Box>

        {isMobile ? (
          <Box display={{ base: "block", md: "none" }} ml="2rem">
            <Icon w={"5rem"} h={"8rem"} as={HamburgerIcon} onClick={onOpen} />
          </Box>
        ) : (
          <Box>
            <Flex gap={{md: "5rem", lg: "10rem", xl: "13rem"}} alignItems={"center"}>
              {routes.map((route) => (
                <NavLink
                  to={route.to}
                  key={route.to}
                  style={({ isActive, isPending }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      textDecoration: isActive ? "underline" : "none",
                      color: isPending ? "red" : "black",
                    };
                  }}
                >
                  {route.text}
                </NavLink>
              ))}
            </Flex>
          </Box>
        )}
      </Flex>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent bg="black" color="white">
            <DrawerCloseButton bg="black" color="white" />
            <VStack mt={4} spacing={25}>
              {routes.map((route) => (
                <NavLink
                  to={route.to}
                  key={route.to}
                  onClick={onClose}
                  style={({ isActive, isPending }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      textDecoration: isActive ? "underline" : "none",
                      color: isPending ? "red" : "white",
                    };
                  }}
                >
                  {route.text}
                </NavLink>
              ))}
            </VStack>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default NavigationBar;
