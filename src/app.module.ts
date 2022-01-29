import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { AuthCheckingMiddleware } from './shared/middleware/auth-checking.middleware';
import { ResponseWrapperInterceptor } from './shared/interceptors/response/response-wrapper.interceptor';
import { ROUTE_PREFIX } from './shared/constants/routes';
import { UsersRoutes } from './users/users.routes';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseWrapperInterceptor,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthCheckingMiddleware)
      .exclude(`${ROUTE_PREFIX}/${UsersRoutes.Authorization}/(.*)`)
      .forRoutes('');
  }
}
