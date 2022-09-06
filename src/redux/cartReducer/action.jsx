import {
  GET_CART_DATA,
  GET_CART_ERROR,
  GET_CART_LOADING,
  POST_CART_DATA,
  POST_CART_ERROR,
  POST_CART_LOADING,
} from "./actionTypes";
import axios from "axios";
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

export const postingCartData = (payload) => (dispatch) => {
  dispatch(postCartLoading());
  axios
    .post("/cart", payload)
    .then(() => {
      dispatch(postCartData());
    })
    .catch(() => {
      dispatch(postCartError());
    });
};

export const gettingCartData = ()=>(dispatch)=>{
    dispatch(getCartLoading())
    axios.get("/cart").then(({data})=>{
        dispatch(getCartData(data))
    }).catch(()=>{
        dispatch(getCartError());
    })
}
