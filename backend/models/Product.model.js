import mongoose, { Mongoose, Schema } from "mongoose";

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    productId: { 
        type: String,
        required: true,
        unique: true,
    },
    category: {
        type: String, 
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
    },
    description: {
        type: String,
    },
}, { timestamps: true }); 

const Product =mongoose.model("Product",ProductSchema)
export default Product
