import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthenticationDto } from './dto/auth.dto';
import { AuthRoutes } from './auth.routes';
import { AuthService } from './auth.service';
import { ValidatePipe } from '../shared/pipes/validations/validate.pipe';

@Controller(AuthRoutes.Main)
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post(AuthRoutes.SignUp)
  async signUp(@Body(new ValidatePipe()) user: AuthenticationDto) {
    this.authService.signUp(user);
  }

  @Get()
  get() {
    return this.authService.getUsers();
  }
}
