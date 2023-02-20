import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/dtos/user.dto';
import { UsersService } from 'src/services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  getUsers() {
    return {
      status: true,
      message: this.userService.getAllUsers(),
    };
  }

  @Get(':id')
  getUserById(@Param('id') id: number) {
    return {
      status: true,
      message: this.userService.getUserById(id),
    };
  }

  @Post()
  create(@Body() payload: CreateUserDto) {
    return {
      status: this.userService.create(payload),
      message: 'User Created',
    };
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateUserDto) {
    return {
      id: id,
      modified: this.userService.update(id, payload),
    };
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      id: id,
      deleted: this.userService.delete(id),
    };
  }
}
