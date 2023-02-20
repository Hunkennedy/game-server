import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GamesController } from './controllers/games/games.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { PublishersController } from './controllers/publishers/publishers.controller';
import { UsersController } from './controllers/users/users.controller';
import { ServersController } from './controllers/servers/servers.controller';

@Module({
  imports: [],
  controllers: [AppController, GamesController, CategoriesController, PublishersController, UsersController, ServersController],
  providers: [AppService],
})
export class AppModule {}
