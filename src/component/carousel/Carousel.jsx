import { Container,Image,Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
let images = ["carousel/image1.jpg","carousel/image2.jpg","carousel/image3.jpg"];
let N = images.length;
import  {ChevronLeftIcon,ChevronRightIcon} from "@chakra-ui/icons"
import { useNavigate } from 'react-router-dom';
export const Carousel = () => {
const [photo,setPhoto] = useState(0);
const navigate = useNavigate();
const leftArrow = ()=>{
  setPhoto((prev)=>prev == 0 ? N-1:prev-1);
}

const rightArrow = ()=>{
  setPhoto((prev)=>prev == N-1 ? 0:prev+1)
}

    useEffect(()=>{
      let id = setInterval(()=>{
        setPhoto((prev)=>prev== N-1 ? 0:prev+1)
      },3000)

      return ()=>{
        clearInterval(id)
      }
    },[])

  return (
    <Container cursor={"pointer"} onClick={()=>{
      navigate("/products")
    }} position={"relative"} p={"0"} h={["200px","250px","300px","300px"]} maxW={"100%"}>
      <Box onClick={()=>leftArrow()}  ml={"10px"} cursor={"pointer"} border={"1px solid black"} borderRadius="10px" _hover={{bg:"black",color:"white"}} display="grid" placeItems={"center"} position={"absolute"} top="44%" left="0" >
        <ChevronLeftIcon w={"50px"} h={"50px"}/>
      </Box>
      <Image  objectFit={"cover"} h={"100%"} w={"100%"} src={images[photo]}/>
      <Box onClick={()=>rightArrow()} mr={"10px"} cursor={"pointer"} border={"1px solid black"} borderRadius="10px" display="grid" placeItems={"center"} _hover={{bg:"black",color:"white"}} position={"absolute"} right="0" bottom="45%" >
      <ChevronRightIcon w={"50px"} h={"50px"}/>
      </Box>
    </Container>
  )
}
