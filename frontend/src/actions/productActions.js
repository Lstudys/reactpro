import axios from 'axios';
import {
PRODUCT_LIST_REQUEST,
PRODUCT_LIST_SUCCESS,
PRODUCT_LIST_FAIL,
PRODUCT_DETAIL_REQUEST,
PRODUCT_DETAIL_SUCCESS,
PRODUCT_DETAIL_FAIL
} from '../constants/productConstants.js';

export const productListAction = async (dispatch)=>{
    try {
        dispatch({type:PRODUCT_LIST_REQUEST,payload:[]});
        const {data} = await axios.get("/api/products");
        dispatch({type:PRODUCT_LIST_SUCCESS,payload:data});
    } catch (error) {
        const payload = error.response && error.response.data.message ? error.response.data.message : error.message;
        dispatch({type:PRODUCT_LIST_FAIL,payload:payload});
    }
}


export const productDetailAction = (id)=> async (dispatch)=>{
    try {
        dispatch({type:PRODUCT_DETAIL_REQUEST});
        const {data} = await axios.get(`/api/products/${id}`);
        dispatch({type:PRODUCT_DETAIL_SUCCESS,payload:data});
    } catch (error) {
        const payload = error.response && error.response.data.message ? error.response.data.message : error.message;
        dispatch({type:PRODUCT_DETAIL_FAIL,payload:payload});
    }
}