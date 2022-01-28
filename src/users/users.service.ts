import { Injectable } from '@nestjs/common';
import { IUser } from './users.model';

@Injectable()
export class UsersService {
  private users: IUser[] = [];

  public createUpdateUser(user: IUser) {
    this.users.push(user);
  }

  public getUsers(): IUser[] {
    return this.users;
  }
}
