import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';
import { CreateServerDto, UpdateServerDto } from 'src/dtos/server.dto';
import { ServersService } from 'src/services/servers.service';

@Controller('servers')
export class ServersController {
  constructor(private readonly ServerService: ServersService) {}
  @Get()
  getServers() {
    return {
      status: true,
      message: this.ServerService.getAllServers(),
    };
  }

  @Get(':id')
  getServerById(@Param('id') id: number) {
    return {
      status: true,
      message: this.ServerService.getServerById(id),
    };
  }

  @Post()
  create(@Body() payload: CreateServerDto) {
    return {
      status: true,
      message: this.ServerService.create(payload),
    };
  }
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateServerDto,
  ) {
    return {
      id: id,
      modified: this.ServerService.update(id, payload),
    };
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      id: id,
      deleted: this.ServerService.delete(id),
    };
  }
}
