import { Box, FormControl, FormLabel, Heading, Input,Button, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import {useDispatch} from "react-redux"; 
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { logginIn } from "../../redux/authentication/action";
import { LOG_IN_SUCCESS } from "../../redux/authentication/actionTypes";

export const Login = () => {
const [credential,setCredential] = useState({
    email:"",
    password:""
})

const navigate = useNavigate()

const toast = useToast();
const dispatch = useDispatch();
    const handleLogin = (e)=>{
        let value = e.target.value;
        let name = e.target.name;
        setCredential({...credential,[name]:value})
    }
    const location = useLocation();
    const recentRoute = location.state;
    
    const handleSubmit = ()=>{
        dispatch(logginIn(toast,credential)).then(({type})=>{
            console.log(type)
            if(type == LOG_IN_SUCCESS){
                navigate(recentRoute,{replace:true})
            }
        })
    }


  return (
    <Box  w={"50%"} m={"100px auto"}>
        <Heading textAlign={"center"}>Login</Heading>
      <FormControl onSubmit={handleSubmit} isRequired>
        <FormLabel>Email</FormLabel>
        <Input onChange={handleLogin} name={"email"}  id={"email"} type={"email"} placeholder="Enter your email" />

        <FormLabel>Password</FormLabel>
        <Input onChange={handleLogin} name="password" id="password" type={"password"} placeholder="Password" />

        <Button onClick={handleSubmit} mt={"20px"} w={"100%"}>Submit</Button>

      </FormControl>
    </Box>
  );
};
