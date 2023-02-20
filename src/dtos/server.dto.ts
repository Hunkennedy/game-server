import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNotEmpty, Length } from 'class-validator';

export class CreateServerDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  @IsString()
  @Length(2, 2)
  code: string;
  @IsNotEmpty()
  @IsString()
  created: string;
  @IsString()
  modified: string;
}

export class UpdateServerDto extends PartialType(CreateServerDto) {}
