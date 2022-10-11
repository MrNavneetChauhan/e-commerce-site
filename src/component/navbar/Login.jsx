import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Divider, Menu, MenuButton, MenuItem, MenuList, useToast } from "@chakra-ui/react";
import {BsHeart,BsFillCartCheckFill} from "react-icons/bs"
import {useDispatch, useSelector} from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loggingOut } from "../../redux/authentication/action";

export const Login = ()=>{
const {isAuth} = useSelector((store)=>store.authReducer)
const navigate = useNavigate()
const dispatch = useDispatch();
const toast = useToast();
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
    <MenuItem onClick={()=>{
      dispatch(loggingOut(toast))
    }}>Logout</MenuItem>
  </MenuList>
</Menu>
):<Link to={"/login"}>Login</Link>

}