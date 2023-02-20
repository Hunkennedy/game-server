import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return {
      status: true,
      message: `Getting all users`,
    };
  }

  @Get(':id')
  getUserById(@Param('id') id: number) {
    return {
      status: true,
      message: `Getting user with ID ${id}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      status: true,
      message: 'User Created',
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
