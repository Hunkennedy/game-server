import { IsString, IsNumber, IsNotEmpty, IsPositive } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateGameDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;
  @IsNotEmpty()
  @IsString()
  readonly release: string;
  @IsString()
  @IsNotEmpty()
  readonly developer: string;
  @IsString()
  @IsNotEmpty()
  readonly publisher: string;
  @IsNumber()
  @IsPositive()
  readonly price: number;
}

export class UpdateGameDto extends PartialType(CreateGameDto) {}
