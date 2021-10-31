/**
 * created by 李永晖 on 2021/10/22
 */

import mongoose from 'mongoose';

import users from './data/users.js';
import products from './data/products.js';

import User from './models/userModels.js';
import Product from './models/productModule.js';
import Order from './models/orderModule.js';

import connectDB from './config/db.js';

connectDB();


const importData = async ()=>{
    try {
        await Order.deleteMany();
        await User.deleteMany();
        await Product.deleteMany();

        const createdUsers = await User.insertMany(users);
        const adminUser = createdUsers[0]._id;

        const sampleProducts = products.map(product => {
        return { ...product, user: adminUser }
    });
        await Product.insertMany(sampleProducts);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

const destroyData = async () => {
    try {
      await Order.deleteMany();
      await Product.deleteMany();
      await User.deleteMany();
  
      console.log('Data Destroyed');
      process.exit();
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  }

  importData();