import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';
import { UsersRoutes } from './users.routes';
import { GroupUserEntity } from './models/groupUser.entity';
import { JwtAuthGuard } from '../../shared/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller(UsersRoutes.Main)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(':id')
  getUsersByGroup(@Param('id') id: string): Observable<GroupUserEntity[]> {
    return this.usersService.getUsers(id);
  }
}
