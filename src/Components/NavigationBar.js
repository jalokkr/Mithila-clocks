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
import Logo from "../Static/Mithila_Clocks.png";

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
      <Flex align="center" justifyContent="center">
        <Text fontSize="lg" fontWeight="bold">
          <NavLink to="/">
            <Box
              w={["80px", "150px", "200px", "170px"]}
              h={["80px", "150px", "200px", "170px"]}
            >
              <Image src={Logo} w="100%" h="100%" objectFit="cover" />
            </Box>
          </NavLink>
        </Text>

        {isMobile ? (
          <Box display={{ base: "block", md: "none" }} ml="2rem">
            <Icon w={"5rem"} h={"8rem"} as={HamburgerIcon} onClick={onOpen} />
          </Box>
        ) : (
          <Box>
            <Flex gap={"15rem"} ml={"10rem"}>
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
