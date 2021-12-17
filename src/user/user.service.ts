import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService{
    
    constructor(@InjectModel('User') private userModel: Model<User>){}

    async recupAllUser(){
        const users = await this.userModel.find();
        return users;
    }
    async recupOneUser(id: string){
        const users = await this.userModel.findById(id);
        return users;
    }
    async ajouterUser(first: string, last: string, address: string){
        const user = new this.userModel({
            firstName: first,
            lastName: last,
            address: address
        });
        const result = await user.save();
        return result._id;
    }
    async mettreAJourUser(id: string, firstName: string, lastName: string, address: string){
        const user = await this.recupOneUser(id);
        const updatedUser = user;
        if(firstName){
            updatedUser.firstName = firstName;
        }
        if(lastName){
            updatedUser.lastName = lastName;
        }
        if(address){
            updatedUser.address = address;
        }
        updatedUser.save();
        return "OK";
    }
    async supprimerUser(id:string){
        await this.userModel.deleteOne({_id:id});
        return "OK";
    }
}