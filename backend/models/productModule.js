/**
 * created by 李永晖 on 2021/10/20
 */

import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
    name:{type:String,required:true},
    rating:{type:Number,required:true},
    content:{type:String,required:true}
})

const productSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    image:{
        type:String,
        required:true,
    },
    brand:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true,
        default:0
    },
    numReviews:{
        type:Number,
        required:true,
        default:0
    },
    price:{
        type:Number,
        required:true,
        default:0
    },
    countInStock:{
        type:Number,
        required:true,
        default:0
    },
    reviews:[reviewSchema]
},{timestamps:true});

const Product = mongoose.model('Product',productSchema)

export default Product;