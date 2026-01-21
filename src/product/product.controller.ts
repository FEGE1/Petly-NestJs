/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findAll(id);
  }

  @Post()
  crate(@Body() body) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return body;
  }
}
