import { Box, Button, HStack, Flex, Spacer,Input } from "@chakra-ui/react";
import {Search2Icon} from "@chakra-ui/icons";
import {Link} from "react-router-dom"
import React from "react";
export const NavBar = () => {
  return (
    <Flex
      fontSize={"20px"}
      color={"white"}
      h={"60px"}
      bg="cyan.300"
      pl="40px"
      pr={"40px"}
      alignItems={"center"}
      position={"fixed"}
      top={0}
      width={"100%"}
      zIndex={"5"}
    >
      <HStack gap={"20px"}>
        <Link to={"/"}>Home</Link>
        <Link to={"/products"} >Products</Link>
        <Link to={"/contact"}>Contact</Link>
      </HStack>
      <Spacer/>
      <Flex alignItems={"center"}>
        {<Input borderRadius={"none"} border="none" color={"black"}  bg={"antiquewhite"} h="35px" w={"400px"}/>}
        <Search2Icon  p={"8px"} bg={"antiquewhite"} w={"40px"} h="35px" color={"twitter.400"} cursor={"pointer"}/>
      </Flex>
      <Spacer />
      <HStack gap={"20px"}>
        <Link to={"/login"}>Login</Link>
        <Link to={"/signup"}>Signup</Link>
        <Link to={"/cart"}>Cart</Link>
      </HStack>
    </Flex>
  );
};
