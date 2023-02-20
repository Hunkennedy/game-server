import { Injectable, NotFoundException } from '@nestjs/common';
import { Game } from 'src/models/game.model';

@Injectable()
export class GamesService {
  private counterId = 3;
  private games: Game[] = [
    {
      id: 1,
      titulo: 'Grand Theft Auto: San Andreas',
      release: '24-11-2004',
      developer: 'Rockstar North',
      publisher: 'Rockstar Games',
      price: 60,
    },
    {
      id: 2,
      titulo: 'Grand Theft Auto: Vice City',
      release: '29-10-2002',
      developer: 'Rockstar North',
      publisher: 'Rockstar Games',
      price: 60,
    },
  ];

  getAllGames(): Game[] {
    return this.games;
  }

  getGameById(id: number): Game {
    const game: Game = this.games.find((x) => x.id == id);
    if (!game) throw new NotFoundException();
    return game;
  }

  create(payload: any): boolean {
    try {
      console.log(payload);
      const newGame = {
        id: this.counterId,
        ...payload,
      };
      this.counterId++;
      this.games.push(newGame);
      return true;
    } catch (error) {
      return false;
    }
  }

  delete(id: number): number {
    if (!this.getGameById(id)) throw new NotFoundException();
    this.games = this.games.filter((x) => x.id != id);
    return id;
  }

  update(id: number, payload: any): string {
    if (!this.getGameById(id)) throw new NotFoundException();
    this.games = this.games.map((game) => {
      if (game.id == id) {
        return {
          ...game,
          ...payload,
        };
      } else {
        return game;
      }
    });

    return 'Game Updated';
  }
}
