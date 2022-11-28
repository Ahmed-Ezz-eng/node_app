import { model, Schema } from "mongoose";

const schema = new Schema({
    title: String,
    desc: String,
    quantity: Number,
    price: Number,
    img: String
})

const Product = model('Product', schema);
export default Product;