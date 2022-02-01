import { Controller, Get, UseGuards } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';
import { UsersRoutes } from './users.routes';
import { UserEntity } from './users.entity';
import { JwtAuthGuard } from '../../shared/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller(UsersRoutes.Main)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers(): Observable<UserEntity[]> {
    return this.usersService.getUsers();
  }
}
