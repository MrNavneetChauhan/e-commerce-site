import { GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS } from "./actionTypes";

const init = {
  isLoading:false,
  isError:false,
  products:[]
};

export const productReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_DATA_LOADING:return {...state,isLoading:true,isError:false}
    case GET_DATA_SUCCESS:return {...state,isLoading:false,isError:false,products:payload};
    case GET_DATA_ERROR:return {...state,isLoading:false,isError:true}
    default:
      return state;
  }
};
