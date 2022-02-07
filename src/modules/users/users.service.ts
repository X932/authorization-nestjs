import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { GroupUserEntity } from './models/groupUser.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(GroupUserEntity)
    private groupUserRepository: Repository<GroupUserEntity>,
  ) {}

  public getUsers(groupId: string): Observable<GroupUserEntity[]> {
    return from(
      this.groupUserRepository
        .createQueryBuilder('group_user')
        .innerJoinAndSelect(
          'group_user.user',
          'user',
          'group_user.group = :id',
          {
            id: groupId,
          },
        )
        .innerJoinAndSelect(
          'group_user.group',
          'group',
          'group_user.group = :id',
          {
            id: groupId,
          },
        )
        .getMany(),
    );
  }
}
