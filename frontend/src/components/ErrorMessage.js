import React from 'react';

import { Alert } from 'react-bootstrap';

const ErrorMessage = (props) =>{
    const {variant,children} = props;
    return <Alert variant={variant}>{children}</Alert>
}

export default ErrorMessage;