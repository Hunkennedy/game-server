import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('games')
export class GamesController {
  games = [
    {
      titulo: 'Grand Theft Auto: Vice City',
      release: '29-10-2002',
      developer: 'Rockstar North',
      publisher: 'Rockstar Games',
      price: 60,
    },
    {
      titulo: 'Grand Theft Auto: San Andreas',
      release: '24-11-2004',
      developer: 'Rockstar North',
      publisher: 'Rockstar Games',
      price: 60,
    },
  ];
  @Get('')
  getAll(
    @Query('limit') limit = 10,
    @Query('offset') offset = 0,
    @Query('developer') developer: string,
  ) {
    return {
      status: true,
      message: `All Games with limit ${limit} and offset ${offset}. Developed by ${developer}`,
      payload: this.games,
    };
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return {
      status: true,
      message: `Product ID: ${id}`,
    };
  }
  @Post()
  create(@Body() payload: any) {
    this.games.push(payload);
    return {
      status: true,
      message: 'Game Created',
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
