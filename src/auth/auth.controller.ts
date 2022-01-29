import { Body, Controller, Get, Post } from '@nestjs/common';
import { IUser } from './auth.model';
import { AuthRoutes } from './auth.routes';
import { AuthService } from './auth.service';

@Controller(AuthRoutes.Main)
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  signUp(@Body() user: IUser) {
    return this.authService.signUp(user);
  }

  @Get()
  get() {
    return this.authService.getUsers();
  }
}
