import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/dtos/user.dto';
import { User } from 'src/models/user.model';

@Injectable()
export class UsersService {
  private id = 1;
  private users: User[] = [];
  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User {
    const user = this.users.find((user) => user.id == id);
    if (!user) throw new NotFoundException();
    return user;
  }

  create(payload: CreateUserDto): boolean {
    const user = {
      id: this.id,
      ...payload,
    };
    this.id++;
    this.users.push(user);
    return true;
  }

  update(id: number, payload: UpdateUserDto) {
    if (!this.getUserById(id)) throw new NotFoundException();
    this.users = this.users.map((x) => {
      if (x.id == id) {
        return {
          ...x,
          ...payload,
        };
      }
      return x;
    });
    return true;
  }

  delete(id: number) {
    const user = this.getUserById(id);
    if (!user) throw new NotFoundException();
    this.users = this.users.filter((user) => user.id != id);
    return true;
  }
}
