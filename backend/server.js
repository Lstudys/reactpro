import express  from 'express';
import dotenv from 'dotenv';

import router from './routes/productsRoutes.js';

import connectDB from './config/db.js';

//和读取文件不同，读取文件会把文件所有内容读出，导入只是把该模块的导出内容导入
import  products from './data/products.js';

const app = express();

app.use('/api/products',router);

dotenv.config();
// console.log(process.env.PORT+'aaaa')

connectDB();


app.get('/',(req,res)=>{
    res.send('a');
});



const PORT = process.env.PORT || 3001;

app.listen(3001,()=>{
    console.log('server running');
})