import react,{useEffect} from 'react';

// import axios from 'axios';
import {useDispatch,useSelector} from 'react-redux';
import {productListAction} from '../actions/productActions.js';

import {Row,Col} from 'react-bootstrap';
import Product from '../components/Product';
import ErrorMessage from '../components/ErrorMessage.js';
import Loading from '../components/Loading.js';

export default function HomeScreen(){
const dispatch = useDispatch();
const productData = useSelector((state) => state.productList);
const {loading,products,error} = productData;
console.log(products + '111');
    //组件挂载时执行，[]中的参数变化时执行
    useEffect(()=>{
        dispatch(productListAction);
    },[dispatch]);
    return(
        <>
        <h1>Home</h1>
        {loading? (<Loading/>): error? (<ErrorMessage variant={'danger'} children={error}/>):
        <Row>
        {
            products.map((item) => (
                <Col key={item._id} sm={12} md={6} lg={4}>
                    <Product product={item}/>
                </Col>
            ))
        }
    </Row>}
        </>
    );
}