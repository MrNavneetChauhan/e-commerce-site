import { Box ,Container,Image,Flex,Button,Text} from "@chakra-ui/react"
import { useEffect, useState } from "react";
import {useDispatch,useSelector} from "react-redux"
import { deleteCartData, gettingCartData, updateCartData } from "../../redux/cartReducer/action";
import { POST_CART_DATA } from "../../redux/cartReducer/actionTypes";
import { Loading } from "../loading/Loading";
export const Cart = ()=>{
const dispatch = useDispatch();
const {cartData,isLoading,isError} = useSelector((store)=>store.cartReducer);
const [total,setTotal] = useState(0);

useEffect(()=>{
    dispatch(gettingCartData());
},[])

useEffect(()=>{
    let total = 0;
    cartData.map((item)=>{
        total += item.price * item.qty
    })
    setTotal(Math.round(total))
},[cartData])


    return (
        <Container mb={"100px"}  position={"relative"} display={"flex"} gap={"20px"} padding="20px" flexWrap={"wrap"} maxW="100%" mt={"100px"} >
            <Flex direction={"column"} justifyContent={"center"} alignItems={"center"} gap={"5px"}  bottom={-20} width={"94%"}   position={"absolute"}>
                <Text bg={"coral"} w={"20%"}  textAlign={"center"} fontWeight={600}>Total :${total}</Text>
                <Button width={"25%"}  bg={"teal"}>Checkout</Button>
            </Flex>
            {isLoading ? <Loading/> : cartData.map((product)=>{
                return (
                    <Box key={product.id} display={"flex"}  flexDirection="column" gap={"10px"} alignItems="center" border={"1px solid lightgray"} w={"300px"} height={"450px"} >
                        <Image mt={"20px"} w={"100%"} h={"60%"} objectFit={"contain"} src={product.image}/>
                        <Text fontWeight={600}>Qty : {product.qty}</Text>
                        <Flex gap={"15px"} direction={"column"}>
                        <Flex gap={"15px"}>
                            <Button onClick={()=>{
                                dispatch(updateCartData(product.id,product.qty+1)).then(({type})=>{
                                    if(type == POST_CART_DATA){
                                        dispatch(gettingCartData())
                                    }
                                })
                            }}>+</Button>
                            <Button onClick={()=>{
                                if(product.qty-1 >= 1){
                                    dispatch(updateCartData(product.id,product.qty-1)).then(({type})=>{
                                        if(type == POST_CART_DATA){
                                            dispatch(gettingCartData())
                                        }
                                    }) 
                                }
                            }}>-</Button>
                        </Flex>
                        <Button onClick={()=>{
                            dispatch(deleteCartData(product.id)).then(({type})=>{
                                if(type === POST_CART_DATA){
                                    dispatch(gettingCartData())
                                }
                            })
                        }} colorScheme={"twitter"}>Delete</Button>
                        </Flex>
                    </Box>
                )
            })}
        </Container>
    )
}