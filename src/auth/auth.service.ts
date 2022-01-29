import { Injectable } from '@nestjs/common';
import { IUser } from './auth.model';

@Injectable()
export class AuthService {
  private users: IUser[] = [];

  public signUp(user: IUser) {
    this.users.push(user);
  }

  public getUsers() {
    return this.users;
  }
}
