import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('publishers')
export class PublishersController {
  @Get()
  getPublishers() {
    return {
      status: true,
      message: `Getting all Publishers`,
    };
  }

  @Get(':id')
  getPublisherById(@Param('id') id: number) {
    return {
      status: true,
      message: `Getting Publisher with ID ${id}`,
    };
  }
  @Post()
  create(@Body() payload: any) {
    return {
      status: true,
      message: 'Publisher Created',
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
