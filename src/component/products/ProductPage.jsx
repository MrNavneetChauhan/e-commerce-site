import { Container } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Products } from './Products';
import { SideBar } from './SideBar';

export const ProductPage = () => {
  return (
    <Container  display={"flex"} m={"60px auto"} maxW={"100%"}>
          <SideBar/>
          <Products/>  
    </Container>
  )
}
