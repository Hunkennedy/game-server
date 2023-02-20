import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateServerDto, UpdateServerDto } from 'src/dtos/server.dto';
import { Server } from 'src/models/server.model';

@Injectable()
export class ServersService {
  private id = 1;
  private servers: Server[] = [];

  getAllServers(): Server[] {
    return this.servers;
  }

  getServerById(id: number): Server {
    const server = this.servers.find((x) => x.id == id);
    if (!server)
      throw new NotFoundException(`El server:${id} no fue encontrado`);
    return server;
  }

  create(payload: CreateServerDto) {
    const server = {
      id: this.id,
      ...payload,
    };
    this.id++;
    this.servers.push(server);
    return true;
  }

  update(id: number, payload: UpdateServerDto) {
    if (!this.getServerById(id)) throw new NotFoundException();
    this.servers = this.servers.map((x) => {
      if (x.id != id) return x;
      return {
        ...x,
        ...payload,
      };
    });
    return true;
  }

  delete(id: number) {
    if (!this.getServerById(id)) throw new NotFoundException();
    this.servers = this.servers.filter((x) => x.id != id);
    return true;
  }
}
