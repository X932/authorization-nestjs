import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { IUser } from './users.model';
import { UsersRoutes } from './users.routes';
import { UsersService } from './users.service';

@Controller(UsersRoutes.Main)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post(UsersRoutes.CreateUpdate)
  @HttpCode(HttpStatus.OK)
  createUpdateUser(@Body() user: IUser): void {
    this.usersService.createUpdateUser(user);
  }

  @Get()
  getUsers(): IUser[] {
    return this.usersService.getUsers();
  }
}
