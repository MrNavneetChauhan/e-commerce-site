import { Box, Button, HStack, Flex, Spacer,Input } from "@chakra-ui/react";
import {Search2Icon} from "@chakra-ui/icons";
import {Link} from "react-router-dom"
import React from "react";
import {useSelector} from "react-redux";
import { Login } from "./Login";

export const NavBar = () => {

  const {isAuth} = useSelector((store)=>store.authReducer)
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
        <a target={"_blank"} href={"https://www.linkedin.com/in/navneet-chauhan-888825160/"}>Contact</a>
      </HStack>
      <Spacer/>
      <Flex alignItems={"center"}>
        {<Input borderRadius={"none"} border="none" color={"black"}  bg={"antiquewhite"} h="35px" w={"400px"}/>}
        <Search2Icon  p={"8px"} bg={"antiquewhite"} w={"40px"} h="35px" color={"twitter.400"} cursor={"pointer"}/>
      </Flex>
      <Spacer />
      <HStack gap={"20px"}>
        <Login/>
        <Link to={isAuth?"/cart":"/login"}>Cart</Link>
      </HStack>
    </Flex>
  );
};
