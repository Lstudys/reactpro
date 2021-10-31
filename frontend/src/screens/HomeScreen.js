import react,{useState,useEffect} from 'react';

import axios from 'axios';
import {Row,Col} from 'react-bootstrap';
import Product from '../components/Product';

export default function HomeScreen(){
    const [products,setProducts] = useState([]);
    //组件挂载时执行
    useEffect(()=>{
        //使用async的目的是使用await，等待异步操作完成再执行下一步
        const getProducts = async ()=>{
            //axios不使用await的话，js线程不会等待结果的返回，直接执行setProducts操作
            const response = await axios.get("/api/products");
            //更新products。data就是返回的内容，这里是json对象,response是返回的对象
            console.log(response);
            setProducts(response.data);
        }
        getProducts();
    },[]);
    return(
        <>
        <h1>Home</h1>
        <Row>
            {
                products.map((item) => (
                    <Col key={item._id} sm={12} md={6} lg={4}>
                        <Product product={item}/>
                    </Col>
                ))
            }
        </Row>
        </>
    );
}