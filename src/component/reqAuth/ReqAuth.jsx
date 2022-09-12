import {useSelector} from "react-redux"
import { Navigate, useLocation } from "react-router-dom"
export const ReqAuth = ({children})=>{

    const {isAuth,token} = useSelector((store)=>store.authReducer)
    const location = useLocation();
    if(!isAuth){
       return <Navigate to={"/login"} replace={true}  state={location.pathname} />
    }

    return children

}