import { Controller,Param,Body,Get,Post,Patch,Delete } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController{
    constructor(private productService: ProductService){}

    @Get()
    async findAllProduct(){
        const prod = await this.productService.recupAllProduct();
        return prod;
    }
    @Get(':id')
    async findOneProduct(@Param('id') id: string){
        const prod = await this.productService.recupOneProduct(id);
        return prod;
    }
    @Post()
    async addProduct(@Body('name') name: string,@Body('price') price: string, @Body('quantity') quantity: string, @Body('image') image: string){
        const result = await this.productService.ajouterProduct(name,price,quantity,image);
        return result;
    }
    @Patch(':id')
    async updateProduct(@Param('id') id: string, @Body('name') name: string, @Body('price') price: string, @Body('quantity') quantity: string, @Body('image') image: string){
        const result = await this.productService.modifierProduct(id,name,price,quantity,image);
        return result;
    }
    @Delete(':id')
    async deleteProduct(@Param('id') id: string){
        const result = await this.productService.supprimerProduit(id);
        return result;
    }
}