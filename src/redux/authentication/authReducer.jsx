import { getTokenFromLocalStorage } from "../../utils/localStorage";
import { LOG_IN_ERROR, LOG_IN_LOADING, LOG_IN_SUCCESS, LOG_OUT_LOADING } from "./actionTypes"
const init = {
    token: getTokenFromLocalStorage("token") || null,
    isAuth:false,
    isLoading:false,
    isError:false
}
export const authReducer = ( state=init,{type,payload})=>{
    switch(type){
        case LOG_IN_ERROR:return {...state,isError:true,isLoading:false,isAuth:false};
        case LOG_IN_SUCCESS:return {...state,isError:false,isLoading:false,token:payload,isAuth:true};
        case LOG_IN_LOADING:return {...state,isError:false,isLoading:true,isAuth:false };
        case LOG_OUT_LOADING:return {...state,isError:false,isLoading:true,isAuth:false};
        case LOG_IN_SUCCESS:return {...state,isError:false,isLoading:false,isAuth:false,token:null};
        case LOG_IN_ERROR:return {...state,isError:true,isLoading:false}
        default : return state;
    }
}