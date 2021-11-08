/**
 * store
 * created by 李永晖 on 2021/11/08
 * lasted edited by 李永晖 on 2021/11/08
 */

import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {productListReducer} from '../reducers/productReducer.js';


const reducer = combineReducers({
    productList:productListReducer,
});

const initialState = {};

const middlewares = [thunk];

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middlewares)));

export default store;