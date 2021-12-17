import { Injectable } from '@nestjs/common';
import { Product } from './product.model'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductService{
    constructor(@InjectModel('Product') private productModel: Model<Product>){}

    async recupAllProduct(){
        const prod = await this.productModel.find();
        return prod;
    }
    async recupOneProduct(id: string){
        const prod = await this.productModel.findById(id);
        return prod; 
    }
    async ajouterProduct(name: string, price: string, quantity: string, image: string){
        const prod = new this.productModel({
            name: name,
            price: price,
            quantity: quantity,
            image: image
        });
        const result = await prod.save();
        return result._id;
    }
    async modifierProduct(id: string, name: string, price: string, quantity: string, image: string){
        const prod = await this.recupOneProduct(id);
        const updatedProd = prod;
        if(price){
            updatedProd.price = price;
        }
        if(name){
            updatedProd.name = name;
        }
        if(quantity){
            updatedProd.quantity = quantity;
        }
        if(image){
            updatedProd.image = image;
        }
        updatedProd.save();
        return "OK";
    }
    async supprimerProduit(id: string){
        await this.productModel.deleteOne({_id:id});
        return "OK";
    }
}