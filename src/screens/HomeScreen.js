import react from 'react';

import {Row,Col} from 'react-bootstrap';
import {data} from '../data';
import Product from '../components/Product';

export default function HomeScreen(){
    return(
        <>
        <h1>Home</h1>
        <Row>
            {
                data.map((item) => (
                    <Col key={item.id} sm={12} md={6} lg={4}>
                        <Product product={item}/>
                    </Col>
                ))
            }
        </Row>
        </>
    );
}