import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { IUser } from './users.model';
import { UsersRoutes } from './users.routes';
import { UsersService } from './users.service';
import { ResponseStatuses } from '../shared/constants/response-statuses';

@Controller(UsersRoutes.Main)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @HttpCode(ResponseStatuses.OK.code)
  createUpdateUser(@Body() user: IUser): void {
    this.usersService.createUpdateUser(user);
  }

  @Get()
  getUsers(): IUser[] {
    return this.usersService.getUsers();
  }
}
