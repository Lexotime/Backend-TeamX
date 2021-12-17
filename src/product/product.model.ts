import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: String, required: true},
    quantity: {type: String, required: true},
    image: {type: String, required: true}
});

export interface Product{
    _id: string;
    name: string;
    price: string;
    quantity: string;
    image: string;
}