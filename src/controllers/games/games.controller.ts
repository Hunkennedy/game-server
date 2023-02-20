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
import { GamesService } from 'src/services/games.service';
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';
import { CreateGameDto, UpdateGameDto } from 'src/dtos/game.dtos';

@Controller('games')
export class GamesController {
  constructor(private readonly GamesService: GamesService) {}
  games = [
    {
      title: 'Grand Theft Auto: Vice City',
      release: '29-10-2002',
      developer: 'Rockstar North',
      publisher: 'Rockstar Games',
      price: 60,
    },
    {
      title: 'Grand Theft Auto: San Andreas',
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
      payload: this.GamesService.getAllGames(),
    };
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return {
      status: true,
      message: this.GamesService.getGameById(id),
    };
  }
  @Post()
  create(@Body() payload: CreateGameDto) {
    return {
      status: this.GamesService.create(payload),
      message: 'Game Created',
    };
  }
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateGameDto,
  ) {
    return {
      id: id,
      modified: new Date().toLocaleDateString().slice(0, 20),
      payload: this.GamesService.update(id, payload),
    };
  }
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return {
      id: this.GamesService.delete(id),
      deleted: new Date().toLocaleDateString().slice(0, 20),
    };
  }
}
