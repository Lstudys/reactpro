const express = require('express');

const products = require('./data/products');

const app = express();

app.get('/',(req,res)=>{
    res.send('a');
});

app.get('/products',(req,res)=>{
    res.json(products);
});

app.get('/products/:id',(req,res)=>{
    const product = products.find(p=>
        p._id === req.params.id
        );
    res.json(product);
})


app.listen(3001,()=>{
    console.log('server running');
})