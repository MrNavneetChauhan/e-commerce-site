import { Box ,Container,Image,Text,Flex,Button} from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import {useSelector,useDispatch} from 'react-redux';
import { gettingData } from "../../redux/productReducer/action";
import {postingCartData} from "../../redux/cartReducer/action"
export const SinglePage = ()=>{
    const {id} = useParams();
    const {products} = useSelector((store)=>store.productReducer);
    const [singleProduct,setSingleProduct] = useState({});
    const dispatch = useDispatch();
    useEffect(()=>{
        if(products.length == 0){
            dispatch(gettingData())
        }
    },[dispatch,products.length])

    useEffect(()=>{
        if(id){
            const data = products.find((prod)=>prod.id == id)
            data && setSingleProduct(data)
        }
    },[id,products])

    return (
        <Container display={"flex"} justifyContent={"space-around"} maxW={"100%"} mt={"80px"} mb={"20px"} >
            <Box padding={"10px"} display={"flex"} flexDirection="column"  alignItems="center" border={"1px solid gray"} w={"40%"} h={"500px"}>
            <Image cursor={"crosshair"}  objectFit={"contain"} mt="20px" w={"80%"} h={"70%"} src={singleProduct.image}/> 
            <Text mt={"20px"} fontSize={"18px"} textAlign={"center"} fontWeight={600}>{singleProduct.title}</Text> 
            <Text fontWeight={500}><span style={{fontSize:"20px",fontWeight:"500",color:"brown"}}>Category </span>{singleProduct.category}</Text>   
            </Box>
            <Box padding={"10px"} border={"1px solid gray"} w={"40%"}>
            <Text mt={"10px"}><span style={{fontSize:"20px",fontWeight:"500"}}>Description: </span>{singleProduct.description}</Text>
            <Box mt={"50px"} display={"flex"} gap="15px" flexDirection="column" alignItems={"center"} justifyContent={"center"} border={"1px solid lightgray"}>
                <Text fontWeight={600} fontSize="20px">Price: ${singleProduct.price}</Text>
                <Text fontWeight={600} fontSize="20px">Rating: {singleProduct?.rating?.rate}</Text>
                <Text>{}</Text>
            </Box>
            <Button onClick={()=>{
                dispatch(postingCartData(singleProduct))
            }} colorScheme={"teal"} w={"80%"} m={"20px auto"} ml={"50px"}>Add To Cart</Button>
            </Box>
        </Container>
    )
}