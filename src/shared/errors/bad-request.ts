import { HttpException } from '@nestjs/common';
import { ResponseStatuses } from '../constants/response-statuses';

export function badRequest() {
  return new HttpException(
    { message: ResponseStatuses.BAD_REQUEST.description },
    ResponseStatuses.BAD_REQUEST.code,
  );
}
