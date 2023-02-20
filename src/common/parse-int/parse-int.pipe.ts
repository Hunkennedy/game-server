import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const parsedValue = parseInt(value);
    if (isNaN(parsedValue))
      throw new BadRequestException(`'${value}' is not a number`);
    return parsedValue;
  }
}
