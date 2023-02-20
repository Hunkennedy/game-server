import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsEmail, IsDate } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly register: string;
  @IsString()
  @IsEmail()
  readonly email: string;
  @IsString()
  readonly server: string;
  @IsString()
  readonly image: string;
  @IsString()
  readonly birth: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
