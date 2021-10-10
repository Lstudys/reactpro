import react from 'react';

import {Card} from 'react-bootstrap';
import Rating from './Rating';

export default function Product({product}){
    return(
        <Card className="my-3 p-3 rounded">
            <a href={`/product/${product.content}`} >
                <Card.Img variant="top"></Card.Img>
            </a>
            <Card.Body>
            <a href={`/product/${product.content}`} >
                <Card.Title as="div">
                    <strong>{product.name}</strong>
                </Card.Title>
            </a>
            <Card.Text as="div">
                <div className="my-3">
                    <Rating value={product.rating} text={`${product.numReviews}reviews`}/>
                </div>
            </Card.Text>
            <Card.Text as="h3">
                   {product.content}
            </Card.Text>
            </Card.Body>
        </Card>
    );
}