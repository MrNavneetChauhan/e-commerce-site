import { LOG_IN_ERROR, LOG_IN_LOADING, LOG_IN_SUCCESS } from "./actionTypes"
import axios from "axios";
import { notification } from "../../utils/logicalFunctions";
import { setToLocalStorage } from "../../utils/localStorage";
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


export const logginIn =(toast,payload)=>(dispatch)=>{
    dispatch(loginLoading());
   return axios({
        method:"post",
        baseURL:"https://reqres.in/api/login",
        data:payload
    }).then(({data})=>{
        let x = data.token;
        setToLocalStorage(x)
        notification(toast,"Login Success","You have login Successfully","success")
        return dispatch(loginSuccess(x));
    }).catch((data)=>{
        let x  = data.response.data.error;
        notification(toast,x,"please enter the valid credentials","error")
    })
}