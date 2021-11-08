import axios from 'axios';
import {PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_FAIL} from '../constants/productConstants.js';

export const productListAction = async (dispatch)=>{
    try {
        dispatch({type:PRODUCT_LIST_REQUEST});
        const {data} = await axios.get('http://localhost:3001/api/products');
        dispatch({type:PRODUCT_LIST_SUCCESS,payload:data});
    } catch (error) {
        const payload = error.response && error.response.data.message ? error.response.data.message : error.message;
        dispatch({type:PRODUCT_LIST_FAIL,payload:payload});
    }
}