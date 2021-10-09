import react from "react";

import {Container,Row,Col} from 'react-bootstrap';

export default function Footer(){
    return(
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">this is footer</Col>
                </Row>
            </Container>
        </footer>
    );
}