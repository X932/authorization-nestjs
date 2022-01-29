import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthenticationDto } from './dto/auth.dto';
import { AuthRoutes } from './auth.routes';
import { AuthService } from './auth.service';

@Controller(AuthRoutes.Main)
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post(AuthRoutes.SignUp)
  signUp(@Body() user: AuthenticationDto) {
    this.authService.signUp(user);
  }

  @Get()
  get() {
    return this.authService.getUsers();
  }
}
