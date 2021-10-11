/**
 * Created by 李永晖 on 2021/10/10
 */



import react from 'react';

import {Link} from 'react-router-dom';
import {Row,Col,ListGroup,Image,Card,Button} from 'react-bootstrap';

import Rating from '../components/Rating';
import products from '../products';


export default function ProductScreen({match}){
    const product = products.find((p)=>p.id === match.params.id);
    return(
        <>
            <Link className="btn btn-dark my-3" to="/">go back</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid/>
                </Col>
                <Col md={3}>
                <ListGroup variant="flush">
                <ListGroup.Item>
                        <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                </ListGroup.Item>
                <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
                </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                    <ListGroup variant="flush">
                        <ListGroup.item>
                            <Row>
                                <Col>price:</Col>
                                <Col><strong>${product.price}</strong></Col>
                            </Row>
                        </ListGroup.item>
                        <ListGroup.item>
                            <Row>
                                <Col>Status:</Col>
                                <Col>{product.countInStock>0 ? "In Stock" : "Out Of Stock"}</Col>
                            </Row>
                        </ListGroup.item>
                        <ListGroup.item>
                            <Button className="btn-block" type="button" disabled={product.countInStock === 0}>Add To Cart</Button>
                        </ListGroup.item>
                    </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    );
}