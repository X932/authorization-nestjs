import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { ResponseStatuses } from 'src/shared/constants/response-statuses';
import { ResponseWrapper } from './response.model';

@Injectable()
export class ResponseWrapperInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ResponseWrapper<any>> {
    return next.handle().pipe(
      map((data) => ({
        message: ResponseStatuses.OK.description,
        payload: data,
      })),
    );
  }
}
