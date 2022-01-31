import { Body, Controller, Post } from '@nestjs/common';
import { AuthenticationDto, AuthorizationDto } from './models/auth.dto';
import { AuthRoutes } from './auth.routes';
import { AuthService } from './auth.service';
import { User } from './models/user.model';
import { UserEntity } from '../users/users.entity';

@Controller(AuthRoutes.Main)
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post(AuthRoutes.SignUp)
  signUp(@Body() user: AuthenticationDto): Promise<UserEntity> {
    const userData = new User(user.name, user.password, user.email);
    return this.authService.signUp(userData);
  }

  @Post(AuthRoutes.SignIn)
  signIn(@Body() user: AuthorizationDto): Promise<string> {
    return this.authService.signIn(user);
  }
}
