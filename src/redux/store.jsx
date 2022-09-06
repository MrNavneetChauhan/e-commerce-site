import {applyMiddleware,legacy_createStore,combineReducers} from 'redux';
// import {legacy_CreateStore} from "redux"
import thunk from 'redux-thunk';
import { productReducer } from './productReducer/productReducer';
import {composeWithDevTools} from "redux-devtools-extension";
import {cartReducer} from './cartReducer/cartReducer';
const reducer = combineReducers({
    productReducer,
    cartReducer
})

export const store = legacy_createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))