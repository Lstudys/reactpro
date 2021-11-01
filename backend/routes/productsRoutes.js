import express from 'express';

// import products from '../data/products.js';
import ProductModule from '../models/productModule.js';
import asyncHandler from 'express-async-handler';

const router = express.Router()


router.get('/:id',asyncHandler(async (req,res)=>{
    const products = await ProductModule.findById(req.params.id);
    if(products){
        res.json(products);
    }else{
        res.send(404);
    }
}))



router.get('/',asyncHandler(async (req,res)=>{
    const products = await ProductModule.find({});
    res.json(products);
}))



export default router;