/**
 * 购物车相关action
 * created by 李永晖 on 2021/11/15
 */

import {CART_ADD_ITEM} from '../constants/cartConstants.js';

import axios from 'axios';


export const addToCart = (id,qty) => async (dispatch,getState)=>{
    const {data} = await axios.get(`/api/products${id}`);
    dispatch({
        type:CART_ADD_ITEM,
        payload:{
            product:data._id,
            name:data.name,
            price:data.price,
            image:data.image,
            countInStock:data.countInStock,
            qty
        }
    })
    // getState获取所有reducer的默认state,cart指定cart的reducer，cartItems获取默认state对象的属性
    localStorage.setItem('cart',JSON.stringify(getState().cart.cartItems))
}