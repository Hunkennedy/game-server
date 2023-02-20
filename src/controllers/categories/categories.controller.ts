import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get()
  getCategories() {
    return { status: true, message: `All Categories` };
  }

  @Get(':id/games')
  getGameByCategory(@Param('id') id: number) {
    return {
      status: true,
      message: `Games with the category: ${id}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      status: true,
      message: 'Category Created',
      payload: payload,
    };
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id: id,
      modified: new Date().toLocaleDateString().slice(0, 20),
      payload: payload,
    };
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      id: id,
      deleted: new Date().toLocaleDateString().slice(0, 20),
    };
  }
}
