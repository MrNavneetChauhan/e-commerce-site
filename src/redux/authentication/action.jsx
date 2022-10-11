import { LOG_IN_ERROR, LOG_IN_LOADING, LOG_IN_SUCCESS, LOG_OUT_ERROR, LOG_OUT_LOADING, LOG_OUT_SUCCESS } from "./actionTypes"
import axios from "axios";
import { notification } from "../../utils/logicalFunctions";
import { getTokenFromLocalStorage, removeFromLocalStorage, setToLocalStorage } from "../../utils/localStorage";
export const loginLoading = ()=>{
    return {
        type:LOG_IN_LOADING
    }
}

export const loginSuccess = (payload)=>{
    return {
        type:LOG_IN_SUCCESS,
        payload
    }
}

export const loginError = ()=>{
    return {
        type:LOG_IN_ERROR
    }
}

export const logOutLoading = ()=>{
    return {
        type:LOG_OUT_LOADING
    }
}

export const logOutSuccess = ()=>{
    return {
        type:LOG_OUT_SUCCESS
    }
}

export const logOutError = ()=>{
    return {
        type:LOG_OUT_ERROR
    }
}


export const logginIn =(toast,payload)=>(dispatch)=>{
    dispatch(loginLoading());
   return axios({
        method:"post",
        baseURL:"https://reqres.in/api/login",
        data:payload
    }).then(({data})=>{
        let x = data.token;
        setToLocalStorage("token",x)
        notification(toast,"Login Success","You have login Successfully","success")
        return dispatch(loginSuccess(x));
    }).catch((data)=>{
        let x  = data.response.data.error;
        notification(toast,x,"please enter the valid credentials","error")
    })
}

export const loggingOut = (toast)=>(dispatch)=>{
    dispatch(logOutLoading());
    let token = getTokenFromLocalStorage("token");
    removeFromLocalStorage("token");
    dispatch(logOutSuccess())
    if(token){
        notification(toast,"Logout Success","You have logut Successfully","success")   
    }else{
        notification(toast,"Information","You are already logged out","info") 
    }
}