import { Controller,Param,Body,Get,Post,Patch,Delete } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController{
    constructor(private productService: ProductService){}

    @Get()
    findAllProduct(){

    }
    @Get(':id')
    findOneProduct(){

    }
    @Post()
    addProduct(){

    }
    @Patch(':id')
    updateProduct(){

    }
    @Delete(':id')
    deleteProduct(){
        
    }
}