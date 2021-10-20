import express  from 'express';

import dotenv from 'dotenv';

import connectDB from './config/db.js';

//和读取文件不同，读取文件会把文件所有内容读出，导入只是把该模块的导出内容导入
import { products } from './data/products.js';

const app = express();

dotenv.config();
connectDB();

app.get('/',(req,res)=>{
    res.send('a');
});

app.get('/api/products',(req,res)=>{
    res.json(products);
});

app.get('/products/:id',(req,res)=>{
    const product = products.find(p=>
        p._id === req.params.id
        );
    res.json(product);
})


const PORT = process.env.PORT;

app.listen(3001,()=>{
    console.log('server running');
})