import { GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS } from "./actionTypes"
import axios from "axios";
export const getDataSuccess = (payload)=>{
    return {
        type:GET_DATA_SUCCESS,
        payload
    }
}

export const getDataLoading = ()=>{
    return {
        type:GET_DATA_LOADING
    }
}

export const getDataError = ()=>{
    return {
        type:GET_DATA_ERROR
    }
}

export const gettingData =(params)=>(dispatch)=>{
    dispatch(getDataLoading());
    axios.get("/products",params).then(({data})=>{
        dispatch(getDataSuccess(data))
    }).catch(()=>{
        dispatch(getDataError())
    })
}