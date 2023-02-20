import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('servers')
export class ServersController {
  @Get()
  getServers() {
    return {
      status: true,
      message: `Getting all Servers`,
    };
  }

  @Get(':id')
  getServerById(@Param('id') id: number) {
    return {
      status: true,
      message: `Getting Server with ID ${id}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      status: true,
      message: 'Server Created',
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
