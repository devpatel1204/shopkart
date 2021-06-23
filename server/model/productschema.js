import mongoose from 'mongoose';
const productshema= new mongoose.Schema({
    id:String,
    url:String,
    detailurl:String,
    title:Object,
    price:Object,
    description:String,
    discount:String,
    tagline:String,
})
const products =mongoose.model('product',productshema);
export default products;
