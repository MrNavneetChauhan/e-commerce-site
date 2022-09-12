import {
  GET_CART_DATA,
  GET_CART_ERROR,
  GET_CART_LOADING,
  POST_CART_DATA,
  POST_CART_ERROR,
  POST_CART_LOADING,
} from "./actionTypes";
import axios from "axios";
import { notification } from "../../utils/logicalFunctions.jsx";
export const getCartLoading = () => {
  return {
    type: GET_CART_LOADING,
  };
};
export const getCartData = (payload) => {
  return {
    type: GET_CART_DATA,
    payload,
  };
};
export const getCartError = (payload) => {
  return {
    type: GET_CART_ERROR,
  };
};

export const postCartLoading = () => {
  return {
    type: POST_CART_LOADING,
  };
};

export const postCartData = () => {
  return {
    type: POST_CART_DATA,
  };
};

export const postCartError = () => {
  return {
    type: POST_CART_ERROR,
  };
};

export const postingCartData = (payload,toast) => (dispatch) => {
  dispatch(postCartLoading());
  axios.get("/cart").then(({data})=>{
    let x = data.filter((item)=>item.id == payload.id)
    if(x.length){
      notification(toast,"Already Added","Product is already present in the Cart","info")
    }else{
      axios.post("/cart",payload).then(()=>{
        dispatch(postCartData())
        notification(toast,"Product Added","Product Added Successfully","success")
      }).catch(()=>{
        dispatch(postCartError())
      })
    }
  })
};

export const updateCartData = (id,qty)=>(dispatch)=>{
  console.log("qty",qty)
  dispatch(postCartLoading());
 return  axios({
    method:'patch',
    url:`/cart/${id}`,
    data:{
      qty:qty
    }
  }).then(()=>{
   return  dispatch(postCartData())
  }).catch(()=>{
    dispatch(postCartError())
  })
}


export const deleteCartData = (id)=>(dispatch)=>{
  dispatch(postCartLoading());
  return  axios({
    method:'delete',
    url:`/cart/${id}`,
  }).then(()=>{
   return  dispatch(postCartData())
  }).catch(()=>{
    dispatch(postCartError())
  })
}

export const gettingCartData = ()=>(dispatch)=>{
    dispatch(getCartLoading())
    axios.get("/cart").then(({data})=>{
        dispatch(getCartData(data))
    }).catch(()=>{
        dispatch(getCartError());
    })
}
