import { IUser, ResponseWrapper } from './users.model';
import { UsersRoutes } from './users.routes';
import { UsersService } from './users.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller(UsersRoutes.Main)
export class UsersController {
  constructor(private usersService: UsersService) {}

  private responseWrapper: ResponseWrapper<IUser[]> = new ResponseWrapper<
    IUser[]
  >();

  @Post(UsersRoutes.CreateUpdate)
  createUpdateUser(@Body() user: IUser) {
    this.usersService.createUpdateUser(user);
  }

  @Get()
  getUsers(): ResponseWrapper<IUser[]> {
    this.responseWrapper.message = 'Success';
    this.responseWrapper.payload = this.usersService.getUsers();
    return this.responseWrapper;
  }
}
