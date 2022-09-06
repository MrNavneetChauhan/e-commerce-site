import { Box, Container,Text,Image,Flex } from '@chakra-ui/react'
import React from 'react'
const demoData = ["demoData/image1.png","demoData/image2.png","demoData/image3.png","demoData/image4.png","demoData/image1.png","demoData/image2.png","demoData/image3.png","demoData/image4.png"];
const productName =["Coffee","Perfume","Clothes","bicycle","Coffee","Perfume","Clothes","bicycle"]
export const DemoProduct = () => {
  return (
    <Container h={"300px"}  maxW={"100%"}>
      <Text fontWeight={"700"} fontSize={"25px"} textAlign={"center"} >Products</Text>
      <Flex mb={"15px"} gap={"15px"} overflow={"auto"} w={"100%"} height={"80%"} >
      {demoData.map((products,index)=>{
        return (
          <Box key={index} _hover={{bg:"lightgray"}} position={"relative"} cursor={"pointer"} border={"1px solid gray"} p={"5px"}  display={"grid"} placeContent={"center"} w={"300px"}  h={"100%"} >
        <Image objectFit={"cover"}  src={products}/>
        <Text fontWeight={"500"} position={"absolute"} bottom={"0"} left={"35%"}>{productName[index]}</Text>
      </Box>
        )
      })}
      </Flex>
    </Container>
  )
}
