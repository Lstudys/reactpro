import react from 'react';

import {Row,Col} from 'react-bootstrap';
import products from '../products';
import Product from '../components/Product';

export default function HomeScreen(){
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