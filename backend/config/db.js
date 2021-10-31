/**
 * 连接本地数据库的函数
 * created by 李永晖 on 2021/10/20
 */

import mongoose from 'mongoose';

const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect("mongodb://localhost/test",{
            // useUnifiedTopology: true,
            // useNewUrlParser: true,
            // useCreateIndex: true
        });
        console.log(`连接到${conn.connection.host}`);
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

export default connectDB;