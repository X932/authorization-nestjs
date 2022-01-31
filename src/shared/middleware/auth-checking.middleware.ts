import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthCheckingMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // if (!req.headers.authorization?.trim()) {
    //   throw new HttpException(
    //     { message: ResponseStatuses.UNAUTHORIZED.description },
    //     ResponseStatuses.UNAUTHORIZED.code,
    //   );
    // }
    next();
  }
}
