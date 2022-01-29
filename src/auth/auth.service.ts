import { Injectable } from '@nestjs/common';
import { AuthenticationDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  private users: AuthenticationDto[] = [];

  public signUp(user: AuthenticationDto) {
    this.users.push(user);
  }

  public getUsers() {
    return this.users;
  }
}
