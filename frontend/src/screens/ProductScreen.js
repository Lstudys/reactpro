/**
 * Created by 李永晖 on 2021/10/10
 */



import react,{useState,useEffect} from 'react';

import {Link} from 'react-router-dom';
import {Row,Col,ListGroup,Image,Card,Button, Form} from 'react-bootstrap';

import {useDispatch,useSelector} from 'react-redux';

import Rating from '../components/Rating';

import {productDetailAction} from '../actions/productActions.js';


export default function ProductScreen({ match }){
    const [qty,setQty] = useState(1);
    const dispatch = useDispatch();
    const productDetailData = useSelector(state => state.productDetail);
    const {loading,product,error} = productDetailData;
    console.log(product + '111');
    useEffect(()=>{
        dispatch(productDetailAction(match.params.id));
    },[dispatch,match]);

    // const product = products.find((p) => p._id === match.params.id);
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
                        <ListGroup.Item>
                            <Row>
                                <Col>price:</Col>
                                <Col><strong>${product.price}</strong></Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Status:</Col>
                                <Col>{product.countInStock>0 ? "In Stock" : "Out Of Stock"}</Col>
                            </Row>
                        </ListGroup.Item>
                        {
                            product.countInStock > 0 && (
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Qty</Col>
                                        <Col>
                                            <Form.Control as="select" value={qty} onChange={(e)=>{setQty(e.target.value)}}>
                                                {[...Array(product.countInStock).keys()].map((x) => {
                                                    <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                })}
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )
                        }
                        <ListGroup.Item>
                            <Button className="btn-block" type="button" disabled={product.countInStock === 0}>Add To Cart</Button>
                        </ListGroup.Item>
                    </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    );
}