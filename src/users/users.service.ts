import { IUser } from './users.model';
import { Injectable } from '@nestjs/common';

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
