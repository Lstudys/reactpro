import react from 'react';

import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import Rating from './Rating';

export default function Product({product}){
    return(
        <Card className="my-3 p-3 rounded">
            <Link to={`/products/${product._id}`} >
                <Card.Img src={product.image} variant="top"></Card.Img>
            </Link>
            <Card.Body>
            <Link to={`/products/${product._id}`} >
                <Card.Title as="div">
                    <strong>{product.name}</strong>
                </Card.Title>
            </Link>
            <Card.Text as="div">
                <div className="my-3">
                    <Rating value={product.rating} text={`${product.numReviews}reviews`}/>
                </div>
            </Card.Text>
            <Card.Text as="h3">
                   {product.price}
            </Card.Text>
            </Card.Body>
        </Card>
    );
}