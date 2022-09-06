import { Box ,Container,Image,Flex,Button} from "@chakra-ui/react"
import { useEffect } from "react";
import {useDispatch,useSelector} from "react-redux"
import { gettingCartData } from "../../redux/cartReducer/action";
import { Loading } from "../loading/Loading";
export const Cart = ()=>{
const dispatch = useDispatch();
const {cartData,isLoading,isError} = useSelector((store)=>store.cartReducer);
useEffect(()=>{
    dispatch(gettingCartData())
},[])
    return (
        <Container display={"flex"} gap={"20px"} padding="20px" flexWrap={"wrap"} maxW="100%" mt={"80px"}>
            {isLoading ? <Loading/> : cartData.map((product)=>{
                return (
                    <Box display={"flex"} flexDirection="column" gap={"30px"} alignItems="center" border={"1px solid black"} w={"300px"} height={"400px"}>
                        <Image mt={"20px"} w={"100%"} h={"70%"} objectFit={"contain"} src={product.image}/>
                        <Flex>
                        <Button colorScheme={"blackAlpha"}>Delete</Button>
                        </Flex>
                    </Box>
                )
            })}
        </Container>
    )
}