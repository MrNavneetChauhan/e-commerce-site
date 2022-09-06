import { GET_CART_DATA, GET_CART_ERROR, GET_CART_LOADING, POST_CART_DATA, POST_CART_ERROR, POST_CART_LOADING } from "./actionTypes"

const init = {
    isLoading:false,
    isError:false,
    cartData:[]
}

export const cartReducer = (state = init,{type,payload})=>{
    switch(type){
        case GET_CART_LOADING:return {...state,isLoading:true,isError:false};
        case GET_CART_DATA:return {...state,cartData:payload,isLoading:false,isError:false};
        case GET_CART_ERROR:return {...state,isLoading:false,isError:true};
        case POST_CART_LOADING:return {...state,isLoading:true,isError:false};
        case POST_CART_DATA:return {...state,isLoading:false,isError:false};
        case POST_CART_ERROR:return {...state,isLoading:false,isError:true};
        default:return state;
    }
}