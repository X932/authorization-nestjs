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

  public getUsersByGroupId(groupId: string): Observable<GroupUserEntity[]> {
    return from(
      this.groupUserRepository.find({
        where: { group: { id: groupId } },
        relations: ['user'],
      }),
    );
  }
}
