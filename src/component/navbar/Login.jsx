import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Divider, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import {BsHeart,BsFillCartCheckFill} from "react-icons/bs"
import {useSelector} from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export const Login = ()=>{
const {isAuth} = useSelector((store)=>store.authReducer)
const navigate = useNavigate()
return isAuth ?  (
    <Menu>
  <MenuButton _hover={{bg:"lightgray"}}  bg={"hidden"}>
    Profile
    <ChevronDownIcon />
  </MenuButton>
  <MenuList color={"black"}>
    <MenuItem onClick={()=>{
      navigate("/cart")
    }}  icon={<BsFillCartCheckFill/>}>
      Cart
    </MenuItem>
    <Divider/>
    <MenuItem>Logout</MenuItem>
  </MenuList>
</Menu>
):<Link to={"/login"}>Login</Link>

}