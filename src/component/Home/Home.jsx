import { Container,Box ,Image} from "@chakra-ui/react";
import React from "react";
import { Carousel } from "../carousel/Carousel";
import { DemoProduct } from "../demoProducts/DemoProduct";
export const Home = () => {
  return (
    <Box  mt={"60px"}>
      <Carousel />
      <DemoProduct />
      <Image w={"100%"} h="200px" src={"discount/image1.png"} />
      <Image w={"100%"} objectFit={"cover"} h={"250px"} src={"discount/image2.jpg"} />
    </Box>
  );
};
