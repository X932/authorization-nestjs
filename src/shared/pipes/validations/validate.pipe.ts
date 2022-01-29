import {
  ArgumentMetadata,
  HttpException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { ResponseStatuses } from '../../constants/response-statuses';

@Injectable()
export class ValidatePipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype) {
      return value;
    }
    const convertedValue = plainToInstance(metatype, value);
    const errors = await validate(convertedValue);
    if (errors.length > 0) {
      throw new HttpException(
        { message: ResponseStatuses.BAD_REQUEST.description },
        ResponseStatuses.BAD_REQUEST.code,
      );
    }
    return value;
  }
}
