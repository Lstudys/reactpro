import express from 'express';

// import products from '../data/products.js';
import ProductModule from '../models/productModule.js';

const router = express.Router()


router.get('/:id',async (req,res)=>{
    const products = await ProductModule.findById(req.params.id);
    res.json(products);
})


router.get('/',async (req,res)=>{
    const products = await ProductModule.find({});
    res.json(products);
})



export default router;