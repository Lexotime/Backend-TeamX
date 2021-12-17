import { Controller, Body, Param, Get, Post, Patch, Delete } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController{

    constructor(private userService: UserService){}

    @Get()
    async findAllUser(){
        const result = await this.userService.recupAllUser();
        return result;
    }
    @Get(':id')
    async findOneUser(@Param('id') id: string){
        const result = await this.userService.recupOneUser(id);
        return result;
    }
    @Post()
    async addUser(@Body('firstName') firstName: string, @Body('lastName') lastName: string, @Body('address') address: string){
        const result = await this.userService.ajouterUser(firstName,lastName,address);
        return result;
    }
    @Patch(':id')
    async updateUser(@Param('id') id: string, @Body('firstName') firstName: string,  @Body('lastName') lastName: string,  @Body('address') address: string){
        const result = await this.userService.mettreAJourUser(id,firstName,lastName,address);
        return result;
    }
    @Delete(':id')
    async deleteUser(@Param('id') id: string){
        const result = await this.userService.supprimerUser(id);
        return result;
    }
}