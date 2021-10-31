import express from 'express';

import products from '../data/products.js';
import ProductModule from '../models/productModule.js';

const router = express.Router()


router.get('/:id',(req,res)=>{
    const productss = ProductModule.find({});
    const product = products.find(p=>
        p._id === req.params.id
        );
        // console.log('000000---------------------------0000000');
        // console.log(productss);
    res.json(productss);
})


router.get('/',async (req,res)=>{
    // const product = await ProductModule.find({});
    res.json(products);
})



export default router;