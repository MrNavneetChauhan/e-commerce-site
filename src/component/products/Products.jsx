import { Container,Text,Box ,Image, Grid, GridItem,Flex,Spacer,Button, useToast} from '@chakra-ui/react'
import React, { useEffect,useState } from 'react';
import {useSelector,useDispatch} from "react-redux"
import { gettingData } from '../../redux/productReducer/action.jsx';
import { shorteningTitle } from '../../utils/logicalFunctions.jsx';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Loading } from '../loading/Loading';
import { postingCartData } from '../../redux/cartReducer/action.jsx';
import { Error } from '../Error/Error.jsx';
export const Products = () => {
  const {products,isLoading,isError} = useSelector((store)=>store.productReducer);
  const [searchParmas] = useSearchParams();
  const location = useLocation();
const dispatch = useDispatch();
const toast = useToast();
  useEffect(()=>{
    if(location || products.length == 0){
      const query = {
        params:{
          color:searchParmas.getAll("color"),
          category:searchParmas.get("category"),
          _sort:searchParmas.get("sort") && "price",
          _order:searchParmas.get("sort")
        }
      }
      dispatch(gettingData(query))
    }
  },[location.search])

  return (
    <Container  m={0} pl={"30px"} pt={"30px"} pb={"30px"} maxW={"80%"} >
     { isLoading ? <Loading/>: isError ? <Error/>:<Grid ml={"25px"} templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)','repeat(4, 1fr)']} gap={6}>
      {products.length > 0 && products.map((product,index)=>{
        return (
          <GridItem key={index}  display={"flex"} flexDir="column" alignItems={"center"}   border={"1px solid gray"} borderRadius={"5px"} gap={"10px"}  w={"100%"} h={"350px"} key={product.id}>
            <Link className='link'  to={`/products/${product.id}`}>
            <Box cursor={"pointer"}  w={"100%"} h={"100%"} display={"flex"} flexDir="column" alignItems={"center"}>
            <Image cursor={"crosshair"}  textAlign={"center"} _hover={{w:"70%", h:"70%", transition:"ease-in-out 0.5s"}} w={"60%"} objectFit={"contain"} h={"70%"} src={product.image}  />
            <Text textAlign={"center"} fontWeight={500}>{shorteningTitle(product.title)}</Text>
            <Flex fontWeight={500} gap={"25px"}>
            <Text>Price ${product.price}</Text>
            <Text>Rating {product.rating.rate}</Text>
            </Flex>
            </Box>
            </Link>
            <Button onClick={()=>{
                dispatch(postingCartData(product,toast))
            }} mb={"10px"} colorScheme={"facebook"}>Add To Cart</Button>
          </GridItem>
        )
      })}
      </Grid>}
    </Container>
  )
}
